import express from 'express'
import StudyPlan from '../models/StudyPlan.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

// Generate study plan
router.post('/generate', verifyToken, async (req, res) => {
  try {
    const { subjects, examDate } = req.body
    const userId = req.userId

    if (!subjects || !examDate) {
      return res.status(400).json({ message: 'Subjects and exam date are required' })
    }

    const today = new Date()
    const daysUntilExam = Math.ceil((new Date(examDate) - today) / (1000 * 60 * 60 * 24))

    if (daysUntilExam <= 0) {
      return res.status(400).json({ message: 'Exam date must be in the future' })
    }

    const processedSubjects = subjects.map(subject => ({
      name: subject.name,
      totalHours: subject.totalHours,
      dailyHours: parseFloat((subject.totalHours / daysUntilExam).toFixed(2)),
      chapters: subject.chapters || [],
      completed: false
    }))

    let studyPlan = await StudyPlan.findOne({ userId })

    if (studyPlan) {
      studyPlan.subjects = processedSubjects
      studyPlan.examDate = examDate
      studyPlan.daysRemaining = daysUntilExam
      studyPlan.updatedAt = new Date()
    } else {
      studyPlan = new StudyPlan({
        userId,
        subjects: processedSubjects,
        examDate,
        daysRemaining: daysUntilExam
      })
    }

    await studyPlan.save()

    res.json({
      message: 'Study plan generated successfully',
      plan: {
        plan: processedSubjects.reduce((acc, subject) => {
          acc[subject.name] = {
            totalHours: subject.totalHours,
            dailyHours: subject.dailyHours,
            daysRemaining: daysUntilExam,
            chapters: subject.chapters
          }
          return acc
        }, {}),
        generatedDate: new Date(),
        examDate
      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get study plan
router.get('/', verifyToken, async (req, res) => {
  try {
    const studyPlan = await StudyPlan.findOne({ userId: req.userId })
    if (!studyPlan) {
      return res.status(404).json({ message: 'No study plan found' })
    }
    res.json(studyPlan)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update progress
router.put('/progress', verifyToken, async (req, res) => {
  try {
    const { subjectName, completed } = req.body
    const studyPlan = await StudyPlan.findOne({ userId: req.userId })

    if (!studyPlan) {
      return res.status(404).json({ message: 'Study plan not found' })
    }

    const subject = studyPlan.subjects.find(s => s.name === subjectName)
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' })
    }

    subject.completed = completed
    const completedCount = studyPlan.subjects.filter(s => s.completed).length
    studyPlan.progress = Math.round((completedCount / studyPlan.subjects.length) * 100)

    await studyPlan.save()
    res.json({ message: 'Progress updated', progress: studyPlan.progress })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
