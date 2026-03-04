# 🎓 Smart Study Planner - Quick Reference Card

## ⚡ One-Line Startup

```bash
# Frontend only (LocalStorage)
npm run dev

# Full stack (Frontend + Backend)
# Terminal 1: cd backend && npm start
# Terminal 2: npm run dev
```

---

## 📚 Feature Checklist

- ✅ Add subjects with hours
- ✅ Set exam date
- ✅ Auto-generate study plan
- ✅ Toggle dark/light theme
- ✅ Track progress visually
- ✅ Read motivational quotes
- ✅ Save data locally
- ✅ Responsive mobile design

---

## 🔑 Key Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Theme Toggle | Click 🌙 button |
| New Quote | Click ↻ button |
| Add Subject | Click "Add Subject" |
| Remove Subject | Click ✕ button |
| Mark Complete | Click checkbox |
| Regenerate Plan | Click "Generate" |

---

## 💾 Data Locations

| Data | Storage | Persistence |
|------|---------|-------------|
| Subjects | LocalStorage | Until cleared |
| Exam Date | LocalStorage | Until cleared |
| Plan | LocalStorage | Until cleared |
| Progress | LocalStorage | Until cleared |
| Theme | LocalStorage | Until cleared |
| Quote | In-memory | Page refresh |

---

## 🌈 Color Scheme

**Light Theme:**
- Primary: Purple (#7c3aed)
- Secondary: Cyan (#06b6d4)
- Success: Green (#10b981)

**Dark Theme:**
- Same colors, different backgrounds
- Better contrast
- Less eye strain

---

## 🧮 Smart Calculation

```
Daily Hours = Total Hours ÷ Days Until Exam

Example:
100 hours ÷ 25 days = 4 hours/day
```

---

## 📱 Responsive Layout

| Screen | Layout | Columns |
|--------|--------|---------|
| Desktop | Side-by-side | 2 |
| Tablet | Adaptive | 1.5 |
| Mobile | Stack | 1 |

---

## 🎯 Component Tree

```
App
├── Header (Theme toggle)
├── MotivationalQuote
└── Grid
    ├── Sidebar
    │   ├── SubjectForm
    │   ├── ExamDateInput
    │   └── SubjectsList
    └── Main
        ├── StudyPlan
        └── ProgressTracker
```

---

## 🔧 Configuration

```bash
# Frontend: vite.config.js
# Backend: .env

MONGODB_URI=mongodb://localhost:27017
PORT=5000
JWT_SECRET=your_secret
```

---

## 📊 Sample Numbers

**4 Subjects, 30 Days:**
| Subject | Hours | Daily |
|---------|-------|-------|
| Math | 100 | 3.33h |
| Physics | 80 | 2.67h |
| Chemistry | 60 | 2h |
| English | 40 | 1.33h |
| **Total** | **280** | **9.33h** |

---

## 🐛 Quick Troubleshoot

**Problem:** App loads blank
**Fix:** Check browser console (F12)

**Problem:** Data disappeared
**Fix:** Check localStorage size, clear other apps

**Problem:** API error
**Fix:** Start backend server on port 5000

**Problem:** Theme doesn't save
**Fix:** Enable cookies in browser

---

## 📈 Progress Tracking

| % Complete | Message |
|-----------|---------|
| 0% | Just started! 🚀 |
| 25% | Good progress! 💪 |
| 50% | Halfway there! 🌟 |
| 75% | Almost done! 🏁 |
| 100% | Congratulations! 🎉 |

---

## 🚀 Deploy Steps

**Frontend:**
1. `npm run build`
2. Deploy `dist/` folder
3. Get URL
4. ✅ Done!

**Backend:**
1. Set environment variables
2. Upload code
3. Start server
4. ✅ Done!

**Database:**
1. Get MongoDB URI
2. Set in backend .env
3. ✅ Connected!

---

## 📞 File Locations

| File | Function |
|------|----------|
| src/App.jsx | Main app |
| src/components/*.jsx | UI components |
| backend/server.js | API server |
| backend/routes/*.js | API endpoints |
| backend/models/*.js | Data schemas |

---

## ✨ Pro Tips

1. **Time Management:** 3-5h/day is sustainable
2. **Chapters:** Break into small pieces
3. **Progress:** Check daily
4. **Quotes:** Read when demotivated
5. **Breaks:** Use Pomodoro (25min study, 5min break)

---

## 🎓 Perfect For

✅ High school exams
✅ College midterms
✅ Board exams
✅ Language tests
✅ Certification prep
✅ Any exam preparation

---

## 💡 Did You Know?

- The app uses **CSS variables** for instant theme switching
- Study plan updates **automatically** when you change exam date
- Data **survives browser refresh** with localStorage
- Progress **animated** with circular progress indicator
- All fonts **system fonts** - no network requests!

---

## 🔄 Typical User Flow

1. Open app → See motivation quote
2. Add subject → Repeat for each subject
3. Set exam date → See days remaining
4. Click "Generate Study Plan" → Get schedule
5. Mark subjects complete → Track progress
6. Toggle theme → Work in comfort
7. Get new quote → Stay motivated
8. Come back tomorrow → Continue studying!

---

## 🎯 Daily Routine

```
Morning: Check study plan
↓
Daytime: Study subjects
↓
Evening: Mark progress
↓
Night: Read motivational quote
↓
Repeat! 🔄
```

---

## 📱 Mobile-First Design

✓ Touch-friendly buttons
✓ Large readable text
✓ No horizontal scroll
✓ Stacked layout
✓ Optimized forms

---

## 🎨 CSS Variables

```css
--primary: #7c3aed
--secondary: #06b6d4
--success: #10b981
--danger: #ef4444
--warning: #f59e0b
```
Change once, update everywhere!

---

## 🌍 Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers

---

## 📚 File Sizes

| Asset | Size |
|-------|------|
| JS Bundle | 3.05 KB |
| CSS | 1.20 KB |
| Total (gzip) | ~2.5 KB |
| Super Fast! | ⚡ |

---

## 🏆 Success Metrics

- Study plans created: ___
- Subjects tracked: ___
- Progress: ___%
- Days remaining: ___
- Motivation level: 🌟🌟🌟🌟🌟

---

## 🎁 Bonus Features

🎲 Random motivational quotes
📈 Visual progress tracking
🌙 Eye-friendly dark mode
📱 Works offline
⚡ Lightning fast
🔒 Secure (JWT ready)

---

**Remember: Consistency beats intensity!** 📚💪

Good luck with your studies! 🌟
