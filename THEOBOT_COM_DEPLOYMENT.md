# Deploying TheoBot Website to theobott.com

This guide shows you how to deploy your TheoBot documentation website to the theobott.com domain.

## 🌐 Domain Setup

### 1. Domain Registration
- Purchase the domain `theobott.com` from a domain registrar (GoDaddy, Namecheap, etc.)
- Set up DNS records for your hosting provider

### 2. DNS Configuration
Configure these DNS records for theobott.com:

```
Type    Name    Value
A       @       YOUR_SERVER_IP
CNAME   www     theobot.com
```

## 🚀 Deployment Options

### Option 1: VPS/Server Hosting (Recommended)

#### Requirements:
- VPS with Ubuntu/CentOS
- Python 3.11+
- Nginx (reverse proxy)
- SSL certificate (Let's Encrypt)

#### Setup Steps:

1. **Connect to your server via SSH**

2. **Install dependencies:**
   ```bash
   sudo apt update
   sudo apt install python3 python3-pip nginx certbot python3-certbot-nginx
   ```

3. **Clone your repository:**
   ```bash
   git clone YOUR_REPOSITORY_URL
   cd your-repo/website
   ```

4. **Install Python dependencies:**
   ```bash
   pip3 install -r requirements.txt
   ```

5. **Set up Nginx configuration:**
   ```bash
   sudo nano /etc/nginx/sites-available/theobot.com
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name theobott.com www.theobott.com;
       
       location / {
           proxy_pass http://127.0.0.1:5000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

6. **Enable the site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/theobot.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

7. **Get SSL certificate:**
   ```bash
   sudo certbot --nginx -d theobott.com -d www.theobott.com
   ```

8. **Create systemd service:**
   ```bash
   sudo nano /etc/systemd/system/theobot-website.service
   ```

   Add this configuration:
   ```ini
   [Unit]
   Description=TheoBot Website
   After=network.target

   [Service]
   User=www-data
   WorkingDirectory=/path/to/your/website
   Environment="PATH=/path/to/your/website/venv/bin"
   ExecStart=/path/to/your/website/venv/bin/python run_theobot_com.py
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

9. **Start the service:**
   ```bash
   sudo systemctl enable theobot-website
   sudo systemctl start theobot-website
   ```

### Option 2: Cloud Platforms

#### Railway
1. Connect your GitHub repository
2. Set environment variables:
   - `FLASK_CONFIG=production`
   - `PORT=5000`
3. Deploy

#### Render
1. Create new Web Service
2. Build Command: `pip install -r requirements.txt`
3. Start Command: `python run_theobot_com.py`
4. Set environment variable: `FLASK_CONFIG=production`

#### Heroku
1. Create Heroku app
2. Set config vars:
   - `FLASK_CONFIG=production`
   - `PORT=5000`
3. Deploy with: `git push heroku main`

## 🔧 Configuration Files

### Production Configuration
The website uses `config.py` with these settings:
- `SERVER_NAME = 'theobott.com'`
- `PREFERRED_URL_SCHEME = 'https'`
- `DEBUG = False`

### Environment Variables
Set these in production:
```bash
FLASK_CONFIG=production
SECRET_KEY=your-secret-key-here
PORT=5000
```

## 📁 File Structure for Production

```
/var/www/theobot.com/
├── run_theobot_com.py      # Production startup script
├── app.py                  # Main Flask application
├── config.py               # Configuration settings
├── requirements.txt        # Python dependencies
├── templates/              # HTML templates
│   ├── base.html
│   ├── index.html
│   └── category.html
└── static/                 # Static files (if any)
```

## 🔒 Security Considerations

1. **SSL Certificate**: Always use HTTPS in production
2. **Secret Key**: Use a strong, unique secret key
3. **Firewall**: Configure server firewall properly
4. **Updates**: Keep system and dependencies updated
5. **Backups**: Regular backups of your application

## 📊 Monitoring

### Logs
```bash
# View application logs
sudo journalctl -u theobot-website -f

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Uptime Monitoring
- Set up UptimeRobot or similar service
- Monitor https://theobot.com
- Set up alerts for downtime

## 🆘 Troubleshooting

### Common Issues:

1. **Domain not resolving**:
   - Check DNS settings
   - Verify domain propagation

2. **SSL certificate issues**:
   - Run: `sudo certbot renew --dry-run`
   - Check certificate expiration

3. **Website not loading**:
   - Check service status: `sudo systemctl status theobot-website`
   - Check Nginx status: `sudo systemctl status nginx`
   - Check logs for errors

4. **Port conflicts**:
   - Ensure port 5000 is available
   - Check firewall settings

## 🎯 Final Checklist

- [ ] Domain purchased and DNS configured
- [ ] Server/VPS set up with Python 3.11+
- [ ] Code deployed to server
- [ ] Dependencies installed
- [ ] Nginx configured and running
- [ ] SSL certificate installed
- [ ] Systemd service created and running
- [ ] Website accessible at https://theobott.com
- [ ] Monitoring and alerts set up

---

**Your TheoBot website will be live at https://theobott.com!** 🚀 