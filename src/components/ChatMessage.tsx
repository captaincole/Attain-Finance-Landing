import { ReactNode } from 'react'
import './ChatMessage.css'

interface ChatMessageProps {
  text: string
  delay?: number
  isUser?: boolean
  children?: ReactNode
}

export default function ChatMessage({ text, isUser = false, children }: ChatMessageProps) {
  return (
    <div className={`chat-message ${isUser ? 'chat-message--user' : 'chat-message--ai'}`}>
      <div className="chat-message__avatar">
        {isUser ? 'Y' : 'A'}
      </div>
      <div className="chat-message__body">
        <div className="chat-message__content">
          {text}
        </div>
        {children}
      </div>
    </div>
  )
}
