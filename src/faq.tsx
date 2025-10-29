import React from 'react'
import ReactDOM from 'react-dom/client'
import FAQ from '@components/FAQ'
import './App.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div className="app faq-page">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <img src="/favicon.svg" alt="Attain" className="logo-icon" />
              <span>attain</span>
            </div>
            <nav className="header-nav">
              <a href="/">Home</a>
              <a href="#top">FAQ</a>
              <a href="/#installation">Installation Instructions</a>
            </nav>
          </div>
        </header>

        <main id="top">
          <FAQ />
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/#how-it-works">How It Works</a>
              <a href="/#features">Features</a>
            </div>
            <a href="https://attain.software" target="_blank" rel="noopener noreferrer">
              Attain Software Inc
            </a>
          </div>
        </footer>
      </div>
    </React.StrictMode>
  )
}
