import { useState } from 'react'
import EmailModal from '@components/EmailModal'
import Hero from '@components/Hero'
import HowItWorks from '@components/HowItWorks'
import Examples from '@components/Examples'
import FinalCTA from '@components/FinalCTA'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="/favicon.svg" alt="Attain" className="logo-icon" />
            <span>attain</span>
          </div>
          <nav className="header-nav">
            <a href="#installation">Installation Instructions</a>
            <a href="/faq">FAQ</a>
          </nav>
        </div>
      </header>

      <Hero onJoin={() => setIsModalOpen(true)} />

      <main>
        <HowItWorks />
        <Examples />
        <section id="installation">
          {/* Installation instructions content goes here */}
        </section>
        <FinalCTA onJoin={() => setIsModalOpen(true)} />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#how-it-works">How It Works</a>
            <a href="/faq">FAQ</a>
          </div>
          <a href="https://attain.software" target="_blank" rel="noopener noreferrer">
            Attain Software Inc
          </a>
        </div>
      </footer>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
