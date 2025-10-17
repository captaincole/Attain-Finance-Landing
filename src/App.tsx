import { useState } from 'react'
import ChatMessage from '@components/ChatMessage'
import SubscriptionChart from '@components/SubscriptionChart'
import EmailModal from '@components/EmailModal'
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
        </div>
      </header>

      <main>
        <div className="cta-section">
          <h1 className="cta-title">
            Your Finances, Your AI<br />
            Attain Your Financial Goals
          </h1>
          <p className="cta-description">
            Connect your accounts to any AI assistant. Get expert analysis on spending, saving, and investing—all in natural conversation.
          </p>
          <button className="coming-soon-button" onClick={() => setIsModalOpen(true)}>
            Join the Waitlist
          </button>
        </div>

        <div className="chat-window">
          <div className="chat-window-header">
            <div className="chat-title">Chat</div>
          </div>

          <div className="chat-container">
            <div className="chat-messages">
              <ChatMessage text="How can I save more money?" isUser={true} />
              <ChatMessage text="I used Attain to look at your recent transactions, and cancelling your unused subscription would save $90/month. Below is your montly budget" isUser={false}>
                <SubscriptionChart />
              </ChatMessage>

              <div className="chat-separator" />

              <ChatMessage text="How can I invest my money in a smarter way?" isUser={true} />
              <ChatMessage text="Based on your spending patterns, you have $450/mo available to invest. I'd split 80% into low-cost index funds (S&P 500, total market) and 20% into active investments like individual tech stocks you believe in. Your current savings account is earning 0.01% APY—moving to a high-yield account would earn you an extra $284/year on your $15k emergency fund." isUser={false} />
            </div>
          </div>

          <div className="chat-input-area">
            <div className="chat-input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder="Message chat..."
                disabled
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <a href="https://attain.software" target="_blank" rel="noopener noreferrer">
          Attain Software Inc
        </a>
      </footer>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
