const examples = [
  {
    title: 'Quick Financial Overview',
    prompt: "What's my current financial situation?",
    points: [
      'Total net worth, balances, and spending in one response',
      'Linked accounts update in real-time through secure MPC syncs',
      'Highlight budget progress and upcoming bills automatically',
    ],
    reverse: false,
  },
  {
    title: 'Budgeting With Visuals',
    prompt: 'Show me my spending by category for the last 30 days as a bar chart.',
    points: [
      'AI categorization and visualizations generated on demand',
      'Spot overspending trends compared to previous periods',
      'Automate alerts or budget adjustments directly in chat',
    ],
    reverse: true,
  },
  {
    title: 'Investment Pulse Check',
    prompt: 'How healthy is my portfolio and am I overweight in tech?',
    points: [
      'Pull allocation and performance data across brokerage + 401(k)',
      'Surface risks, deltas, and suggested rebalances instantly',
      'Track net worth growth alongside investment health',
    ],
    reverse: false,
  },
] as const

export default function Examples() {
  return (
    <section className="examples-section" id="examples">
      <div className="section-intro">
        <h2>Real Conversations In Chat</h2>
        <p>Choose the storyline, drop a prompt, and let Attain do the heavy lifting. Screenshots coming soon.</p>
      </div>

      <div className="examples-grid">
        {examples.map((example) => (
          <div
            key={example.title}
            className={`example-row${example.reverse ? ' example-row--reverse' : ''}`}
          >
            <div className="example-text">
              <span className="example-label">Scenario</span>
              <h3 className="example-title">{example.title}</h3>
              <div className="example-prompt">
                <span className="example-prompt-label">Prompt</span>
                <p>{example.prompt}</p>
              </div>
              <ul className="example-points">
                {example.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="example-visual">
              <div className="example-screenshot">
                <span>Screenshot Placeholder</span>
                <span className="example-screenshot-hint">Drop in the chat capture for this flow</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
