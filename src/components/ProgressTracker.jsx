import React, { useState, useEffect } from 'react'
import './ProgressTracker.css'

function ProgressTracker({ plan }) {
  const [progress, setProgress] = useState({})
  const [startDate] = useState(new Date())

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('progress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(progress))
  }, [progress])

  const toggleProgress = (subject) => {
    setProgress(prev => ({
      ...prev,
      [subject]: !prev[subject]
    }))
  }

  const completedCount = Object.values(progress).filter(Boolean).length
  const totalCount = Object.keys(plan.plan).length
  const completionPercent = Math.round((completedCount / totalCount) * 100)

  const daysSpent = Math.ceil((new Date() - startDate) / (1000 * 60 * 60 * 24))
  const daysRemaining = plan.plan[Object.keys(plan.plan)[0]]?.daysRemaining || 0

  return (
    <div className="progress-tracker">
      <h2>📊 Progress Tracker</h2>

      <div className="progress-overview">
        <div className="progress-card">
          <div className="progress-circle">
            <svg viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="var(--border)"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="8"
                strokeDasharray={`${completionPercent * 2.83} 283`}
                strokeLinecap="round"
                style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
              />
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dy="0.3em"
                fontSize="24"
                fontWeight="bold"
                fill="var(--primary)"
              >
                {completionPercent}%
              </text>
            </svg>
          </div>
          <div className="card-info">
            <p className="label">Overall Progress</p>
            <p className="value">{completedCount}/{totalCount} subjects</p>
          </div>
        </div>

        <div className="progress-card">
          <div className="time-info">
            <p><span className="icon">⏳</span> <strong>{daysRemaining}</strong> days remaining</p>
            <p><span className="icon">📆</span> <strong>{daysSpent}</strong> days elapsed</p>
          </div>
        </div>
      </div>

      <div className="subjects-progress">
        <h3>Subject Progress</h3>
        <div className="progress-list">
          {Object.keys(plan.plan).map(subject => (
            <div
              key={subject}
              className={`progress-item ${progress[subject] ? 'completed' : ''}`}
              onClick={() => toggleProgress(subject)}
            >
              <input
                type="checkbox"
                id={`progress-${subject}`}
                checked={progress[subject] || false}
                onChange={() => toggleProgress(subject)}
              />
              <label htmlFor={`progress-${subject}`}>
                <span className="subject-name">{subject}</span>
                <span className="hours-tag">{plan.plan[subject].totalHours}h</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="motivation-panel">
        <h3>💪 Keep Going!</h3>
        <div className="motivation-content">
          {completionPercent === 100 ? (
            <p className="success">🎉 Congratulations! You've completed all subjects!</p>
          ) : completionPercent >= 75 ? (
            <p>Almost there! Just {totalCount - completedCount} more subject(s) to go!</p>
          ) : completionPercent >= 50 ? (
            <p>Great progress! You're halfway there! Keep studying! 📚</p>
          ) : (
            <p>You got this! Start with your first subject and build momentum! 🚀</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker
