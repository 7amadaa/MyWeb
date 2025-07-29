# TheoBot Documentation Website

A comprehensive, modern documentation website for TheoBot - the advanced Highrise bot with extensive features and capabilities.

## 🌟 Features

- **Modern Design**: Clean, responsive interface with beautiful gradients and animations
- **Comprehensive Documentation**: All bot commands organized by categories
- **Interactive Search**: Real-time search functionality across all commands
- **Role-based Information**: Clear indication of required permissions for each command
- **Copy Commands**: One-click command copying for easy use
- **Mobile Responsive**: Works perfectly on all devices

## 📋 Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## 🚀 Quick Start

1. **Navigate to the website directory**:
   ```bash
   cd website
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the website**:
   ```bash
   python run_website.py
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:5000
   ```

## 📁 Project Structure

```
website/
├── app.py                 # Main Flask application
├── run_website.py         # Website runner script
├── requirements.txt       # Python dependencies
├── README.md             # This file
└── templates/
    ├── base.html         # Base template with styling
    ├── index.html        # Homepage template
    └── category.html     # Category detail template
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple gradient theme
- **Glass Morphism**: Modern glass-like effects with backdrop blur
- **Hover Animations**: Smooth transitions and hover effects
- **Color-coded Roles**: Different colors for different permission levels
- **Icon Integration**: Font Awesome icons throughout the interface

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔍 Search Functionality

- **Global Search**: Search across all commands from the homepage
- **Category Search**: Search within specific command categories
- **Real-time Results**: Instant search results as you type
- **Multiple Fields**: Searches command names, descriptions, and usage

## 🎯 Command Categories

1. **🎭 Emote Commands** - Control emotes and animations
2. **🚶 Movement Commands** - User movement and teleportation
3. **🎮 Game Commands** - Interactive games and entertainment
4. **🛡️ Moderation Commands** - Room moderation tools
5. **💰 Economy Commands** - Tip and economy management
6. **💝 Reaction Commands** - Send reactions to users
7. **ℹ️ Information Commands** - AI assistance and weather
8. **📢 Broadcast Commands** - Message broadcasting system
9. **✉️ Message Commands** - Join/leave and loop messages
10. **🏆 Leaderboard Commands** - User activity tracking
11. **💎 VIP Commands** - VIP user management
12. **👑 Role Management** - User role management
13. **⚙️ System Commands** - Bot configuration
14. **👗 Bot Outfit Commands** - Bot appearance management

## 🛠️ Customization

### Adding New Commands

To add new commands, edit the `COMMAND_CATEGORIES` dictionary in `app.py`:

```python
"new_category": {
    "title": "🆕 New Category",
    "description": "Description of the new category",
    "icon": "fas fa-icon-name",
    "commands": [
        {
            "command": "!newcommand",
            "description": "Description of the command",
            "usage": "!newcommand (parameters)",
            "example": "!newcommand example",
            "role": "Everyone"
        }
    ]
}
```

### Styling Changes

Modify the CSS in `templates/base.html` to customize:
- Colors and gradients
- Animations and transitions
- Layout and spacing
- Typography

## 🌐 Deployment

### Local Development
```bash
python run_website.py
```

### Production Deployment
For production deployment, consider using:
- **Gunicorn**: `gunicorn -w 4 -b 0.0.0.0:5000 app:app`
- **Docker**: Create a Dockerfile for containerized deployment
- **Cloud Platforms**: Deploy to Heroku, Railway, or similar platforms

## 📞 Support

For questions about the website or TheoBot:
- **Creator**: @IITheoII
- **Pricing**: 2k gold/month or 8k gold permanent

## 🔄 Updates

The website automatically reflects all commands and features from the bot's help system. When new commands are added to the bot, they can be easily added to the website by updating the `COMMAND_CATEGORIES` in `app.py`.

---

**TheoBot** - Enhancing Highrise rooms with advanced features and comprehensive functionality. 