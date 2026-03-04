# 📚 Smart Study Planner

An AI-based intelligent study timetable generator for students that helps create personalized study schedules, track progress, and stay motivated.

## ✨ Features

### Core Features
- ✅ **Add Subjects** - Add multiple subjects with total hours needed and chapters
- 📅 **Exam Date Input** - Set your exam date to auto-calculate study hours
- 🤖 **Auto Generate Study Plan** - AI-powered study schedule based on your subjects and time
- 📊 **Progress Tracker** - Track your progress with visual indicators
- 🌙 **Dark/Light Theme** - Toggle between dark and light modes with persistence
- 💡 **Motivational Quotes** - Daily motivational quotes to keep you inspired

### Technical Features
- 💾 **Local Storage** - Browser-based persistence for offline access
- 🗄️ **MongoDB Integration** - Cloud database for multi-device sync (optional)
- 🔐 **Authentication** - Secure user accounts with JWT
- ⚡ **Real-time Calculations** - Instant study plan generation
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite 7** - Build tool
- **CSS3** - Styling with CSS variables
- **LocalStorage API** - Client-side data persistence

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

## 🚀 Installation & Setup

### 1. Frontend Setup

```bash
# Navigate to project directory
cd c:\afraar_iot

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (already created)
# Update MONGODB_URI if using MongoDB Atlas

# Start backend server
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

## 📱 Usage

### Quick Start (Local Storage)

1. **Open the app** in your browser
2. **Add Subjects**
   - Enter subject name
   - Set total hours needed to study
   - Optionally add chapters
   - Click "Add Subject"

3. **Set Exam Date**
   - Select your exam date
   - The app automatically calculates days remaining

4. **Generate Study Plan**
   - Click "Generate Study Plan"
   - Get your personalized daily study schedule

5. **Track Progress**
   - Check off subjects as you complete them
   - See visual progress indicators
   - Read motivational quotes

### With Database (MongoDB)

The backend can be enabled for:
- User authentication
- Multi-device sync
- Study history tracking
- Advanced analytics

Current setup uses localStorage for offline-first experience.

## 📁 Project Structure

```
c:\afraar_iot/
├── src/
│   ├── components/
│   │   ├── SubjectForm.jsx
│   │   ├── ExamDateInput.jsx
│   │   ├── StudyPlan.jsx
│   │   ├── ProgressTracker.jsx
│   │   └── MotivationalQuote.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── StudyPlan.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── studyPlan.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Theme Customization

The app supports light and dark themes. Colors are defined in CSS variables:

```css
:root {
  --primary: #7c3aed      /* Purple */
  --secondary: #06b6d4    /* Cyan */
  --success: #10b981      /* Green */
  --danger: #ef4444       /* Red */
  --warning: #f59e0b      /* Orange */
}
```

## 💾 Data Storage

### Local Storage (Current)
- Subjects list
- Exam date
- Study plan
- Progress tracking
- Theme preference

### MongoDB (Optional)
- User accounts
- Multiple study plans
- Historical data
- Cross-device sync

## 🔐 API Endpoints (Backend)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Study Plan
- `POST /api/study-plan/generate` - Generate study plan
- `GET /api/study-plan` - Get user's study plan
- `PUT /api/study-plan/progress` - Update subject progress

## 📊 Study Plan Algorithm

The study planner calculates:

```
Daily Hours = Total Hours / Days Until Exam
```

Example:
- Subject: Mathematics (100 hours)
- Exam in: 25 days
- Daily study: 4 hours/day

## 🎯 Features Breakdown

### 1. Subject Management
- Add multiple subjects
- Remove subjects
- Set total study hours per subject
- Add chapter-wise breakdown

### 2. Study Plan Generation
- Calculates optimal daily study hours
- Distributes workload evenly
- Considers exam date
- Adjustable in real-time

### 3. Progress Tracking
- Visual progress circle (%)
- Subject-wise completion status
- Time tracking (days spent/remaining)
- Motivational feedback

### 4. UI/UX
- Responsive grid layout
- Dark/light theme toggle
- Smooth animations
- Mobile-friendly design

### 5. Motivational Features
- 15+ inspiring quotes
- Random quote on load
- "Get new quote" button
- Daily encouragement

## 🐛 Troubleshooting

### Backend won't connect
- Ensure MongoDB is running
- Check MongoDB URI in `.env`
- Verify port 5000 is not in use

### Frontend not connecting to backend
- Check backend is running on port 5000
- Verify CORS is enabled
- Check browser console for API errors

### LocalStorage full
- Clear browser cache
- Remove old study plans
- Use MongoDB for better storage

## 🚀 Future Enhancements

- [ ] AI subject recommendation
- [ ] Study material suggestions
- [ ] Integration with calendar apps
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Peer collaboration features
- [ ] Video tutorials integration
- [ ] Notification reminders

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created for students who want to study smarter, not harder! 📚✨

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review console errors
3. Create an issue with details

---

**Happy Studying! 📚💦** Remember: Consistency beats intensity every time!
"# smart-study-planner" 
"# smart-study-planner" 
