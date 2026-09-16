import { Component } from 'react'

/**
 * Last line of defence: if any runtime error ever happens, visitors see a
 * styled, readable card (with a reload button) instead of a white screen.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Portfolio runtime error:', error, info?.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="error-boundary" role="alert">
        <div className="error-boundary-card">
          <span className="error-boundary-icon">!</span>
          <h1>Something went wrong while loading this page</h1>
          <p>
            This is usually a temporary loading or cache issue. Reload once — if it persists,
            reach me directly and I will fix it right away.
          </p>
          <pre>{String(this.state.error?.message || this.state.error).slice(0, 300)}</pre>
          <div className="error-boundary-actions">
            <button type="button" className="btn btn-gold btn-lg" onClick={() => window.location.reload()}>
              Reload page
            </button>
            <a className="btn btn-outline btn-lg" href="mailto:khandokarriajulislam@gmail.com">
              Email me
            </a>
            <a className="btn btn-ghost btn-lg" href="https://wa.me/8801954447017" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }
}
