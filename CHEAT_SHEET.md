# Developer Cheat Sheet

Quick reference for common tasks and commands.

## 🚀 Quick Start

```bash
# Terminal 1 - Backend
cd backend
npm install
cp .env.example .env
npm run dev
# Runs on http://localhost:5000

# Terminal 2 - Frontend  
cd frontend
npm install
cp .env.example .env
npm run dev
# Runs on http://localhost:5173
```

## 📝 Common Frontend Tasks

### Add a New Page
```bash
# 1. Create page component
touch frontend/src/pages/NewPage.jsx

# 2. Add route in App.jsx
import NewPage from './pages/NewPage';
// In Routes:
<Route path="/newpage" element={<NewPage />} />

# 3. Add to header navigation
// In Header.jsx navItems array
{ name: 'New Page', path: '/newpage' }
```

### Add a New Component
```bash
# 1. Create component
touch frontend/src/components/MyComponent.jsx

# 2. Use in page
import MyComponent from '../components/MyComponent';
<MyComponent prop="value" />
```

### Update Portfolio Data
```javascript
// frontend/src/utils/portfolio.js
portfolioData.name = "Your Name"
portfolioData.projects.push({...})
portfolioData.skills.languages.push({...})
```

### Tailwind Utilities

```jsx
// Responsive
<div className="text-sm md:text-lg lg:text-xl">

// Colors
className="text-primary-600 dark:text-primary-400"
className="bg-gray-100 dark:bg-gray-800"

// Flexbox
className="flex items-center justify-between gap-4"

// Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// Spacing
className="px-4 py-6 mx-2 my-4"

// Animation
className="hover:scale-105 transition-transform"
```

### Framer Motion

```jsx
import { motion } from 'framer-motion';

// Simple fade in
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Content
</motion.div>

// On scroll
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Stagger children
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## 🔧 Common Backend Tasks

### Add an API Endpoint

```javascript
// 1. Add route in backend/routes/api.js
router.get('/newdata', getNewData);

// 2. Create controller in backend/controllers/newController.js
export const getNewData = async (req, res) => {
  try {
    const data = await Model.find();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 3. Call from frontend
const data = await api.get('/newdata');
```

### Add Model/Schema

```javascript
// backend/models/NewModel.js
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  field: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('NewModel', schema);
```

### Add Middleware

```javascript
// backend/middleware/custom.js
export const myMiddleware = (req, res, next) => {
  // Do something
  next();
};

// Use in routes
import { myMiddleware } from '../middleware/custom.js';
router.post('/endpoint', myMiddleware, handler);
```

## 📦 NPM Commands

### Frontend
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

### Backend
```bash
npm install          # Install dependencies
npm run dev          # Start with nodemon
npm start            # Start server
npm test             # Run tests (if configured)
```

## 🔍 Debugging

### Frontend
```javascript
// Console logging
console.log('Value:', value);
console.error('Error:', error);
console.warn('Warning:', warning);

// React DevTools
// Install React DevTools browser extension

// Framer Motion
// Add transition delay to see animations
transition={{ duration: 2 }}

// Check network requests
// Browser DevTools → Network tab
```

### Backend
```javascript
// Server logs
console.log('Server started on port', PORT);

// Request logging (already configured with Morgan)
// Check output in console

// MongoDB queries
// Add logging:
console.log('Query:', filter);
console.log('Result:', result);

// Check MongoDB
mongosh
use portfolio
db.contacts.find().pretty()
```

## 🎨 Styling Reference

### Dark Mode
```jsx
// Automatically applied based on user selection
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Content adapts to theme
  </p>
</div>
```

### Colors
```
Primary: bg-primary-600, text-primary-600
Secondary: bg-secondary-600, text-secondary-600
Gray: bg-gray-100, text-gray-900
```

### Responsive
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## 🚀 Deployment Commands

### Vercel (Frontend)
```bash
npm install -g vercel
vercel          # Deploy
vercel --prod   # Production
```

### Heroku (Backend)
```bash
heroku login
heroku create app-name
git push heroku main
heroku logs --tail
```

### Railway
```bash
# Go to railway.app and connect GitHub repo
# Auto deploys on push
```

## 🔐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_SITE_NAME=Your Name
```

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:5173
```

## 📚 File Locations Cheat Sheet

```
Portfolio data:     frontend/src/utils/portfolio.js
Theme context:      frontend/src/context/ThemeContext.jsx
Animations:         frontend/src/utils/animations.js
API calls:          frontend/src/utils/api.js
Header/Footer:      frontend/src/components/
Page components:    frontend/src/pages/

Database config:    backend/config/database.js
API routes:         backend/routes/api.js
Controllers:        backend/controllers/
Models:             backend/models/
Middleware:         backend/middleware/
Main server:        backend/server.js
```

## 🆘 Quick Fixes

### Port Already in Use
```bash
# Find and kill process
lsof -i :5000
kill -9 <PID>
```

### Node Modules Issues
```bash
# Clean reinstall
rm -rf node_modules package-lock.json
npm install
```

### MongoDB Won't Connect
```bash
# Start MongoDB
brew services start mongodb-community

# Test connection
mongosh
```

### Build Errors
```bash
# Clear cache and rebuild
npm cache clean --force
npm run build
```

### Hot Reload Not Working
```bash
# Restart dev server
# Ctrl+C in terminal
npm run dev
```

## 📱 Testing Mobile

```bash
# Get local IP
ifconfig
# or on Windows
ipconfig

# Visit from mobile
http://YOUR_IP:5173
```

## 🎯 Before Deployment

- [ ] Run `npm run build` successfully
- [ ] No console errors
- [ ] All pages load
- [ ] Contact form works
- [ ] Dark mode toggles
- [ ] Mobile responsive
- [ ] Links all work
- [ ] Images load
- [ ] .env configured
- [ ] Database connected

## 💡 Tips & Tricks

### Hot Reload
- Changes automatically reload in dev mode
- Edit portfolio.js to see immediate updates

### Database Backup
```bash
mongodump --uri "mongodb://localhost:27017/portfolio" --out backup
```

### Database Restore
```bash
mongorestore --uri "mongodb://localhost:27017/portfolio" backup/portfolio
```

### Performance Check
```javascript
// In browser console
performance.mark('start');
// ... code to measure ...
performance.mark('end');
performance.measure('test', 'start', 'end');
console.log(performance.getEntriesByName('test'));
```

## 🔗 Useful Links

- React Docs: https://react.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- MongoDB: https://docs.mongodb.com
- Express: https://expressjs.com
- Vite: https://vitejs.dev

## 📞 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Blank page | Check browser console for errors |
| CORS error | Verify FRONTEND_URL in backend .env |
| API 404 | Check route exists in backend/routes |
| Form not submitting | Check backend is running |
| Dark mode not working | Clear localStorage |
| Images not loading | Check image URLs in portfolio.js |
| Slow load time | Check Lighthouse, optimize images |

---

**Save this file for quick reference!** 🚀
