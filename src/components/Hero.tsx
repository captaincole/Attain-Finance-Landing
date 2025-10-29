type HeroProps = {
  onJoin: () => void
}

export default function Hero({ onJoin }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">Beta access</span>
          <h1 className="hero-title">All of your finances, now fluent in chat</h1>
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
            <span>No waitlist fees</span>
            <span>Secure MCP authorization</span>
            <span>Built for AI-native operators</span>
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
                <p>What&apos;s my cash runway if I keep spending like this?</p>
              </div>
              <div className="hero-card-message hero-card-message--assistant">
                <span className="hero-card-label">Attain</span>
                <ul>
                  <li><strong>Runway:</strong> 6.5 months at current burn</li>
                  <li><strong>Liquid cash:</strong> $86,420 across checking + HYSA</li>
                  <li><strong>Next action:</strong> Dining is 18% over trend—trim $300 to stay on plan</li>
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
