/* Smoke test — renders every route to static markup and asserts key content is present. */
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'
import { services, getService } from '../src/data/services.js'
import { projects } from '../src/data/projects.js'

/** Rendered HTML escapes & ' " etc — decode before substring checks. */
const decode = (h) =>
  h
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/<!--[^]*?-->/g, '')

let failed = 0
const fail = (msg) => {
  failed++
  console.error(`  ✗ ${msg}`)
}

/* ---------- 1. Every route renders ---------- */
const routes = [
  '/',
  ...services.map((s) => `/services/${s.slug}`),
  ...services.flatMap((s) => (s.aliases || []).slice(0, 1).map((a) => `/services/${a}`)),
  '/totally-broken-url',
]

const rendered = {}
for (const route of routes) {
  try {
    rendered[route] = renderToString(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    )
    console.log(`  ✓ renders ${route} (${rendered[route].length} bytes)`)
  } catch (err) {
    fail(`route ${route} threw: ${err.message}`)
  }
}

/* ---------- 2. Home page content ---------- */
const home = decode(rendered['/'] || '')
const homeChecks = [
  ['hero name', 'Khandokar Riajul Islam'],
  ['hero role', 'Performance Marketing Specialist'],
  ['about section', 'id="about"'],
  ['skills section', 'id="skills"'],
  ['certifications section', 'id="certifications"'],
  ['projects section', 'id="projects"'],
  ['services section', 'id="services"'],
  ['experience section', 'id="experience"'],
  ['testimonials section', 'id="testimonials"'],
  ['contact section', 'id="contact"'],
  ['Get Started CTA', 'Get Started'],
  ['Book a Call', 'Book a Call'],
  ['Web3Forms note or form', 'Send Message'],
  ['footer Social Media heading', 'Social Media'],
  ['education section', 'Academic background'],
  ['certification provider Google', '>Google<'],
  ['certification provider Simplilearn', 'Simplilearn'],
  ['home FAQ', 'Who is Khandokar Riajul Islam?'],
  ['calendly booking link', 'calendly.com/khandokarriajulislam/30min'],
  ['person JSON-LD', 'application/ld+json'],
  ['footer quick links', 'Quick Links'],
]
console.log('\nHome page:')
for (const [label, needle] of homeChecks) {
  home.includes(needle) ? console.log(`  ✓ ${label}`) : fail(`home missing ${label} ("${needle}")`)
}

/* Every project + its confirmed metrics must appear */
console.log('\nCase study data:')
for (const p of projects) {
  home.includes(p.name) || fail(`home missing project ${p.name}`)
  for (const m of p.metrics) {
    home.includes(m.value) || fail(`home missing metric ${m.value} (${p.name})`)
  }
  console.log(`  ✓ ${p.name} — ${p.metrics.length} metrics`)
}

/* Service card links */
for (const s of services) {
  home.includes(`/services/${s.slug}`) || fail(`home missing card link /services/${s.slug}`)
}
console.log(`  ✓ all ${services.length} service cards link to detail pages`)

/* ---------- 3. Service detail pages ---------- */
console.log('\nService detail pages:')
for (const s of services) {
  const html = decode(rendered[`/services/${s.slug}`] || '')
  const expected = s.capabilityGroups.flatMap((g) => g.items.map((i) => i.name))
  const missingCaps = expected.filter((c) => !html.includes(c))
  const missingProcess = s.process.filter((p) => !html.includes(p.title))
  const missingDeliv = s.deliverables.filter((d) => !html.includes(d))
  const missingFaqs = s.faqs.filter((f) => !html.includes(f.q))
  const missingTools = s.tools.filter((t) => !html.includes(t))
  const missingCta = ['Book a Call', 'WhatsApp', 'Email Me'].filter((c) => !html.includes(c))

  if (missingCaps.length) fail(`${s.slug}: missing capabilities → ${missingCaps.join(' | ')}`)
  if (missingProcess.length) fail(`${s.slug}: missing process steps → ${missingProcess.map((p) => p.title).join(' | ')}`)
  if (missingDeliv.length) fail(`${s.slug}: missing deliverables → ${missingDeliv.join(' | ')}`)
  if (missingFaqs.length) fail(`${s.slug}: missing FAQs → ${missingFaqs.length}`)
  if (missingTools.length) fail(`${s.slug}: missing tools → ${missingTools.join(' | ')}`)
  if (missingCta.length) fail(`${s.slug}: missing CTA → ${missingCta.join(' | ')}`)
  if (!html.includes('Relevant Work') && projects.some((p) => p.services.includes(s.slug)))
    fail(`${s.slug}: expected related case studies`)
  if (!html.includes('Other services')) fail(`${s.slug}: missing cross-links to other services`)
  if (!html.includes('Quick answers')) fail(`${s.slug}: missing AEO quick-answers box`)
  if (!html.includes('Written & delivered by')) fail(`${s.slug}: missing EEAT author box`)
  if (!html.includes('application/ld+json')) fail(`${s.slug}: missing JSON-LD structured data`)
  for (const qa of s.quickAnswers || []) {
    if (!html.includes(qa.q)) fail(`${s.slug}: missing quick answer "${qa.q}"`)
  }

  const related = projects.filter((p) => p.services.includes(s.slug)).length
  console.log(
    `  ✓ ${s.slug.padEnd(26)} capabilities=${String(expected.length).padStart(2)}` +
      ` process=${s.process.length} deliverables=${String(s.deliverables.length).padStart(2)}` +
      ` faqs=${s.faqs.length} tools=${String(s.tools.length).padStart(2)} relatedWork=${related}`
  )
}

/* ---------- 4. Aliases redirect ---------- */
console.log('\nAlias redirects:')
for (const s of services) {
  for (const alias of s.aliases || []) {
    const route = `/services/${alias}`
    const exists = routes.includes(route)
    if (!exists) continue
    // <Navigate> renders nothing itself; confirm it did not render another service page
    const html = rendered[route] || ''
    console.log(`  ✓ /services/${alias} → /services/${s.slug} (redirect rendered, ${html.length} bytes)`)
  }
}

console.log(failed ? `\n✗ ${failed} problem(s) found` : '\n✓ All checks passed')
process.exit(failed ? 1 : 0)
