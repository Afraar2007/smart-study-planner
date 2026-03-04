# 🚀 Quick Start Guide - Smart Study Planner

## Prerequisites
- Node.js v16+
- MongoDB (local or MongoDB Atlas)
- npm

## Installation Steps

### Step 1: Clone/Navigate to Project
```bash
cd c:\afraar_iot
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### Step 4: Configure MongoDB

#### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service
3. Backend will connect to `mongodb://localhost:27017/study-planner`

#### Option B: MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get connection string
5. Update `backend/.env`:
   ```
   MONGODB_URI=your_atlas_connection_string
   ```

### Step 5: Run the Application

#### Terminal 1 - Start Backend
```bash
cd backend
npm start
# or for development:
npm run dev
```
✅ Backend runs on http://localhost:5000

#### Terminal 2 - Start Frontend
```bash
npm run dev
```
✅ Frontend runs on http://localhost:5173

## 📱 Using the App

### With LocalStorage (No Backend Needed)
1. Add subjects
2. Set exam date
3. Generate study plan
4. Track progress
- All data saves to browser storage

### With MongoDB Backend (Full Features)
1. Backend must be running
2. Register/Login users
3. Save study plans to database
4. Access from multiple devices
5. Sync progress across devices

## 💡 Key Features

| Feature | Local | Backend |
|---------|-------|---------|
| Add Subjects | ✅ | ✅ |
| Generate Plan | ✅ | ✅ |
| Dark/Light Theme | ✅ | ✅ |
| Progress Tracking | ✅ | ✅ |
| Quotes | ✅ | ✅ |
| Multi-device Sync | ❌ | ✅ |
| User Accounts | ❌ | ✅ |
| Cloud Storage | ❌ | ✅ |

## 🔧 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/study-planner
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here_change_in_production
```

## 📚 API Documentation

### Health Check
```bash
GET http://localhost:5000/api/health
```

### Authentication
```bash
POST /api/auth/register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Study Plan
```bash
POST /api/study-plan/generate
Headers: { Authorization: "Bearer {token}" }
{
  "subjects": [
    {
      "name": "Mathematics",
      "totalHours": 100,
      "chapters": ["Algebra", "Geometry"]
    }
  ],
  "examDate": "2026-04-15"
}
```

## 🐛 Troubleshooting

### Problem: Backend connect error
**Solution:**
- Check MongoDB is running
- Verify MONGODB_URI in .env
- Check no other app uses port 5000

### Problem: CORS error
**Solution:**
- Backend must be running on port 5000
- Frontend must be on port 5173
- Check backend CORS middleware is enabled

### Problem: LocalStorage not working
**Solution:**
- Clear browser cache
- Check privacy mode is disabled
- Try incognito window

## 📊 Sample Study Plan

Input:
- Mathematics: 100 hours
- Physics: 80 hours
- Chemistry: 60 hours
- Exam Date: 30 days from now

Output:
- Mathematics: 3.33 hours/day
- Physics: 2.67 hours/day
- Chemistry: 2 hours/day
- Total: 8 hours/day

## ✨ Tips for Success

1. **Break it down** - Add chapters for each subject
2. **Be realistic** - Set achievable daily hours
3. **Track progress** - Update completion status
4. **Stay motivated** - Read quotes when demotivated
5. **Adjust as needed** - Regenerate plan if needed

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Start both servers
3. ✅ Open http://localhost:5173
4. ✅ Add your first subject
5. ✅ Set exam date
6. ✅ Generate your study plan
7. ✅ Start studying!

---

**Need help?** Check the console for error messages!
