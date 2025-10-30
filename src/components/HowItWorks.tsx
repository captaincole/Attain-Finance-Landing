const steps = [
  {
    index: 'Step 01',
    title: 'Connect your AI assistant',
    description:
      'Integrate inside of ChatGPT, Claude, or Gemini -- Attain plugs into the assistant you already rely on through the a secure MCP link.',
    bullets: [
      'No new apps, logins, or dashboards to learn',
      'Authorize directly from the chat with a single command',
      'Attain stays invisible until you need financial context',
    ],
    reverse: false,
    card: {
      headline: 'Connection Ready',
      body: '“Show me my financial accounts”',
      footer: 'ChatGPT · Claude · Gemini',
    },
  },
  {
    index: 'Step 02',
    title: 'Link your financial accounts',
    description:
      'Attain brokers bank-grade connections behind the scenes, triggered directly from the chat.',
    bullets: [
      'Secure OAuth 2.1 flows with your provider—Attain never sees credentials',
      'Sync checking, cards, savings, investments, and more',
      'Data refreshes automatically so answers stay current',
    ],
    reverse: true,
    card: {
      headline: 'Authorization window',
      body: '"Attain has generated this secure link for you to connect your account"',
      footer: 'Bank-level encryption',
    },
  },
  {
    index: 'Step 03',
    title: 'Ask anything—get decisions, not dashboards',
    description:
      'Review purchases and spending or plan a payoff—Attain surfaces the exact numbers, trends, and context directly in the conversation.',
    bullets: [
      'Real-time balances, budgets, and portfolio insights',
      'Automated charts, alerts, and recommendations on demand',
      'Text, voice, or scripted prompts—Attain adapts to your workflow',
    ],
    reverse: false,
    card: {
      headline: 'Insight snapshot',
      body: 'Spending · $8k / Month \n Net worth · $482,900\nAlert · Dining up 18%',
      footer: 'Export to CSV · Notify in chat',
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
