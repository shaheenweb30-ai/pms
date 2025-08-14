# 🚀 Local Setup Guide - PMS with Supabase

## 🎯 Overview
This guide will help you run the Property Management System locally using Supabase as the backend database.

## 📋 Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier available)
- Git (to clone the repository)

## 🏗️ Step 1: Supabase Setup

### 1.1 Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login with GitHub
3. Create New Project:
   - Name: `pms-system`
   - Database Password: Choose a strong password
   - Region: Select closest to you
   - Wait for project to be ready (2-3 minutes)

### 1.2 Set Up Database Schema
1. In Supabase Dashboard → SQL Editor
2. Copy contents of `backend/supabase-schema.sql`
3. Paste and run the SQL
4. Verify tables are created in Table Editor

### 1.3 Get API Keys
1. Go to Settings → API
2. Copy:
   - Project URL: `https://your-project-id.supabase.co`
   - Anon Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## ⚙️ Step 2: Backend Configuration

### 2.1 Configure Environment
```bash
cd backend
cp .env.example .env
```

Edit `.env`:
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### 2.2 Install Dependencies
```bash
npm install
```

### 2.3 Start Backend
```bash
npm run dev
```

**Verify Backend:**
```bash
curl http://localhost:5000/health
curl http://localhost:5000/api/test
```

## 🎨 Step 3: Frontend Configuration

### 3.1 Configure Environment
```bash
cd frontend
cp .env.example .env
```

Edit `.env`:
```env
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3.2 Install Dependencies
```bash
npm install
```

### 3.3 Start Frontend
```bash
npm start
```

**Frontend will open at:** http://localhost:3000

## 🧪 Step 4: Test the System

### 4.1 Verify Backend
- Health check: http://localhost:5000/health ✅
- API test: http://localhost:5000/api/test ✅
- Users: http://localhost:5000/api/users ✅
- Properties: http://localhost:5000/api/properties ✅

### 4.2 Verify Frontend
- Dashboard loads ✅
- Navigation works ✅
- Data displays correctly ✅

### 4.3 Sample Data
The system comes with sample data:
- **Users:** admin@pms.com, owner@pms.com, tenant@pms.com, vendor@pms.com
- **Properties:** Sunset Apartments (20 units)
- **Units:** 1A, 1B, 2A with different configurations
- **Leases:** Active lease for tenant@pms.com

## 🔐 Step 5: Authentication (Optional)

### 5.1 Enable Supabase Auth
1. Go to Authentication → Settings
2. Enable Email confirmations
3. Configure redirect URLs

### 5.2 Test Login
- Use sample user credentials
- Verify JWT tokens work
- Test protected routes

## 🚀 Step 6: Development Workflow

### 6.1 Backend Development
```bash
cd backend
npm run dev  # Auto-restart on file changes
```

### 6.2 Frontend Development
```bash
cd frontend
npm start    # Auto-reload on file changes
```

### 6.3 Database Changes
1. Modify `supabase-schema.sql`
2. Run in Supabase SQL Editor
3. Update TypeScript types if needed

## 📊 Step 7: Monitor & Debug

### 7.1 Backend Logs
- Watch terminal for backend logs
- Check for TypeScript errors
- Monitor API requests

### 7.2 Frontend Logs
- Check browser console
- React DevTools
- Network tab for API calls

### 7.3 Supabase Dashboard
- Real-time logs
- Database queries
- Authentication events

## 🆘 Troubleshooting

### Common Issues

**Backend won't start:**
- Check Node.js version (18+)
- Verify .env file exists
- Check Supabase credentials

**Frontend won't start:**
- Verify .env file in frontend directory
- Check Supabase credentials
- Clear npm cache: `npm cache clean --force`

**Database connection fails:**
- Verify Supabase project is active
- Check API keys are correct
- Ensure schema was created successfully

**CORS errors:**
- Verify CORS_ORIGIN in backend .env
- Check frontend is running on correct port

### Debug Commands
```bash
# Check backend status
curl -v http://localhost:5000/health

# Check frontend build
cd frontend && npm run build

# Check dependencies
npm ls --depth=0
```

## 🎯 What You Get

✅ **Full PMS System** - Complete property management functionality
✅ **Supabase Backend** - Scalable PostgreSQL database
✅ **Real-time Updates** - Live data synchronization
✅ **Type Safety** - Full TypeScript support
✅ **Modern UI** - Material-UI components
✅ **Sample Data** - Ready-to-use test data

## 🚀 Next Steps

After successful setup:
1. **Customize Data** - Add your own properties/users
2. **Enable Auth** - Implement user authentication
3. **Add Features** - Extend functionality as needed
4. **Deploy** - Move to production when ready

---

**Your local PMS system is ready! 🎉**

**Access Points:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Supabase: Your project dashboard

**Happy coding! 🚀**
