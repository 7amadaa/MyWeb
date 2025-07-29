# Deploying TheoBot Website to the Public

This guide shows you how to make your TheoBot documentation website accessible to anyone on the internet.

## 🚀 Option 1: Railway (Recommended - Free)

Railway is the easiest and most reliable option for free hosting.

### Steps:
1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy Your Website**
   - Click "New Project"
   - Choose "Deploy from GitHub repo"
   - Select your repository
   - Railway will automatically detect it's a Python app

3. **Configure Environment**
   - Railway will use the `Procfile` and `requirements.txt` automatically
   - No additional configuration needed

4. **Get Your URL**
   - Railway will give you a public URL like: `https://your-app-name.railway.app`
   - Share this URL with anyone!

## 🌐 Option 2: Render (Free Tier)

Render is another excellent free hosting option.

### Steps:
1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Choose the repository

3. **Configure Service**
   - **Name**: `theobot-website`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`

4. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy your site
   - Get your public URL: `https://your-app-name.onrender.com`

## ☁️ Option 3: Heroku (Paid)

Heroku is a popular platform with a free tier (limited).

### Steps:
1. **Install Heroku CLI**
   ```bash
   # Download from: https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   heroku create your-theobot-website
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

5. **Open Your Site**
   ```bash
   heroku open
   ```

## 🐳 Option 4: Docker + Any Cloud

For more control, you can containerize the app.

### Create Dockerfile:
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
```

### Deploy to:
- **Google Cloud Run** (Free tier)
- **AWS App Runner**
- **Azure Container Instances**
- **DigitalOcean App Platform**

## 🔧 Option 5: VPS (Virtual Private Server)

For complete control, rent a VPS.

### Popular VPS Providers:
- **DigitalOcean** ($5/month)
- **Linode** ($5/month)
- **Vultr** ($2.50/month)
- **AWS EC2** (Free tier available)

### Setup Steps:
1. **Rent a VPS**
2. **Connect via SSH**
3. **Install Python, Git, Nginx**
4. **Clone your repository**
5. **Install dependencies**
6. **Set up Nginx as reverse proxy**
7. **Use systemd to run the app**

## 📱 Option 6: GitHub Pages (Static Alternative)

If you want a static version, you can convert the Flask app to static HTML.

### Steps:
1. **Install static site generator**
   ```bash
   pip install flask-frozen
   ```

2. **Modify app.py** to generate static files
3. **Build static site**
4. **Deploy to GitHub Pages**

## 🎯 Recommended Approach

**For beginners**: Use **Railway** or **Render** - they're free, easy, and reliable.

**For developers**: Use **Docker + Cloud Run** for more control.

**For production**: Use **VPS** for complete control and customization.

## 🔒 Security Considerations

When deploying publicly:

1. **Remove debug mode** in production:
   ```python
   app.run(debug=False, host='0.0.0.0', port=5000)
   ```

2. **Add environment variables** for sensitive data
3. **Use HTTPS** (most platforms provide this automatically)
4. **Set up proper logging**
5. **Monitor your application**

## 📊 Monitoring Your Site

Once deployed, you can:
- Monitor uptime with services like UptimeRobot
- Track visitors with Google Analytics
- Set up alerts for downtime
- Monitor performance with tools like New Relic

## 🆘 Getting Help

If you encounter issues:
1. Check the platform's documentation
2. Look at the deployment logs
3. Ensure all files are committed to your repository
4. Verify your `requirements.txt` is complete
5. Check that your `Procfile` is correct

---

**Choose Railway or Render for the easiest deployment experience!** 