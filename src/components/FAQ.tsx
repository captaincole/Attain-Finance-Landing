export default function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="section-intro">
        <h2>Answers Before You Ask</h2>
        <p>Security, compatibility, and workflow questions covered—straight from the Attain brief.</p>
      </div>
      <div className="faq-grid">
        <details>
          <summary>What is Attain?</summary>
          <p>Attain connects your financial accounts to your AI assistant via the MCP protocol so you can manage money through natural conversation.</p>
        </details>
        <details>
          <summary>Which AI assistants does Attain work with?</summary>
          <p>ChatGPT, Claude, and Gemini today—plus any assistant that supports the Model Context Protocol standard.</p>
        </details>
        <details>
          <summary>How do I connect my accounts?</summary>
          <p>Ask your AI to connect an account. You&apos;ll get a secure authorization link, sign in with your provider, and Attain syncs automatically.</p>
        </details>
        <details>
          <summary>Is my financial data secure?</summary>
          <p>Attain uses bank-grade authentication and encryption. You authorize directly with your provider—credentials never pass through Attain.</p>
        </details>
        <details>
          <summary>Do I need to download an app?</summary>
          <p>No new dashboards or logins. Everything happens inside the AI workspace you already use.</p>
        </details>
        <details>
          <summary>What does the closed beta include?</summary>
          <p>Full access to account linking, transaction analysis, budgeting, visualizations, and decision support—plus early influence on the roadmap.</p>
        </details>
      </div>
    </section>
  )
}
