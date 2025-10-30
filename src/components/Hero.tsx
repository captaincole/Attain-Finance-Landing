type HeroProps = {
  onJoin: () => void
}

export default function Hero({ onJoin }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">Beta</span>
          <h1 className="hero-title">Chat, now fluent in all you finances</h1>
          <p className="hero-description">
            Connect Attain to ChatGPT, Claude, or Gemini and ask natural questions about your balances,
            budgets, and investments—no new dashboards or context switching required.
          </p>

          <div className="hero-actions">
            <button className="cta-button" onClick={onJoin}>
              Join the Beta
            </button>
            <button className="cta-secondary">See how it works</button>
          </div>

          <div className="hero-footnote">
            <span>Secure MCP authorization</span>
            <span>Built AI-Native</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-gradient" />
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-card-title">Chat session · Attain</span>
              <span className="hero-card-status">Live</span>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-message">
                <span className="hero-card-label">You</span>
                <p>Whats my current financial situation?</p>
              </div>
              <div className="hero-card-message hero-card-message--assistant">
                <span className="hero-card-label">Attain</span>
                <ul>
                  <li><strong>Total Net Worth:</strong> $182k</li>
                  <li><strong>Liquid cash:</strong> $32,420 across checking + HYSA</li>
                  <li><strong>Debt</strong> $46,200 between Student Loans and Car Payments</li>
                  <li><strong>Investments:</strong> Portfolio is overweight in tech, consider diversifying</li>
                  <li><strong>Summary:</strong> You have a strong financial situation, and with a refinance on your loan we could improve you debt payoff rate by 15% / month</li>
                </ul>
              </div>
            </div>
            <div className="hero-card-footer">
              <span className="hero-card-chip">Syncing accounts</span>
              <span className="hero-card-chip">ChatGPT</span>
              <span className="hero-card-chip">Claude</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
