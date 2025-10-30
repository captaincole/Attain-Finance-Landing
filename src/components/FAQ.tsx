import faqs from '../data/faq.json'

type FAQItem = {
  question: string
  answer: string
}

export default function FAQ() {
  const items = faqs as FAQItem[]

  return (
    <section className="faq-section" id="faq">
      <div className="section-intro">
        <h2>Answers Before You Ask</h2>
        <p>
          Security, compatibility, and workflow questions covered—update the JSON file to add more.
        </p>
      </div>

      <div className="faq-grid">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="faq-cta">
        <h3>Still have questions?</h3>
        <p>Reach out and we&apos;ll share a live walkthrough of Attain.</p>
        <a className="faq-cta-button" href="mailto:beta@attain.software">
          Contact Support
        </a>
      </div>
    </section>
  )
}
