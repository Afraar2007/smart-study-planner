import mongoose from 'mongoose'

const studyPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subjects: [{
    name: {
      type: String,
      required: true
    },
    totalHours: {
      type: Number,
      required: true
    },
    dailyHours: Number,
    chapters: [String],
    completed: {
      type: Boolean,
      default: false
    }
  }],
  examDate: {
    type: Date,
    required: true
  },
  daysRemaining: Number,
  progress: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('StudyPlan', studyPlanSchema)
