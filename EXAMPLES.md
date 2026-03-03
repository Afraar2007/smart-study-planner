# 📋 Quick Examples & Test Data

## Example 1: Engineering Student - 4 Weeks to Exam

**Subjects:**
| Subject | Hours | Chapters |
|---------|-------|----------|
| Mathematics | 80 | Calculus, Linear Algebra, Probability, Statistics |
| Physics | 100 | Mechanics, Thermodynamics, Electricity, Magnetism |
| Chemistry | 70 | Organic, Inorganic, Physical, Analytical |
| English | 40 | Grammar, Literature, Writing, Comprehension |

**Exam Date:** 28 days from today

**Generated Plan:**
- Mathematics: 2.86h/day
- Physics: 3.57h/day
- Chemistry: 2.5h/day
- English: 1.43h/day
- **Total:** 10.36h/day

---

## Example 2: Medical Student - Board Exam Prep

**Subjects:**
| Subject | Hours | Chapters |
|---------|-------|----------|
| Anatomy | 120 | Systems, Histology, Gross Anatomy |
| Physiology | 100 | Systems, Mechanisms, Integration |
| Biochemistry | 80 | Metabolism, Proteins, Nucleic Acids |
| Pathology | 90 | Cell Injury, Infections, Immunity |
| Pharmacology | 85 | Classes, Mechanisms, Interactions |

**Exam Date:** 45 days from today

**Generated Plan:**
- Anatomy: 2.67h/day
- Physiology: 2.22h/day
- Biochemistry: 1.78h/day
- Pathology: 2h/day
- Pharmacology: 1.89h/day
- **Total:** 10.56h/day

---

## Example 3: High School Student - Final Exams

**Subjects:**
| Subject | Hours | Chapters |
|---------|-------|----------|
| History | 30 | Ancient, Medieval, Modern, Contemporary |
| Geography | 25 | Physical, Human, Regional |
| Civics | 20 | Government, Constitution, Rights |
| Economics | 25 | Micro, Macro, Trade, Development |

**Exam Date:** 21 days from today

**Generated Plan:**
- History: 1.43h/day
- Geography: 1.19h/day
- Civics: 0.95h/day
- Economics: 1.19h/day
- **Total:** 4.76h/day

---

## Example 4: Language Learner - TOEFL Prep

**Subjects:**
| Subject | Hours | Components |
|---------|-------|------------|
| Reading | 40 | Passages, Questions, Strategies |
| Listening | 35 | Lectures, Conversations, Notes |
| Speaking | 30 | Tasks, Responses, Fluency |
| Writing | 35 | Essays, Integrated Tasks, Grammar |
| Vocabulary | 25 | Academic, Common, Phrases |

**Exam Date:** 35 days from today

**Generated Plan:**
- Reading: 1.14h/day
- Listening: 1h/day
- Speaking: 0.86h/day
- Writing: 1h/day
- Vocabulary: 0.71h/day
- **Total:** 4.71h/day

---

## Testing Checklist

### Frontend Features ✓
- [ ] Add first subject
- [ ] Add multiple subjects
- [ ] Remove subject
- [ ] Set exam date
- [ ] See days remaining
- [ ] Generate study plan
- [ ] See daily hours calculated
- [ ] Toggle dark mode
- [ ] Refresh page, data persists
- [ ] Check all subjects appear
- [ ] Mark subject complete
- [ ] See progress circle update
- [ ] Read motivational quote
- [ ] Get new quote

### Mobile Testing
- [ ] Layout responsive on 320px
- [ ] Layout responsive on 768px
- [ ] Layout responsive on 1024px
- [ ] Touch buttons work
- [ ] Theme toggle works
- [ ] All text readable

### Theme Testing
- [ ] Light theme loads
- [ ] Dark theme loads
- [ ] Colors are correct
- [ ] Text is readable
- [ ] Preference saves
- [ ] Switch instant

### LocalStorage Testing
- [ ] Subjects save
- [ ] Exam date saves
- [ ] Study plan saves
- [ ] Progress saves
- [ ] Theme saves
- [ ] All loads on refresh

### Backend Testing (if running)
- [ ] Health endpoint works
- [ ] Register user works
- [ ] Login user works
- [ ] Generate plan saves to DB
- [ ] Get plan from DB works
- [ ] Update progress works

