import React, { useState } from 'react'
import './ExamDateInput.css'

function ExamDateInput({ onSetExamDate, currentDate }) {
  const [date, setDate] = useState(currentDate || '')

  const handleChange = (e) => {
    const newDate = e.target.value
    setDate(newDate)
    onSetExamDate(newDate)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="exam-date-input">
      <h3>📅 Exam Date</h3>
      
      <div className="form-group">
        <label htmlFor="exam-date">When is your exam?</label>
        <input
          id="exam-date"
          type="date"
          value={date}
          onChange={handleChange}
          min={today}
          required
        />
      </div>

      {date && (
        <div className="date-info">
          <p>
            ⏰ <strong>
              {Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 * 24))} days left
            </strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default ExamDateInput
