import { useState, FormEvent } from 'react'
import './EmailModal.css'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      // In development, try localhost worker first, fall back to production
      const workerUrl = import.meta.env.PROD
        ? '/api/waitlist'
        : 'http://localhost:8787';

      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit')
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
        setEmail('')
        setSuccess(false)
      }, 2000)
    } catch (err) {
      console.error('Submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {success ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h2>You're on the list!</h2>
            <p>We'll be in touch soon.</p>
          </div>
        ) : (
          <>
            <h2 className="modal-title">Join the Waitlist</h2>
            <p className="modal-description">
              Be the first to know when Attain launches. We'll send you early access.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="modal-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                autoFocus
              />

              {error && <div className="modal-error">{error}</div>}

              <button
                type="submit"
                className="modal-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
