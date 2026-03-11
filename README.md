# Professional Developer Portfolio

A modern, fully-responsive developer portfolio website built with React, Node.js, MongoDB, and Tailwind CSS. Perfect for showcasing your projects and skills to recruiters and potential clients.

## 🎯 Features

### Frontend
- ✅ **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- ✅ **Dark/Light Mode** - Beautiful theme switching with persistent storage
- ✅ **Smooth Animations** - Framer Motion for engaging page transitions
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Fast Performance** - Optimized with Vite and code splitting
- ✅ **Accessible** - WCAG compliant, keyboard navigation support

### Pages Included
- **Home** - Hero section with call-to-action buttons and project highlights
- **About** - Professional summary, education, and career objectives
- **Skills** - Interactive skill progress bars with categorization
- **Projects** - Portfolio grid with project cards including live demos and GitHub links
- **Research** - Research papers and publications section
- **Resume** - PDF preview and download functionality
- **Contact** - Contact form with email validation and backend API integration

### Backend
- ✅ **REST API** - Express.js server with clean architecture
- ✅ **Database** - MongoDB integration with Mongoose ODM
- ✅ **Form Submission** - Contact form with validation
- ✅ **Error Handling** - Comprehensive error handling and validation
- ✅ **Security** - CORS protection, rate limiting, and input validation
- ✅ **Scalable** - Clean folder structure for easy expansion

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
My Portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SkillBar.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Research.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── Contact.jsx
│   │   ├── utils/             # Utility functions
│   │   │   ├── api.js
│   │   │   ├── portfolio.js
│   │   │   └── animations.js
│   │   ├── context/           # Context providers
│   │   │   └── ThemeContext.jsx
│   │   ├── assets/            # Images and static files
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/                # Static files
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js         # Contact form schema
│   ├── middleware/
│   │   └── validators.js      # Validation & rate limiting
│   ├── routes/
│   │   └── api.js             # API routes
│   ├── server.js              # Main server file
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
# Edit .env with your API URL
```

4. Start development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
# Configure MongoDB URI and other settings
```

4. Start development server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## 📝 Customization

### Update Portfolio Data
Edit `frontend/src/utils/portfolio.js` to update:
- Your name and title
- About section content
- Skills and proficiency levels
- Projects and case studies
- Research papers
- Social media links

### Update Styling
- **Colors**: Modify `frontend/tailwind.config.js`
- **Fonts**: Update in `tailwind.config.js`
- **CSS**: Edit `frontend/src/index.css`

### Update Pages
All page components are in `frontend/src/pages/` and can be easily customized.

## 🎨 Features in Detail

### Dark/Light Mode
- Automatic detection of system preference
- Manual toggle via header button
- Persistent storage using localStorage
- Smooth transitions between themes

### Animations
- Page load animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth transitions throughout

### Responsive Design
- Mobile-first approach
- Tailwind's responsive utilities
- Optimized layouts for all screen sizes
- Touch-friendly interface

### SEO Optimization
- Meta tags for OG and Twitter
- Semantic HTML structure
- Mobile viewport settings
- Fast loading with code splitting



## 📊 Performance Optimization

### Frontend
- **Code Splitting** - Lazy load components with React Suspense
- **Image Optimization** - Use responsive images
- **Minification** - Vite automatically minifies for production
- **Caching** - Leverage browser caching with proper headers

### Backend
- **Database Indexing** - Indexes on frequently queried fields
- **Response Compression** - Use gzip compression
- **Rate Limiting** - Prevent abuse
- **Pagination** - For large data sets

## 🔒 Security

- **CORS** - Configured to allow only your frontend
- **Helmet.js** - HTTP headers security
- **Input Validation** - Express validator for all inputs
- **Rate Limiting** - Prevent spam and abuse
- **HTTPS** - Always use SSL/TLS in production

## 🐛 Troubleshooting

### Frontend issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear browser cache or use hard refresh (Ctrl+Shift+R)
```

### Backend issues
```bash
# Check MongoDB connection
mongosh

# Check if port is in use
lsof -i :5000

# Restart server
npm run dev
```

### CORS errors
- Check `FRONTEND_URL` in backend `.env`
- Ensure frontend and backend URLs match exactly
- Check `Access-Control-Allow-Origin` headers

## 📈 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Analytics integration
- [ ] Admin dashboard for managing content
- [ ] Testimonials section
- [ ] Email notifications for contact submissions
- [ ] Newsletter subscription
- [ ] Social media feed integration


**Made with ❤️ using React, Node.js, and Tailwind CSS**
