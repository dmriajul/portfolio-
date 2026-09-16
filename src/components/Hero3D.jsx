import { useEffect, useRef } from 'react'

/**
 * WebGL hero backdrop built with three.js (loaded lazily, only in the browser).
 *
 * - emerald/gold particle field with additive glow
 * - two slowly rotating wireframe solids for depth
 * - camera follows the pointer with a soft lerp (3D parallax)
 * - pauses when off-screen, honours prefers-reduced-motion,
 *   and silently disables itself when WebGL is unavailable
 *   (SSR, jsdom, old browsers) so it can never break the page.
 */
export default function Hero3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    let disposed = false
    let cleanup = () => {}

    const start = async () => {
      let THREE
      try {
        THREE = await import('three')
      } catch {
        return // module unavailable → CSS aurora background remains
      }
      if (disposed || !mount.isConnected) return

      // Probe WebGL support first so unsupported environments stay silent
      const probe = document.createElement('canvas')
      const gl = probe.getContext?.('webgl2') || probe.getContext?.('webgl')
      if (!gl) return
      gl.getExtension?.('WEBGL_lose_context')?.loseContext?.()

      const canvas = document.createElement('canvas')
      canvas.className = 'hero3d-canvas'
      mount.appendChild(canvas)

      let renderer
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        })
      } catch {
        canvas.remove()
        return // no WebGL → graceful CSS-only background
      }

      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x03110b, 0.055)

      const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 120)
      camera.position.set(0, 0, 16)

      renderer.setClearColor(0x000000, 0)

      /* ---------- particle field ---------- */
      const COUNT = 850
      const positions = new Float32Array(COUNT * 3)
      const colors = new Float32Array(COUNT * 3)
      const emerald = new THREE.Color(0x34d399)
      const gold = new THREE.Color(0xf5c451)
      const deep = new THREE.Color(0x0ea371)

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 46
        positions[i * 3 + 1] = (Math.random() - 0.5) * 26
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 4
        const pick = Math.random()
        const c = pick < 0.62 ? emerald : pick < 0.82 ? deep : gold
        colors[i * 3] = c.r
        colors[i * 3 + 1] = c.g
        colors[i * 3 + 2] = c.b
      }

      const pGeo = new THREE.BufferGeometry()
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      const pMat = new THREE.PointsMaterial({
        size: 0.085,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
      const points = new THREE.Points(pGeo, pMat)
      scene.add(points)

      /* ---------- rotating wireframe solids ---------- */
      const knotGeo = new THREE.TorusKnotGeometry(4.4, 0.62, 150, 18, 2, 3)
      const knotMat = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.16,
      })
      const knot = new THREE.Mesh(knotGeo, knotMat)
      knot.position.set(6.5, 1.2, -6)
      scene.add(knot)

      const icoGeo = new THREE.IcosahedronGeometry(2.6, 1)
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0xf5c451,
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      })
      const ico = new THREE.Mesh(icoGeo, icoMat)
      ico.position.set(-8.5, -2.5, -4)
      scene.add(ico)

      /* ---------- pointer parallax ---------- */
      const target = { x: 0, y: 0 }
      const onPointer = (e) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2
        target.y = (e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('pointermove', onPointer, { passive: true })

      /* ---------- sizing ---------- */
      const resize = () => {
        const w = mount.clientWidth || 1
        const h = mount.clientHeight || 1
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      resize()
      window.addEventListener('resize', resize)

      /* ---------- pause when off-screen ---------- */
      let visible = true
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
      })
      io.observe(mount)

      /* ---------- loop ---------- */
      const clock = new THREE.Clock()
      let raf = 0

      const frame = () => {
        raf = requestAnimationFrame(frame)
        if (!visible || document.hidden) return

        const t = clock.getElapsedTime()
        points.rotation.y = t * 0.028
        points.rotation.x = Math.sin(t * 0.16) * 0.06
        knot.rotation.x = t * 0.14
        knot.rotation.y = t * 0.1
        ico.rotation.x = -t * 0.18
        ico.rotation.y = t * 0.12

        camera.position.x += (target.x * 1.7 - camera.position.x) * 0.045
        camera.position.y += (-target.y * 1.1 - camera.position.y) * 0.045
        camera.lookAt(0, 0, 0)

        renderer.render(scene, camera)
      }

      if (reduce) {
        // single static frame for reduced-motion users
        renderer.render(scene, camera)
      } else {
        frame()
      }

      cleanup = () => {
        disposed = true
        cancelAnimationFrame(raf)
        window.removeEventListener('pointermove', onPointer)
        window.removeEventListener('resize', resize)
        io.disconnect()
        pGeo.dispose()
        pMat.dispose()
        knotGeo.dispose()
        knotMat.dispose()
        icoGeo.dispose()
        icoMat.dispose()
        renderer.dispose()
        canvas.remove()
      }
    }

    start()

    return () => cleanup()
  }, [])

  return <div ref={mountRef} className="hero3d" aria-hidden="true" />
}
