import React, { useState } from 'react'
import './SubjectForm.css'

function SubjectForm({ onAddSubject }) {
  const [formData, setFormData] = useState({
    name: '',
    totalHours: 10,
    chapters: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'totalHours' ? parseInt(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      alert('Please enter subject name')
      return
    }

    const chapters = formData.chapters
      .split(',')
      .map(c => c.trim())
      .filter(c => c)

    onAddSubject({
      name: formData.name,
      totalHours: formData.totalHours,
      chapters: chapters
    })

    setFormData({ name: '', totalHours: 10, chapters: '' })
  }

  return (
    <form className="subject-form" onSubmit={handleSubmit}>
      <h3>➕ Add Subject</h3>
      
      <div className="form-group">
        <label htmlFor="name">Subject Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., Mathematics, History"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="hours">Total Hours to Study</label>
        <div className="input-group">
          <input
            id="hours"
            type="number"
            name="totalHours"
            value={formData.totalHours}
            onChange={handleChange}
            min="1"
            max="500"
            required
          />
          <span className="unit">hrs</span>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="chapters">Chapters (comma-separated, optional)</label>
        <textarea
          id="chapters"
          name="chapters"
          value={formData.chapters}
          onChange={handleChange}
          placeholder="Chapter 1, Chapter 2, Chapter 3"
          rows="3"
        />
      </div>

      <button type="submit" className="btn btn-primary">Add Subject</button>
    </form>
  )
}

export default SubjectForm
