import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import BackToTop from './BackToTop.jsx'

export default function Layout() {
  return (
    <>
      <div className="bg-wash" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <ScrollProgress />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
