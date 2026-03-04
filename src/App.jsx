import React, { useState, useEffect } from 'react'
import './App.css'
import SubjectForm from './components/SubjectForm'
import ExamDateInput from './components/ExamDateInput'
import StudyPlan from './components/StudyPlan'
import ProgressTracker from './components/ProgressTracker'
import MotivationalQuote from './components/MotivationalQuote'

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  )
  const [subjects, setSubjects] = useState([])
  const [examDate, setExamDate] = useState(null)
  const [studyPlan, setStudyPlan] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Load data from localStorage
  useEffect(() => {
    const savedSubjects = localStorage.getItem('subjects')
    const savedExamDate = localStorage.getItem('examDate')
    const savedStudyPlan = localStorage.getItem('studyPlan')

    if (savedSubjects) setSubjects(JSON.parse(savedSubjects))
    if (savedExamDate) setExamDate(JSON.parse(savedExamDate))
    if (savedStudyPlan) setStudyPlan(JSON.parse(savedStudyPlan))
  }, [])

  // Save subjects to localStorage
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects))
  }, [subjects])

  const addSubject = (subject) => {
    setSubjects([...subjects, { ...subject, id: Date.now() }])
  }

  const removeSubject = (id) => {
    setSubjects(subjects.filter(s => s.id !== id))
  }

  const setExamDateHandler = (date) => {
    setExamDate(date)
    localStorage.setItem('examDate', JSON.stringify(date))
  }

  const generateStudyPlan = async () => {
    if (subjects.length === 0 || !examDate) {
      alert('Please add subjects and set an exam date')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/study-plan/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subjects, examDate })
      })

      if (response.ok) {
        const plan = await response.json()
        setStudyPlan(plan)
        localStorage.setItem('studyPlan', JSON.stringify(plan))
      } else {
        // Fallback to local generation
        const plan = generateLocalPlan(subjects, examDate)
        setStudyPlan(plan)
        localStorage.setItem('studyPlan', JSON.stringify(plan))
      }
    } catch (error) {
      console.log('Using local study plan generation')
      const plan = generateLocalPlan(subjects, examDate)
      setStudyPlan(plan)
      localStorage.setItem('studyPlan', JSON.stringify(plan))
    } finally {
      setLoading(false)
    }
  }

  const generateLocalPlan = (subjectsData, examDateData) => {
    const today = new Date()
    const daysUntilExam = Math.ceil((new Date(examDateData) - today) / (1000 * 60 * 60 * 24))
    
    const plan = {}
    subjectsData.forEach(subject => {
      const dailyHours = (subject.totalHours / daysUntilExam).toFixed(2)
      plan[subject.name] = {
        totalHours: subject.totalHours,
        dailyHours: parseFloat(dailyHours),
        daysRemaining: daysUntilExam,
        chapters: subject.chapters || []
      }
    })
    
    return { plan, generatedDate: new Date(), examDate: examDateData }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Smart Study Planner</h1>
        <button 
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </header>

      <main className="container">
        <MotivationalQuote />
        
        <div className="content-grid">
          <div className="sidebar">
            <SubjectForm onAddSubject={addSubject} />
            <ExamDateInput onSetExamDate={setExamDateHandler} currentDate={examDate} />
            
            <button 
              className="btn btn-primary generate-btn"
              onClick={generateStudyPlan}
              disabled={loading || subjects.length === 0 || !examDate}
            >
              {loading ? '⏳ Generating...' : '✨ Generate Study Plan'}
            </button>

            <div className="subjects-list">
              <h3>Subjects Added: {subjects.length}</h3>
              <ul>
                {subjects.map(subject => (
                  <li key={subject.id} className="subject-item">
                    <div>
                      <strong>{subject.name}</strong>
                      <p className="subject-hours">{subject.totalHours} hours</p>
                    </div>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => removeSubject(subject.id)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="main-content">
            {examDate && <p className="exam-info">📅 Exam Date: {new Date(examDate).toLocaleDateString()}</p>}
            
            {studyPlan ? (
              <>
                <StudyPlan plan={studyPlan} />
                <ProgressTracker plan={studyPlan} />
              </>
            ) : (
              <div className="empty-state">
                <p>👈 Add subjects and set an exam date to generate your personalized study plan</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
