const steps = [
  {
    index: 'Step 01',
    title: 'Connect your AI assistant',
    description:
      'Kick off inside ChatGPT, Claude, or Gemini—Attain plugs into the assistant you already rely on through secure MCP handshakes.',
    bullets: [
      'No new apps, logins, or dashboards to learn',
      'Authorize directly from the chat with a single command',
      'Attain stays invisible until you need financial context',
    ],
    reverse: false,
    card: {
      headline: 'Prompt ready',
      body: '“Connect Attain to my chat”',
      footer: 'ChatGPT · Claude · Gemini',
    },
  },
  {
    index: 'Step 02',
    title: 'Link your financial accounts',
    description:
      'Attain brokers bank-grade connections behind the scenes. Think Plaid-style linking, triggered directly from the chat.',
    bullets: [
      'Secure OAuth flows with your provider—Attain never sees credentials',
      'Sync checking, cards, savings, investments, and more',
      'Data refreshes automatically so answers stay current',
    ],
    reverse: true,
    card: {
      headline: 'Authorization window',
      body: 'Encrypted redirect · 45 seconds average completion time',
      footer: 'Bank-level encryption · SOC2 in progress',
    },
  },
  {
    index: 'Step 03',
    title: 'Ask anything—get decisions, not dashboards',
    description:
      'Balance a purchase, review runway, or plan a payoff—Attain surfaces the exact numbers, trends, and context directly in the conversation.',
    bullets: [
      'Real-time balances, budgets, and portfolio insights',
      'Automated charts, alerts, and recommendations on demand',
      'Text, voice, or scripted prompts—Attain adapts to your workflow',
    ],
    reverse: false,
    card: {
      headline: 'Insight snapshot',
      body: 'Runway · 6.5 months\nNet worth · $482,900\nAlert · Dining up 18%',
      footer: 'Export to CSV · Notify in chat · Share with team',
    },
  },
] as const

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-intro">
        <h2>How Attain Works</h2>
        <p>From first prompt to everyday insights, Attain keeps you in the flow—no dashboards, no context switching.</p>
      </div>

      <div className="how-grid">
        {steps.map((step) => (
          <div key={step.title} className={`how-row${step.reverse ? ' how-row--reverse' : ''}`}>
            <div className="how-text">
              <span className="how-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <ul className="how-list">
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="how-visual" aria-hidden="true">
              <div className="how-card">
                <div className="how-card-header">
                  <span>{step.card.headline}</span>
                  <span className="how-card-status">Attain</span>
                </div>
                <div className="how-card-body">
                  <p>{step.card.body}</p>
                </div>
                <div className="how-card-footer">
                  <span>{step.card.footer}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
