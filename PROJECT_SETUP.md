# 🚀 Property Management System - Quick Setup Guide

## Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)
- PostgreSQL 14+ (for local development)

## 🏃‍♂️ Quick Start with Docker

1. **Clone and navigate to project:**
   ```bash
   cd pms-project
   ```

2. **Start all services:**
   ```bash
   docker-compose up -d
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Database: localhost:5432

## 🛠️ Local Development Setup

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Database Setup
```bash
cd backend
npx prisma migrate dev
npx prisma db seed
```

## 📱 Default Users

**Admin User:**
- Email: admin@pms.com
- Password: admin123

**Homeowner:**
- Email: owner@pms.com  
- Password: owner123

**Tenant:**
- Email: tenant@pms.com
- Password: tenant123

## 🔧 Key Features Implemented

✅ **Authentication & Authorization**
- JWT-based authentication
- Role-based access control (Admin, Homeowner, Tenant, Vendor)

✅ **Core Modules**
- User Management
- Property Management
- Tenant & Lease Management
- Maintenance Tracking
- Payment Management
- Document Management
- Messaging System

✅ **API Endpoints**
- RESTful API with TypeScript
- Prisma ORM for database operations
- Input validation and error handling

✅ **Frontend**
- React with TypeScript
- Material-UI components
- Responsive design
- Protected routes

## 🚀 Next Steps

1. **Database Seeding:** Add sample data
2. **File Upload:** Implement S3 integration
3. **Email Notifications:** Add SMTP configuration
4. **Payment Gateway:** Integrate Stripe
5. **Testing:** Add unit and integration tests
6. **Deployment:** Configure production environment

## 📚 API Documentation

Visit http://localhost:5000/api-docs for interactive API documentation.

## 🆘 Support

Check the README.md for detailed documentation and troubleshooting.
