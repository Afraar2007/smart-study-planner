import React from 'react'
import './StudyPlan.css'

function StudyPlan({ plan }) {
  return (
    <div className="study-plan">
      <h2>📖 Your Study Plan</h2>
      
      <div className="plan-grid">
        {Object.entries(plan.plan).map(([subject, details]) => (
          <div key={subject} className="plan-card">
            <h3>{subject}</h3>
            
            <div className="plan-stats">
              <div className="stat">
                <span className="stat-label">Total Hours</span>
                <span className="stat-value">{details.totalHours}</span>
              </div>
              
              <div className="stat">
                <span className="stat-label">Daily Study</span>
                <span className="stat-value">{details.dailyHours}</span>
              </div>
              
              <div className="stat">
                <span className="stat-label">Days Left</span>
                <span className="stat-value">{details.daysRemaining}</span>
              </div>
            </div>

            {details.chapters && details.chapters.length > 0 && (
              <div className="chapters">
                <h4>Chapters to Cover:</h4>
                <ul>
                  {details.chapters.map((chapter, idx) => (
                    <li key={idx}>
                      <input type="checkbox" id={`${subject}-${idx}`} />
                      <label htmlFor={`${subject}-${idx}`}>{chapter}</label>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="daily-schedule">
              <p className="schedule-text">
                📅 Study <strong>{details.dailyHours} hours</strong> daily to finish in time
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="plan-summary">
        <h3>Summary</h3>
        <p>Total Subjects: <strong>{Object.keys(plan.plan).length}</strong></p>
        <p>Total Study Hours: <strong>{Object.values(plan.plan).reduce((sum, s) => sum + s.totalHours, 0)}</strong></p>
        <p>
          Average Daily Hours: 
          <strong>
            {(Object.values(plan.plan).reduce((sum, s) => sum + s.dailyHours, 0) / Object.keys(plan.plan).length).toFixed(2)}
          </strong>
        </p>
      </div>
    </div>
  )
}

export default StudyPlan
