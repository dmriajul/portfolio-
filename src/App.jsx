import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import { services } from './data/services.js'

/**
 * Routes
 * ------
 * /                                   → full portfolio
 * /services/:slug                     → dedicated service detail page
 *                                       (social-media-marketing, meta-ads,
 *                                        google-ads, seo, analytics, cro)
 * /services/smm  (and other aliases)  → redirected to the canonical slug so
 *                                       short links never 404
 * *                                   → 404 page
 */
export default function App() {
  // Build alias redirects: /services/smm → /services/social-media-marketing
  const aliasRedirects = services.flatMap((s) =>
    (s.aliases || []).map((alias) => ({
      from: `/services/${alias}`,
      to: `/services/${s.slug}`,
    }))
  )

  return (
    <>
      <ScrollManager />
      <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          {aliasRedirects.map((r) => (
            <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </>
  )
}
