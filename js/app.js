/**
 * MEETME Social Network
 * Main Application Logic with Posts and Feed
 */

let currentUser = null;

// ================================================
// AUTHENTICATION
// ================================================

/**
 * Create a new user account
 */
function signup() {
    const username = document.getElementById('username').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const password = document.getElementById('password').value;

    // Validation
    if (!username || !contact || !password) {
        alert('❌ Please fill all fields');
        return;
    }

    if (username.length < 2) {
        alert('❌ Username must be at least 2 characters long');
        return;
    }

    if (password.length < 6) {
        alert('❌ Password must be at least 6 characters long');
        return;
    }

    // Check if username already exists
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
        alert('❌ Username already taken. Please choose a different username.');
        return;
    }

    // Create user object
    const userData = {
        username: username,
        contact: contact,
        password: password,
        createdAt: new Date().toLocaleString()
    };

    // Save user to localStorage
    localStorage.setItem(username, JSON.stringify(userData));

    alert('✅ Account Created Successfully! Please login.');
    clearAuthForm();
}

/**
 * Login user with username and password
 */
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Validation
    if (!username || !password) {
        alert('❌ Please enter username and password');
        return;
    }

    // Get user from localStorage
    const savedUser = JSON.parse(localStorage.getItem(username));

    if (savedUser && savedUser.password === password) {
        currentUser = username;
        showFeed();
        clearAuthForm();
        loadPosts();
    } else {
        alert('❌ Invalid Username or Password');
    }
}

/**
 * Logout current user
 */
function logout() {
    currentUser = null;
    showAuth();
    clearAuthForm();
    alert('✅ Logged Out Successfully');
}

// ================================================
// PAGE NAVIGATION
// ================================================

/**
 * Show authentication section
 */
function showAuth() {
    document.getElementById('authSection').classList.remove('hidden');
    document.getElementById('feedSection').classList.add('hidden');
}

/**
 * Show feed section
 */
function showFeed() {
    document.getElementById('authSection').classList.add('hidden');
    document.getElementById('feedSection').classList.remove('hidden');
}

/**
 * Clear authentication form
 */
function clearAuthForm() {
    document.getElementById('username').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('password').value = '';
}

// ================================================
// POSTS & FEED
// ================================================

/**
 * Create a new post
 */
function createPost() {
    const postInput = document.getElementById('postInput');

    if (postInput.value.trim() === '') {
        alert('❌ Please write something before posting');
        return;
    }

    // Get existing posts
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Create new post object
    const newPost = {
        id: Date.now(),
        user: currentUser,
        text: postInput.value.trim(),
        createdAt: new Date().toLocaleString(),
        likes: 0
    };

    // Add new post to beginning of array
    posts.unshift(newPost);

    // Save posts to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Clear input
    postInput.value = '';

    // Reload posts
    loadPosts();
    alert('✅ Post created successfully!');
}

/**
 * Load and display all posts
 */
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsDiv = document.getElementById('posts');

    // Clear existing posts
    postsDiv.innerHTML = '';

    if (posts.length === 0) {
        postsDiv.innerHTML = '<p style="text-align: center; color: #999;">No posts yet. Be the first to post!</p>';
        return;
    }

    // Display each post
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'card post';
        postElement.innerHTML = `
            <h3>@${post.user}</h3>
            <p>${post.text}</p>
            <div class="post-meta">
                <span>📅 ${post.createdAt}</span>
                <span style="margin-left: 20px;">❤️ ${post.likes} likes</span>
            </div>
        `;
        postsDiv.appendChild(postElement);
    });
}

// ================================================
// INITIALIZATION
// ================================================

/**
 * Initialize app on page load
 */
function initApp() {
    // Check if user is already logged in
    // In a real app, this would check a session token
    showAuth();
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
