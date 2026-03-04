import React, { useState, useEffect } from 'react'
import './MotivationalQuote.css'

const QUOTES = [
  "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
  "Your limitation—it's only your imagination.",
  "The expert in anything was once a beginner. - Helen Hayes",
  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal. - Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future depends on what you do today. - Mahatma Gandhi",
  "All progress takes place outside the comfort zone. - Michael John Bobak",
  "Don't cry for help at night as you can only hear the echo. - Rajesh Walecha",
  "Practice makes perfect. Keep pushing!",
  "Remember: Every expert was once a beginner!",
]

function MotivationalQuote() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)]
    setQuote(randomQuote)
  }, [])

  const getNewQuote = () => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)]
    setQuote(randomQuote)
  }

  return (
    <div className="motivational-quote">
      <div className="quote-content">
        <p className="quote-text">💡 "{quote}"</p>
        <button className="btn-new-quote" onClick={getNewQuote} title="Get a new quote">
          ↻
        </button>
      </div>
    </div>
  )
}

export default MotivationalQuote
