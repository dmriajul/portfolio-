import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is '/' so the app works on a root domain (portfolio.riajultech.com)
// and in the Arena live preview proxy alike.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    // Allow any origin: the preview is proxied under https://{port}-{sandbox}.e2b.app
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
