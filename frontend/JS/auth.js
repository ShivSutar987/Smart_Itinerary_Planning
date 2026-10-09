// DOM Elements
const formBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-from-container');
const formClose = document.querySelector('#form-close');
const tabLogin = document.querySelector('#tab-login');
const tabRegister = document.querySelector('#tab-register');
const showRegister = document.querySelector('#show-register');
const showLogin = document.querySelector('#show-login');

const profileSection = document.getElementById('profile-section');
const profileTrigger = document.getElementById('profile-trigger');
const profileMenu = document.getElementById('profile-menu');
const profileAvatarIcon = document.getElementById('profile-avatar-icon');
const profileNameDisplay = document.getElementById('profile-name-display');
const dropdownAvatarIcon = document.getElementById('dropdown-avatar-icon');
const dropdownName = document.getElementById('dropdown-name');
const dropdownEmail = document.getElementById('dropdown-email');

// --- Tab Switching Logic ---
function switchTab(tab) {
    const formLogin = document.getElementById('login-form');
    const formRegister = document.getElementById('register-form');

    if (tab === 'login') {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        formLogin.classList.add('active');
        formRegister.classList.remove('active');
    } else {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        formRegister.classList.add('active');
        formLogin.classList.remove('active');
    }
}

if (tabLogin) tabLogin.addEventListener('click', () => switchTab('login'));
if (tabRegister) tabRegister.addEventListener('click', () => switchTab('register'));
if (showRegister) showRegister.addEventListener('click', (e) => { e.preventDefault(); switchTab('register'); });
if (showLogin) showLogin.addEventListener('click', (e) => { e.preventDefault(); switchTab('login'); });

// Close Modal
if (formClose) {
    formClose.addEventListener('click', () => {
        loginForm.classList.remove('active');
    });
}

// User Button Event (Opens Modal or Toggles Dropdown)
if (formBtn) {
    formBtn.addEventListener('click', () => {
        const token = localStorage.getItem("token");
        if (!token) {
            loginForm.classList.add('active');
        }
    });
}

// Profile Dropdown Toggle
if (profileTrigger) {
    profileTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle('active');
    });
}

document.addEventListener('click', (e) => {
    if (profileMenu && profileMenu.classList.contains('active') && !e.target.closest('.profile-dropdown-container')) {
        profileMenu.classList.remove('active');
    }
});

