# 🚀 Supabase Setup Guide for PMS

## 📋 Prerequisites
- A Supabase account (free tier available)
- Node.js 18+ installed locally

## 🏗️ Step 1: Create Supabase Project

1. **Go to [supabase.com](https://supabase.com)**
2. **Sign up/Login** with your GitHub account
3. **Create New Project**
   - Choose your organization
   - Enter project name: `pms-system`
   - Enter database password (save this!)
   - Choose region closest to you
   - Click "Create new project"

## 🗄️ Step 2: Set Up Database Schema

1. **Wait for project to be ready** (usually 2-3 minutes)
2. **Go to SQL Editor** in your project dashboard
3. **Copy and paste** the contents of `supabase-schema.sql`
4. **Run the SQL** to create all tables and sample data

## 🔑 Step 3: Get API Keys

1. **Go to Settings → API** in your project dashboard
2. **Copy the following values:**
   - Project URL (e.g., `https://your-project-id.supabase.co`)
   - Anon public key (starts with `eyJ...`)

## ⚙️ Step 4: Configure Environment

1. **Copy `.env.example` to `.env`:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your Supabase credentials:**
   ```env
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

## 🚀 Step 5: Start the Backend

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm run dev
   ```

3. **Test the connection:**
   ```bash
   curl http://localhost:5000/health
   curl http://localhost:5000/api/test
   ```

## 🔐 Step 6: Enable Row Level Security (Optional)

For production use, enable RLS policies in Supabase:

1. **Go to Authentication → Policies**
2. **Enable RLS** on all tables
3. **Create policies** for user access control

## 📊 Step 7: Verify Data

Check that sample data was created:

1. **Go to Table Editor** in Supabase
2. **Verify tables exist:**
   - users (4 sample users)
   - properties (1 sample property)
   - units (3 sample units)
   - leases (1 sample lease)

## 🎯 What You Get

✅ **Complete Database Schema** - All PMS tables with relationships
✅ **Sample Data** - Ready-to-use test data
✅ **TypeScript Types** - Full type safety
✅ **API Endpoints** - Basic CRUD operations
✅ **Authentication Ready** - Supabase Auth integration
✅ **Real-time Capabilities** - Live updates with subscriptions

## 🆘 Troubleshooting

**Connection Issues:**
- Verify SUPABASE_URL and SUPABASE_ANON_KEY
- Check if project is active in Supabase dashboard
- Ensure database password is correct

**Schema Issues:**
- Run SQL commands one by one if batch fails
- Check for syntax errors in SQL editor
- Verify all tables were created successfully

## 🚀 Next Steps

After setup:
1. **Start frontend** - `cd ../frontend && npm start`
2. **Test full system** - Navigate between pages
3. **Customize data** - Add your own properties/users
4. **Enable auth** - Implement user login/registration

---

**Your Supabase-powered PMS is ready to go! 🎉**
