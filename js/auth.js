// Import Firebase functions and services
import {
  auth,
  db,
  getCurrentUser,
  getUserData,
  onAuthStateChanged,
  logoutUser
} from './firebase-config.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async function() {
  // Get UI elements
  const userProfile = document.getElementById('userProfile');
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const logoutBtn = document.getElementById('logoutBtn');
  const profileImage = document.getElementById('profileImage');
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');
  const errorMessage = document.getElementById('errorMessage');
  const togglePassword = document.querySelector('.toggle-password');

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const remember = document.getElementById('remember').checked;

      try {
        // Show loading state
        loginBtn.disabled = true;
        loginBtn.querySelector('.btn-text').style.display = 'none';
        loginBtn.querySelector('.btn-loader').style.display = 'inline-block';
        errorMessage.style.display = 'none';

        // Sign in with email and password
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        
        // Set persistence based on "Remember Me" checkbox
        await auth.setPersistence(remember ? 'LOCAL' : 'SESSION');

        // Redirect to dashboard on successful login
        window.location.href = 'dashboard.html';
      } catch (error) {
        // Handle errors
        console.error('Login error:', error);
        errorMessage.textContent = getErrorMessage(error.code);
        errorMessage.style.display = 'block';
      } finally {
        // Reset button state
        loginBtn.disabled = false;
        loginBtn.querySelector('.btn-text').style.display = 'inline-block';
        loginBtn.querySelector('.btn-loader').style.display = 'none';
      }
    });
  }

  // Toggle password visibility
  if (togglePassword) {
    togglePassword.addEventListener('click', () => {
      const passwordInput = document.getElementById('password');
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      togglePassword.classList.toggle('fa-eye');
      togglePassword.classList.toggle('fa-eye-slash');
    });
  }

  // Helper function to get user-friendly error messages
  function getErrorMessage(errorCode) {
    switch (errorCode) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'אימייל או סיסמא שגויים';
      case 'auth/invalid-email':
        return 'כתובת אימייל לא תקינה';
      case 'auth/user-disabled':
        return 'החשבון הושבת';
      case 'auth/too-many-requests':
        return 'יותר מדי ניסיונות התחברות. אנא נסה שוב מאוחר יותר';
      default:
        return 'אירעה שגיאה בהתחברות. אנא נסה שוב';
    }
  }

  // Only proceed with auth checks if we're on a protected page
  const isProtectedPage = window.location.pathname.includes('dashboard.html') || 
                         window.location.pathname.includes('profile.html');

  // Check authentication state
  onAuthStateChanged(async (user) => {
    if (user) {
      try {
        // Get user data from Firestore
        const userData = await getUserData(user.uid);
        
        if (userData && userProfile) {
          // Update UI with user data
          if (userName) userName.textContent = `${userData.firstName} ${userData.lastName}`;
          if (userEmail) userEmail.textContent = userData.email;
          if (profileImage) profileImage.src = userData.profileImage || 'assets/default-avatar.png';
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        // Handle error appropriately
      }
    } else if (isProtectedPage) {
      // Only redirect to login if we're on a protected page
      window.location.href = 'login.html';
    }
  });

  // Handle logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      try {
        await logoutUser();
        window.location.href = 'main.html';
      } catch (error) {
        console.error('Error logging out:', error);
        alert('Error logging out. Please try again.');
      }
    });
  }
}); 