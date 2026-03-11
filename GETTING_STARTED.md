# Getting Started Guide

Quick start guide to get your portfolio up and running locally.

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- **MongoDB** (Local or [Atlas](https://mongoatlas.com/) for cloud)
- **Text Editor** - VS Code recommended

## Installation Steps

### 1. Clone/Setup Project

```bash
# Navigate to your projects folder
cd ~/projects

# Go to the portfolio directory
cd My\ Portfolio
```

### 2. Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your settings
# VITE_API_URL=http://localhost:5000/api
```

### 3. Backend Setup

```bash
# Navigate to backend (from root)
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your MongoDB connection
# MONGODB_URI=mongodb://localhost:27017/portfolio
```

### 4. Start MongoDB (if using local)

```bash
# macOS with Homebrew
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
# MongoDB should be running as a service

# Verify connection
mongosh
```

### 5. Start Backend Server

```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

### 6. Start Frontend (in new terminal)

```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### 7. Open in Browser

Visit `http://localhost:5173` and you should see your portfolio!

## Customization

### Update Your Information

Edit `frontend/src/utils/portfolio.js`:

```javascript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Update Styling

1. **Colors** - Edit `frontend/tailwind.config.js`
2. **Fonts** - Update in `tailwind.config.js` theme section
3. **Custom CSS** - Edit `frontend/src/index.css`

### Add Your Projects

Add to `portfolioData.projects` array in `portfolio.js`:

```javascript
{
  id: 7,
  title: "Your Project",
  description: "Short description",
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",
  liveDemo: "https://...",
  imageUrl: "https://...",
}
```

## Common Commands

```bash
# Frontend
cd frontend
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build

# Backend
cd backend
npm run dev       # Start with nodemon
npm start         # Start server
```

## Troubleshooting

### Port already in use

```bash
# Port 5000 (backend)
lsof -i :5000
kill -9 <PID>

# Port 5173 (frontend)
lsof -i :5173
kill -9 <PID>
```

### MongoDB connection error

```bash
# Check if MongoDB is running
# macOS
brew services list

# Start MongoDB
brew services start mongodb-community

# Test connection
mongosh "mongodb://localhost:27017"
```

### Dependencies not installing

```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Frontend can't reach backend

1. Verify backend is running on port 5000
2. Check `VITE_API_URL` in `.env` file
3. Check CORS settings in `backend/server.js`
4. Refresh browser (Ctrl+Shift+R)

## Next Steps

1. ✅ Run locally successfully
2. 📝 Update portfolio data
3. 🎨 Customize styling
4. 📸 Add project screenshots
5. 🚀 Deploy to production

See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment.

## Need Help?

- Check error messages carefully
- Google the error code
- Check framework documentation
- Review GitHub issues
- Ask in community forums

Happy coding! 🚀