// Helper for initials
function getInitials(name) {
    if (!name) return "U";
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

// Update Profile UI
function updateProfileUI(name, email) {
    if (!name) return;
    const initials = getInitials(name);
    
    // Hide standard login button, show profile dropdown trigger
    if (formBtn) formBtn.style.display = 'none';
    if (profileSection) profileSection.style.display = 'flex';
    
    // Set text values
    if (profileAvatarIcon) profileAvatarIcon.innerText = initials;
    if (profileNameDisplay) profileNameDisplay.innerText = name.split(' ')[0];
    if (dropdownAvatarIcon) dropdownAvatarIcon.innerText = initials;
    if (dropdownName) dropdownName.innerText = name;
    if (dropdownEmail) dropdownEmail.innerText = email;
}

// Check session on load & sync with backend
window.addEventListener("load", async () => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("userName");
    
    if (token && name) {
        updateProfileUI(name, email);
    }

    if (token) {
        try {
            const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
            const res = await fetch(`${API_BASE}/api/users/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.success && data.user) {
                localStorage.setItem("name", data.user.name);
                localStorage.setItem("user_name", data.user.name);
                localStorage.setItem("userName", data.user.email);
                localStorage.setItem("user_email", data.user.email);
                if (data.user.phone) {
                    localStorage.setItem(`user_phone_${data.user.user_id}`, data.user.phone);
                }
                updateProfileUI(data.user.name, data.user.email);
            }
        } catch (err) {
            console.warn("Could not sync profile with backend:", err);
        }
    }
});

const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");

// ---------------- LOGIN USER ----------------
const loginElement = document.querySelector("#login-form");
if (loginElement) {
    loginElement.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.querySelector("#login-email").value;
        const password = document.querySelector("#login-password").value;

        try {
            const response = await fetch(`${API_BASE}/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                // Save JWT details to localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("auth_token", data.token); // set both to support all modules
                localStorage.setItem("userName", email);
                localStorage.setItem("user_email", email); // set both keys
                localStorage.setItem("user_id", data.user_id);
                localStorage.setItem("name", data.name);
                localStorage.setItem("user_name", data.name); // set both keys

                // Log activity if available
                if (window.logUserActivity) {
                    window.logUserActivity("LOGIN", "login_modal", "success");
                }

                alert(data.message);

                // Close Modal & Reset Form
                loginForm.classList.remove("active");
                document.querySelector("#login-form").reset();

                // Refresh UI
                updateProfileUI(data.name, email);
                location.reload();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Login Failed");
        }
    });
}

// ---------------- REGISTER USER ----------------
const registerElement = document.querySelector("#register-form");
if (registerElement) {
    registerElement.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.querySelector("#register-name").value;
        const email = document.querySelector("#register-email").value;
        const password = document.querySelector("#register-password").value;

        try {
            const response = await fetch(`${API_BASE}/api/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message);
                document.querySelector("#register-form").reset();
                switchTab('login');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Registration Failed");
        }
    });
}

// ---------------- LOGOUT USER ----------------
function logoutUser() {
    if (window.logUserActivity) {
        window.logUserActivity("LOGOUT", "system", "logout");
    }

    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("auth_token");
    localStorage.removeItem("userName");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_id");
    localStorage.removeItem("name");
    localStorage.removeItem("user_name");

    alert("Logged out successfully");
    location.reload();
}

// --- Notifications Menu Toggle ---
function toggleNotificationsMenu(e) {
    if (e) e.stopPropagation();
    const notifMenu = document.getElementById('notifications-dropdown-menu');
    if (notifMenu) {
        notifMenu.classList.toggle('active');
        
        // Hide profile dropdown if active
        const profileMenu = document.getElementById('profile-menu');
        if (profileMenu && profileMenu.classList.contains('active')) {
            profileMenu.classList.remove('active');
        }
    }
}

// Close notifications dropdown on clicking outside
document.addEventListener('click', (e) => {
    const notifMenu = document.getElementById('notifications-dropdown-menu');
    if (notifMenu && notifMenu.classList.contains('active') && !e.target.closest('.notifications-container')) {
        notifMenu.classList.remove('active');
    }
});

// --- Profile Dashboard Forms Updates (Synchronized with MySQL Backend) ---
async function saveProfileUpdate() {
    const newName = document.getElementById('dash-profile-name').value.trim();
    if (!newName) {
        alert("Please enter a valid name");
        return;
    }
    const newPhone = document.getElementById('dash-profile-phone') ? document.getElementById('dash-profile-phone').value.trim() : "";
    const token = localStorage.getItem("token");

    if (token) {
        try {
            const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
            const response = await fetch(`${API_BASE}/api/users/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ name: newName, phone: newPhone })
            });
            const data = await response.json();
            if (!data.success) {
                alert(data.message || "Failed to update profile on server");
                return;
            }
        } catch (error) {
            console.error("Profile update server error:", error);
        }
    }

    const loggedUserId = localStorage.getItem("user_id");
    localStorage.setItem("name", newName);
    localStorage.setItem("user_name", newName);
    if (loggedUserId) {
        localStorage.setItem(`user_phone_${loggedUserId}`, newPhone || "+91 98765 43210");
    }
    
    // Update UI elements instantly
    const initials = getInitials(newName);
    const profileAvatarIcon = document.getElementById('profile-avatar-icon');
    const profileNameDisplay = document.getElementById('profile-name-display');
    const dropdownAvatarIcon = document.getElementById('dropdown-avatar-icon');
    const dropdownName = document.getElementById('dropdown-name');
    const dashAvatar = document.getElementById('dash-avatar');
    const dashName = document.getElementById('dash-name');
    const detailsAvatar = document.getElementById('profile-details-avatar');
    const detailsName = document.getElementById('profile-details-name');
    const detailsPhone = document.getElementById('profile-details-phone');

    if (profileAvatarIcon) profileAvatarIcon.innerText = initials;
    if (profileNameDisplay) profileNameDisplay.innerText = newName.split(' ')[0];
    if (dropdownAvatarIcon) dropdownAvatarIcon.innerText = initials;
    if (dropdownName) dropdownName.innerText = newName;
    if (dashAvatar) dashAvatar.innerText = initials;
    if (dashName) dashName.innerText = newName;
    if (detailsAvatar) detailsAvatar.innerText = initials;
    if (detailsName) detailsName.innerText = newName;
    if (detailsPhone) detailsPhone.innerText = newPhone || "+91 98765 43210";
    
    if (window.logUserActivity) {
        window.logUserActivity("PROFILE_UPDATE", "dashboard", `Changed name to ${newName}`);
    }

    alert("Profile information updated successfully!");
}

async function savePasswordUpdate() {
    const pwd = document.getElementById('dash-profile-pwd').value;
    const pwdConfirm = document.getElementById('dash-profile-pwd-confirm').value;
    
    if (pwd.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }
    if (pwd !== pwdConfirm) {
        alert("Passwords do not match");
        return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please login first");
        return;
    }

    try {
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        const response = await fetch(`${API_BASE}/api/users/change-password`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ password: pwd })
        });
        const data = await response.json();
        if (data.success) {
            if (window.logUserActivity) {
                window.logUserActivity("PASSWORD_CHANGE", "dashboard", "success");
            }
            document.getElementById('dash-password-form').reset();
            alert(data.message || "Password updated successfully!");
        } else {
            alert(data.message || "Password update failed");
        }
    } catch (err) {
        console.error("Password update error:", err);
        alert("Server error occurred while updating password.");
    }
}

// Bind to window for global access
window.logoutUser = logoutUser;
window.toggleNotificationsMenu = toggleNotificationsMenu;
window.saveProfileUpdate = saveProfileUpdate;
window.savePasswordUpdate = savePasswordUpdate;