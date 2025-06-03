// Import Firebase functions and services
import {
  auth,
  getCurrentUser,
  getUserData,
  onAuthStateChanged,
  logoutUser
} from './js/firebase-config.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async function() {
  // Get UI elements
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const profileImage = document.getElementById('profileImage');
  const logoutBtn = document.getElementById('logoutBtn');

  // Check authentication state
  onAuthStateChanged(async (user) => {
    if (user) {
      try {
        // Get user data from Firestore
        const userData = await getUserData(user.uid);
        
        if (userData) {
          // Update UI with user data
          if (userName) userName.textContent = `${userData.firstName} ${userData.lastName}`;
          if (userEmail) userEmail.textContent = userData.email;
          if (profileImage) profileImage.src = userData.profileImage || 'assets/default-avatar.png';
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        // Handle error appropriately
      }
    } else {
      // Redirect to login if not authenticated
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
        alert('שגיאה בהתנתקות. אנא נסה שוב.');
      }
    });
  }
}); 