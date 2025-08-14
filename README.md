<<<<<<< HEAD
# 🏠 Property Management System (PMS)

A comprehensive web-based platform for managing property operations, tenant relationships, and maintenance workflows.

## 🎯 Overview

This Property Management System streamlines property operations by providing a centralized platform for:
- **Tenants**: View leases, pay rent, submit maintenance requests
- **Homeowners/Landlords**: Manage properties, monitor finances, oversee maintenance
- **Maintenance Providers**: Handle repair tickets and service requests
- **Administrators**: Full system control and reporting

## 🏗️ Architecture

- **Frontend**: React.js with TypeScript, Material-UI components
- **Backend**: Node.js/Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based with role-based access control
- **Containerization**: Docker with Docker Compose

## 🚀 Quick Start

### Option 1: Docker (Recommended)
```bash
# Clone and start all services
git clone <repository-url>
cd pms-project
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

### Option 2: Local Development
```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm start

# Database
# Install PostgreSQL and run migrations
cd backend
npx prisma migrate dev
```

## ��️ Core Modules

✅ **Tenant & Lease Management** - Complete lease lifecycle
✅ **Maintenance Tracking** - Ticketing system with SLA tracking  
✅ **Financial Management** - Online payments and reporting
✅ **Communication** - Internal messaging and notifications
✅ **Document Management** - Secure file storage and sharing
✅ **Property Management** - Comprehensive property oversight

## 📱 User Roles

| Role | Permissions |
|------|-------------|
| **Admin** | Full system control, user management, reports |
| **Homeowner** | Property management, tenant visibility, financials |
| **Tenant** | Lease viewing, rent payment, maintenance requests |
| **Vendor** | Job management, status updates, completion reports |

## 🔐 Security Features

- SSL encryption for data in transit
- Role-based access control (RBAC)
- JWT token authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Audit trails for all operations

## 📊 Key Metrics

- Occupancy rates and rent collection efficiency
- Maintenance resolution times and vendor performance
- Financial performance (NOI, ROI)
- Tenant satisfaction scores

## 🚀 Getting Started

1. **Prerequisites**: Docker & Docker Compose (or Node.js + PostgreSQL)
2. **Quick Start**: `docker-compose up -d`
3. **Access**: http://localhost:3000
4. **Default Users**: See PROJECT_SETUP.md

## 📁 Project Structure

```
pms-project/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
├── database/          # Database scripts and migrations
├── docs/              # Project documentation
├── docker-compose.yml # Docker orchestration
└── README.md          # This file
```

## 🔧 Configuration

Environment variables are configured in `.env` files:
- Database connection strings
- JWT secrets and expiration
- Email/SMS service credentials
- File storage configuration
- Payment gateway settings

## 🧪 Testing

```bash
# Backend tests
cd backend && npm run test

# Frontend tests  
cd frontend && npm run test
```

## 🚀 Deployment

### Docker Deployment
```bash
docker-compose up -d
```

### Manual Deployment
1. Build frontend: `npm run build`
2. Start backend: `npm start`
3. Configure reverse proxy (nginx)
4. Set up SSL certificates

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Core user management and authentication
- ✅ Property and tenant management
- ✅ Basic maintenance tracking
- ✅ Online rent collection
- ✅ Document management

### Phase 2
- 🔄 Advanced reporting dashboard
- 🔄 Mobile app development
- 🔄 Third-party integrations
- 🔄 Advanced analytics

### Phase 3
- 📋 AI-powered insights
- 📋 Predictive maintenance
- 📋 Advanced automation
- 📋 Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- Check PROJECT_SETUP.md for setup instructions
- Review API documentation at `/api-docs`
- Create an issue for bugs or feature requests

---

**Built with ❤️ for modern property management**

*Ready to revolutionize your property management workflow? Get started today!*
=======
# pms
>>>>>>> 1eca4d455317109da591f93d95210a3eeb61499f