---

## Sample Progress Tracking

### Week 1 Progress
```
Subject: Mathematics
- Completed: Calculus chapters 1-3
- Hours done: 20/80
- Remaining: 60 hours
- Status: On track ✓
```

### Week 2 Progress
```
Overall Progress:
- Subjects started: 4/4
- Subjects completed: 0/4
- Progress: 25%
- Average daily study: 10 hours
- Motivation: "You're a quarter of the way! Keep it up!"
```

### Week 3 Progress
```
Overall Progress:
- Completed: Mathematics, Physics (partial)
- In Progress: Chemistry, English
- Progress: 50%
- Days remaining: 7
- Adjustment needed: Increase daily hours for Chemistry
```

### Week 4 - Exam Week
```
Overall Progress:
- Ready: Mathematics ✓, Physics ✓
- Preparing: Chemistry, English
- Progress: 85%
- Days remaining: 1
- Motivation: "You can do it! Final push!"
```

---

## Study Tips from Planner

**Based on daily hours:**
- 3-5h/day: Sustainable, good pace
- 5-8h/day: Intense but manageable
- 8-12h/day: Very intense, need breaks
- 12h+/day: Extremely demanding, consider reducing subjects

**Adjustments:**
- If behind: Extend exam date or reduce subjects
- If ahead: Add more detail, go deeper
- If overwhelmed: Break chapters smaller
- If bored: Add variety, switch subjects

---

## Real-World Scenarios

### Scenario: Behind Schedule
**Problem:** Only studied 2 hours today, need 4 hours
**Solution:**
1. Extend exam date by a week
2. Regenerate study plan
3. New daily requirement: 3.2 hours
4. Update plan in app

### Scenario: Topic Confusion
**Problem:** Stuck on Physics chapter 3
**Solution:**
1. Allocate extra hours to Physics
2. Review chapter 2 basics
3. Watch video tutorials
4. Adjust plan after understanding

### Scenario: Extra Time
**Problem:** Finished daily requirements early
**Solution:**
1. Add more chapters to chapters list
2. Practice problems
3. Review weak areas
4. Consolidate learning

### Scenario: Exam Date Changed
**Problem:** Exam postponed by 2 weeks
**Solution:**
1. Update exam date in app
2. Regenerate study plan
3. New daily hours reduce
4. More time to prepare thoroughly

---

## Motivational Milestones

| Completion | Milestone | Message |
|------------|-----------|---------|
| 0% | Start | Choose your path, take the first step! 🚀 |
| 25% | Quarter | You're making progress! Keep going! 💪 |
| 50% | Halfway | You're halfway there! Amazing dedication! 🌟 |
| 75% | Almost | Almost at the finish line! Final push! 🏁 |
| 100% | Complete | You did it! Congratulations! 🎉 |

---

## Performance Benchmarks

**System Requirements:**
- RAM: 512 MB minimum
- Disk: 200 MB for installation
- Network: Not needed (localStorage mode)
- Browser: Modern (Chrome, Firefox, Edge, Safari)

**Performance Metrics:**
- Page load: < 1 second
- Theme switch: Instant
- Plan generation: < 100ms
- Progress update: Instant

---

## Data Export Example

**JSON Format (for backup):**
```json
{
  "version": "1.0",
  "exportDate": "2026-03-03",
  "subjects": [
    {
      "id": 1234567890,
      "name": "Mathematics",
      "totalHours": 100,
      "chapters": ["Algebra", "Geometry"]
    }
  ],
  "examDate": "2026-04-02",
  "studyPlan": {
    "Mathematics": {
      "totalHours": 100,
      "dailyHours": 3.33,
      "daysRemaining": 30
    }
  },
  "progress": {
    "Mathematics": true
  }
}
```

---

## Helpful Resources

**Study Techniques:**
- Pomodoro (25min focus, 5min break)
- Spaced Repetition
- Active Recall
- Interleaved Practice

**Mental Health:**
- Take regular breaks
- Exercise daily
- Sleep 7-8 hours
- Stay hydrated

**Motivation:**
- Join study groups
- Compete with friends
- Track progress visually
- Celebrate milestones

---

Generated for Smart Study Planner v1.0 | Study Smarter, Not Harder! 📚✨
