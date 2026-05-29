# MEETME - Social Network

A simple, lightweight social networking platform with user authentication, posts, and feed built using vanilla HTML, CSS, and JavaScript.

## 🎯 Features

- ✅ **User Registration**: Create accounts with username and phone/email
- ✅ **User Login**: Authenticate with username and password
- ✅ **Create Posts**: Share thoughts and updates with the community
- ✅ **Social Feed**: View all posts from users in chronological order
- ✅ **Persistent Storage**: Data stored in browser's localStorage
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Modern UI**: Beautiful gradient design with smooth animations
- ✅ **Input Validation**: Comprehensive form validation

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sadeeq-tech/meetme-.git
cd meetme-
```

2. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# Or use a local server
python -m http.server 8000
# Visit http://localhost:8000
```

## 📖 How It Works

### User Flow

1. **Sign Up** (Default)
   - Enter Username, Phone/Email, and Password
   - Click "Sign Up"
   - Account is saved to localStorage
   - Can now login

2. **Login**
   - Enter Username and Password
   - Click "Login"
   - Credentials verified
   - Dashboard with feed is displayed

3. **Social Feed**
   - Create and share posts
   - View all posts from all users
   - Posts displayed in chronological order (newest first)
   - Logout to return to login page

### Technical Architecture

```
Frontend: HTML5 + CSS3 + Vanilla JavaScript
Storage: Browser localStorage (JSON)
No Backend/Server Required
```

## 📁 Project Structure

```
meetme-/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Separated styles
├── js/
│   └── app.js          # Application logic
├── README.md           # This file
├── CONTRIBUTING.md     # Contributing guidelines
├── SECURITY.md         # Security documentation
├── DEPLOYMENT.md       # Deployment guide
├── LICENSE             # GNU AGPL v3.0
└── .gitignore          # Git ignore rules
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - Pure logic without frameworks
- **localStorage API** - Client-side data persistence

## 🧪 Test the Application

### Example Users:

**User 1:**
- Username: `john_doe`
- Contact: `john@example.com`
- Password: `password123`

**User 2:**
- Username: `jane_smith`
- Contact: `+1234567890`
- Password: `secure456`

### Steps to Test:

1. Create an account (Sign Up)
2. Login with your credentials
3. Create a post
4. Open in another browser/tab and create another account
5. Post from both accounts
6. See posts from both users in the feed
7. Test logout and login again

## 🔐 Security Notes ⚠️

### Current Implementation (Development Only)

**What's Included:**
- Username validation
- Password length validation (minimum 6 characters)
- Phone/Email validation
- Form validation before submission
- User data persistence

**Limitations:**
- Passwords stored in plain text (NOT for production)
- Client-side validation only
- No HTTPS enforcement
- No encryption of stored data
- Data stored in browser localStorage

### For Production Use

You MUST implement:
- Backend authentication server
- Password hashing (bcrypt, scrypt)
- HTTPS/SSL encryption
- Server-side validation
- JWT or session tokens
- Database (PostgreSQL, MongoDB, etc.)
- Rate limiting
- CSRF protection

See [SECURITY.md](SECURITY.md) for detailed recommendations.

## 📝 Features Overview

### Authentication
- ✅ Create multiple user accounts
- ✅ Login/Logout functionality
- ✅ Username uniqueness validation
- ✅ Password strength requirements
- ✅ User data persistence

### Social Features
- ✅ Create posts
- ✅ View social feed
- ✅ Chronological post ordering
- ✅ Post metadata (user, timestamp)
- ✅ Like counter (ready for future enhancement)

### User Interface
- ✅ Clean, modern design
- ✅ Gradient backgrounds
- ✅ Smooth animations
- ✅ Responsive layout
- ✅ Emoji indicators for actions
- ✅ Error messages and alerts

## 🚀 Deployment

READY TO DEPLOY? See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Netlify deployment
- Vercel deployment
- GitHub Pages deployment
- Domain configuration
- SSL setup

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for:
- How to report bugs
- How to suggest features
- Code style guidelines
- Pull request process

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Limitations

- Data is lost if browser cache is cleared
- Single device (localStorage limitation)
- No backend persistence
- No real-time updates between devices
- No user profiles (future release)
- No messaging system (future release)

## 🎯 Future Enhancements

- [ ] User profiles with avatars
- [ ] Friend/connection system
- [ ] Direct messaging
- [ ] Like/comment on posts
- [ ] Post editing and deletion
- [ ] User search
- [ ] Notifications
- [ ] Trending posts
- [ ] Backend API integration
- [ ] Mobile app

## 📧 Contact & Support

For questions, suggestions, or issues:
- Create an Issue on GitHub
- Check the documentation
- Visit: https://github.com/sadeeq-tech/meetme-

## 📊 Project Status

- **Status**: ✅ Active Development
- **Version**: 2.0.0
- **Last Updated**: May 29, 2026
- **Stage**: MVP with Social Features

---

**Built with ❤️ by Sadeeq Tech**

⭐ If you like this project, please give it a star on GitHub!
