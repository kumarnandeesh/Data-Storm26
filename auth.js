// ===== Auth Configuration =====
const AUTH_KEY = 'opportunityhub-auth';
const USERS_KEY = 'opportunityhub-users';

// Dummy users for testing
const defaultUsers = [
    {
        id: 1,
        email: 'demo@example.com',
        password: 'demo1234',
        firstName: 'Demo',
        lastName: 'User'
    },
    {
        id: 2,
        email: 'admin@example.com',
        password: 'admin1234',
        firstName: 'Admin',
        lastName: 'User'
    }
];

// Initialize users in localStorage if not exists
function initUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
}

// Get all users
function getUsers() {
    initUsers();
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

// Save users
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// ===== Auth Functions =====

// Check if user is logged in
function isLoggedIn() {
    const auth = localStorage.getItem(AUTH_KEY);
    return auth !== null;
}

// Get current user
function getCurrentUser() {
    const auth = localStorage.getItem(AUTH_KEY);
    return auth ? JSON.parse(auth) : null;
}

// Login user
function login(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    
    if (user) {
        const authData = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
        return { success: true, user: authData };
    }
    
    return { success: false, message: 'Invalid email or password' };
}

// Register user
function register(firstName, lastName, email, password) {
    const users = getUsers();
    
    // Check if email already exists
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
        return { success: false, message: 'Email already registered' };
    }
    
    const newUser = {
        id: users.length + 1,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    };
    
    users.push(newUser);
    saveUsers(users);
    
    // Auto login after registration
    return login(email, password);
}

// Logout user
function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'login.html';
}

// ===== Page Protection =====

// Redirect to login if not authenticated (for protected pages)
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Redirect to dashboard if already authenticated (for auth pages)
function redirectIfLoggedIn() {
    if (isLoggedIn()) {
        window.location.href = 'dashboard.html';
        return true;
    }
    return false;
}

// ===== UI Helpers =====

function showError(message) {
    const errorEl = document.getElementById('errorMessage');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }
}

function hideError() {
    const errorEl = document.getElementById('errorMessage');
    if (errorEl) {
        errorEl.classList.remove('visible');
    }
}

function setLoading(button, loading) {
    const btnText = button.querySelector('.btn-text');
    const btnLoader = button.querySelector('.btn-loader');
    
    if (loading) {
        button.disabled = true;
        if (btnText) btnText.style.display = 'none';
        if (btnLoader) btnLoader.style.display = 'inline';
    } else {
        button.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (btnLoader) btnLoader.style.display = 'none';
    }
}

// ===== Form Handlers =====

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    // Redirect if already logged in
    redirectIfLoggedIn();
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideError();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginBtn = document.getElementById('loginBtn');
        
        setLoading(loginBtn, true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const result = login(email, password);
        
        if (result.success) {
            window.location.href = 'dashboard.html';
        } else {
            showError(result.message);
            setLoading(loginBtn, false);
        }
    });
}

// Register Form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    // Redirect if already logged in
    redirectIfLoggedIn();
    
    // Password strength checker
    const passwordInput = document.getElementById('password');
    const strengthIndicator = document.getElementById('passwordStrength');
    
    if (passwordInput && strengthIndicator) {
        passwordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            strengthIndicator.className = 'password-strength';
            
            if (password.length === 0) {
                return;
            } else if (password.length < 6) {
                strengthIndicator.classList.add('weak');
            } else if (password.length < 10 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
                strengthIndicator.classList.add('medium');
            } else {
                strengthIndicator.classList.add('strong');
            }
        });
    }
    
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideError();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const registerBtn = document.getElementById('registerBtn');
        
        // Validation
        if (password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }
        
        if (password.length < 8) {
            showError('Password must be at least 8 characters');
            return;
        }
        
        setLoading(registerBtn, true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const result = register(firstName, lastName, email, password);
        
        if (result.success) {
            window.location.href = 'dashboard.html';
        } else {
            showError(result.message);
            setLoading(registerBtn, false);
        }
    });
}

// Toggle Password Visibility
const togglePassword = document.getElementById('togglePassword');
if (togglePassword) {
    togglePassword.addEventListener('click', () => {
        const passwordInput = document.getElementById('password');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = '👁️';
        }
    });
}

// Social Login (Dummy)
function socialLogin(provider) {
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login coming soon!`);
}

// ===== Initialize =====
initUsers();
