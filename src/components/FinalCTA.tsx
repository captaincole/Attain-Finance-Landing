type FinalCTAProps = {
  onJoin: () => void
}

export default function FinalCTA({ onJoin }: FinalCTAProps) {
  return (
    <section className="final-cta">
      <h2 className="final-cta-title">Ready to get started?</h2>
      <p className="final-cta-description">
        Join the closed beta and bring your finances into your AI workflow.
      </p>
      <button className="cta-button" onClick={onJoin}>
        Join the Closed Beta
      </button>
    </section>
  )
}
