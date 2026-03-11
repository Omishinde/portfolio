# Deployment Guide for Developer Portfolio

This guide covers deployment strategies for both frontend and backend in a production environment.

## 🌐 Vercel Deployment (Recommended for Frontend)

### Why Vercel?
- Zero-config deployment
- Automatic SSL certificates
- Global CDN
- Serverless functions
- Generous free tier
- Excellent performance

### Step-by-step:

1. **Push to GitHub**
```bash
cd My\ Portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

2. **Deploy Frontend**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Framework: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables:
     ```
     VITE_API_URL=https://your-backend-api.com/api
     VITE_SITE_NAME=Your Name
     ```
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records with provided values
   - Wait for DNS propagation (5-48 hours)

### Environment File Secrets
```bash
# In Vercel dashboard, go to Settings → Environment Variables
VITE_API_URL = https://your-backend-api.com/api
```

## 🚀 Railway.app Deployment (Backend)

### Why Railway?
- Simple deployment
- Automatic MongoDB setup
- Native environment variables
- Pay-as-you-go pricing
- Built-in monitoring

### Step-by-step:

1. **Prepare backend**
```bash
cd backend
git init
git add .
git commit -m "Backend commit"
```

2. **Deploy on Railway**
   - Visit [railway.app](https://railway.app)
   - Sign in with GitHub
   - Create new project
   - Select "GitHub repo"
   - Choose your portfolio repo
   - Configure root directory: `backend`

3. **Add MongoDB**
   - In Railway dashboard, click "Add"
   - Select "MongoDB"
   - Connect to your project

4. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=<from Railway MongoDB>
   FRONTEND_URL=https://your-portfolio.vercel.app
   OWNER_EMAIL=your-email@example.com
   ```

5. **Deploy**
   - Railway auto-deploys on git push
   - Your API will be available at: `your-app.railway.app`

## 💻 Heroku Deployment (Backend Alternative)

### Step-by-step:

1. **Install Heroku CLI**
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli

# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

2. **Deploy backend**
```bash
cd backend
heroku login
heroku create your-portfolio-api
heroku buildpacks:set heroku/nodejs
```

3. **Add MongoDB Atlas**
   - Go to [atlas.mongodb.com](https://atlas.mongodb.com)
   - Create cluster (free tier available)
   - Get connection string
   - Add to Heroku:
   ```bash
   heroku config:set MONGODB_URI=mongodb+srv://...
   ```

4. **Deploy**
```bash
git push heroku main
```

5. **Monitor**
```bash
heroku logs --tail
```

## 🏗️ Docker Deployment (Self-hosted)

### Dockerfile for Frontend
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Dockerfile for Backend
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:6
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_DATABASE: portfolio
    volumes:
      - mongodb_data:/data/db

  backend:
    build:
      context: .
      dockerfile: backend/Dockerfile
    ports:
      - "5000:5000"
    environment:
      MONGODB_URI: mongodb://mongodb:27017/portfolio
      FRONTEND_URL: http://localhost:3000
    depends_on:
      - mongodb

  frontend:
    build:
      context: .
      dockerfile: frontend/Dockerfile
    ports:
      - "3000:80"
    depends_on:
      - backend

volumes:
  mongodb_data:
```

## 🌍 AWS Deployment

### Frontend on S3 + CloudFront

1. **Build frontend**
```bash
cd frontend
npm run build
```

2. **Upload to S3**
   - Create S3 bucket
   - Upload `dist` folder contents
   - Enable static website hosting
   - Set permissions to public

3. **CloudFront CDN**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Get CloudFront domain
   - Route 53 for custom domain

### Backend on EC2

1. **Launch EC2 instance**
   - Select Ubuntu 22.04 LTS
   - t2.micro (free tier)
   - Key pair for SSH access

2. **Setup instance**
```bash
ssh -i your-key.pem ubuntu@your-instance-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MongoDB
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt-get install -y mongodb-org

# Install PM2
sudo npm install -g pm2
```

3. **Deploy backend**
```bash
git clone your-repo
cd portfolio/backend
npm install
pm2 start server.js --name "portfolio-api"
pm2 startup
pm2 save
```

4. **Setup Nginx reverse proxy**
```bash
sudo apt install nginx

# Edit Nginx config
sudo cat > /etc/nginx/sites-available/default << EOF
server {
    listen 80 default_server;
    server_name _;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

sudo systemctl restart nginx
```

## 📊 Performance Tips

### Frontend
1. **Enable compression** in Vercel/Nginx
2. **Lazy load components** with React.lazy
3. **Minimize bundle** using code splitting
4. **Cache assets** for 1 year
5. **Use CDN** for images and static files

### Backend
1. **Enable gzip** compression
2. **Add database indexes** for frequent queries
3. **Use caching** (Redis) for frequently accessed data
4. **Implement pagination** for large datasets
5. **Rate limit** API endpoints

### Monitoring
```javascript
// Add monitoring to backend
app.use(require('morgan')('combined'));

// Error tracking
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
};
```

## 🔒 Security Checklist

- [ ] Use HTTPS everywhere
- [ ] Set secure CORS headers
- [ ] Validate all inputs
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Keep dependencies updated
- [ ] Use strong database passwords
- [ ] Enable MongoDB authentication
- [ ] Set up proper error handling
- [ ] Regular security audits

## 📈 CI/CD Pipeline with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy Frontend to Vercel
        run: npx vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy Backend
        run: git push heroku main
        env:
          HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
```

## 🧪 Pre-deployment Checklist

- [ ] All environment variables configured
- [ ] Database connection verified
- [ ] Frontend build succeeds (`npm run build`)
- [ ] Backend tests pass
- [ ] Frontend tests pass
- [ ] No console errors/warnings
- [ ] Mobile responsive design verified
- [ ] Dark mode testing
- [ ] All links working
- [ ] Contact form submitting
- [ ] Images loading properly
- [ ] Performance metrics acceptable

## 🚨 Troubleshooting Deployment

### Vercel
```
Error: Build failed
→ Check Node.js version compatibility
→ Ensure all env vars are set
→ Check output directory is "dist"

Error: 502 Bad Gateway
→ Backend API is unreachable
→ Check VITE_API_URL environment variable
```

### Railway/Heroku
```
Error: Cannot find module
→ npm install not running
→ Check package.json is in root

Error: MongoDB connection timeout
→ Check connection string
→ Verify IP whitelist in MongoDB Atlas
→ Test connection locally first
```

## 📞 Support

For deployment issues:
1. Check platform's documentation
2. Review error logs
3. Test locally first
4. Ask in community forums
5. Contact platform support

---

**Happy deploying! 🚀**
