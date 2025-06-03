document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("initiativeForm");
  const shortDescription = document.getElementById("shortDescription");
  const aboutMe = document.getElementById("aboutMe");
  const charCount = document.getElementById("charCount");
  const aboutMeCharCount = document.getElementById("aboutMeCharCount");
  const imageUpload = document.getElementById("imageUpload");
  const imagePreview = document.getElementById("imagePreview");
  const submitBtn = document.querySelector(".submit-btn");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const progressSteps = document.querySelectorAll(".progress-step");
  const formSteps = document.querySelectorAll(".form-step");

  let currentStep = 1;

  // Character counter for short description
  shortDescription.addEventListener("input", function () {
    const remaining = 200 - this.value.length;
    charCount.textContent = this.value.length;
    charCount.style.color = remaining < 50 ? "#e53935" : "#666";
  });

  // Character counter for about me
  aboutMe.addEventListener("input", function () {
    const remaining = 500 - this.value.length;
    aboutMeCharCount.textContent = this.value.length;
    aboutMeCharCount.style.color = remaining < 100 ? "#e53935" : "#666";
  });

  // Image upload preview
  imageUpload.addEventListener("change", function (e) {
    imagePreview.innerHTML = "";
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.style.maxWidth = "200px";
          img.style.maxHeight = "200px";
          img.style.objectFit = "cover";
          img.style.margin = "5px";
          img.style.borderRadius = "4px";
          imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  });

  // Navigation between steps
  function updateStep(step) {
    formSteps.forEach((formStep) => {
      formStep.classList.remove("active");
    });
    progressSteps.forEach((progressStep) => {
      progressStep.classList.remove("active");
    });

    document.querySelector(`.form-step[data-step="${step}"]`).classList.add("active");
    document.querySelector(`.progress-step[data-step="${step}"]`).classList.add("active");

    // Update navigation buttons
    prevBtn.style.display = step > 1 ? "block" : "none";
    nextBtn.style.display = step < 3 ? "block" : "none";
    submitBtn.style.display = step === 3 ? "block" : "none";

    // Mark previous steps as completed
    for (let i = 1; i < step; i++) {
      document.querySelector(`.progress-step[data-step="${i}"]`).classList.add("completed");
    }
  }

  // Helper function to show error message
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorDiv = formGroup.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    if (!formGroup.querySelector('.error-message')) {
      formGroup.appendChild(errorDiv);
    }
    input.classList.add('error');
  }

  // Helper function to clear error message
  function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
    input.classList.remove('error');
  }

  // Validate current step
  function validateStep(step) {
    let isValid = true;
    const currentStep = formSteps[step - 1];
    const inputs = currentStep.querySelectorAll('input[required], textarea[required], select[required]');
    const checkboxes = currentStep.querySelectorAll('input[type="checkbox"][name="category"]');

    // Clear all previous errors in this step
    currentStep.querySelectorAll('.error-message').forEach(error => error.remove());
    currentStep.querySelectorAll('.error').forEach(input => input.classList.remove('error'));

    // Validate required inputs
    inputs.forEach(input => {
      if (!input.value.trim()) {
        let errorMessage = 'שדה זה הוא שדה חובה';
        
        // Custom error messages based on field type and ID
        switch(input.id) {
          case 'initiativeName':
            errorMessage = 'יש להזין את שם היוזמה';
            break;
          case 'date':
            errorMessage = 'יש לבחור תאריך התחלה';
            break;
          case 'shortDescription':
            errorMessage = 'יש להזין תיאור קצר של היוזמה';
            break;
          case 'resources':
            errorMessage = 'יש להזין את המשאבים הנדרשים';
            break;
          case 'status':
            errorMessage = 'יש לבחור סטטוס לפרויקט';
            break;
          case 'location':
            errorMessage = 'יש לבחור מיקום';
            break;
          case 'fullName':
            errorMessage = 'יש להזין שם מלא';
            break;
          case 'phone':
            errorMessage = 'יש להזין מספר טלפון';
            break;
          case 'email':
            errorMessage = 'יש להזין כתובת אימייל';
            break;
        }
        
        showError(input, errorMessage);
        isValid = false;
      } else {
        // Additional validation for initiative name
        if (input.id === 'initiativeName' && input.value.trim().length < 2) {
          showError(input, 'שם היוזמה חייב להכיל לפחות 2 תווים');
          isValid = false;
        } else {
          clearError(input);
        }
      }
    });

    // Validate email format if email field exists
    const emailInput = currentStep.querySelector('input[type="email"]');
    if (emailInput && emailInput.value.trim()) {
      if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'כתובת האימייל שהוזנה אינה תקינה');
        isValid = false;
      }
    }

    // Validate phone format if phone field exists
    const phoneInput = currentStep.querySelector('input[type="tel"]');
    if (phoneInput && phoneInput.value.trim()) {
      if (!isValidPhone(phoneInput.value)) {
        showError(phoneInput, 'מספר הטלפון שהוזן אינו תקין');
        isValid = false;
      }
    }

    // Validate categories in step 2
    if (step === 2) {
      const checkedCategories = Array.from(checkboxes).filter(cb => cb.checked);
      if (checkedCategories.length === 0) {
        const categoryGroup = checkboxes[0].closest('.form-group');
        const errorDiv = categoryGroup.querySelector('.error-message') || document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = 'יש לבחור לפחות קטגוריה אחת';
        if (!categoryGroup.querySelector('.error-message')) {
          categoryGroup.appendChild(errorDiv);
        }
        isValid = false;
      } else {
        const errorDiv = checkboxes[0].closest('.form-group').querySelector('.error-message');
        if (errorDiv) {
          errorDiv.remove();
        }
      }
    }

    // Validate short description length
    const shortDescInput = currentStep.querySelector('#shortDescription');
    if (shortDescInput && shortDescInput.value.trim()) {
      if (shortDescInput.value.length < 10) {
        showError(shortDescInput, 'התיאור הקצר חייב להכיל לפחות 10 תווים');
        isValid = false;
      }
    }

    // Validate about me length if it exists and has content
    const aboutMeInput = currentStep.querySelector('#aboutMe');
    if (aboutMeInput && aboutMeInput.value.trim()) {
      if (aboutMeInput.value.length < 20) {
        showError(aboutMeInput, 'התיאור חייב להכיל לפחות 20 תווים');
        isValid = false;
      }
    }

    return isValid;
  }

  // Next button click
  nextBtn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      currentStep++;
      updateStep(currentStep);
    }
  });

  // Previous button click
  prevBtn.addEventListener("click", () => {
    currentStep--;
    updateStep(currentStep);
  });

  // Progress step click
  progressSteps.forEach((step) => {
    step.addEventListener("click", () => {
      const stepNumber = parseInt(step.dataset.step);
      if (stepNumber < currentStep) {
        currentStep = stepNumber;
        updateStep(currentStep);
      }
    });
  });

  // Form submission
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    
    // Remove all existing error messages
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document.querySelectorAll(".form-group.error").forEach((el) => el.classList.remove("error"));

    if (validateStep(currentStep)) {
      // Show loading state
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;

      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        imagePreview.innerHTML = "";
        charCount.textContent = "0";
        aboutMeCharCount.textContent = "0";
        currentStep = 1;
        updateStep(currentStep);
      } catch (error) {
        showError(submitBtn, "אירעה שגיאה בשליחת הטופס. אנא נסה שוב.");
      } finally {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
      }
    }
  });

  // Cancel button
  const cancelBtn = document.querySelector(".cancel-btn");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      if (confirm("האם אתה בטוח שברצונך לבטל?")) {
        window.location.href = "main.html";
      }
    });
  }

  // Helper functions
  function showSuccessMessage() {
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.innerHTML = `
      <div style="text-align: center; padding: 2rem; background: #e8f5e9; border-radius: 8px; margin: 1rem 0;">
        <h3 style="color: #2e7d32; margin-bottom: 1rem;">היוזמה נשלחה בהצלחה!</h3>
        <p style="color: #1b5e20;">תודה על תרומתך לקהילה. נחזור אליך בהקדם.</p>
      </div>
    `;
    
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^[\d\s-+()]{9,15}$/.test(phone);
  }

  // Add smooth scrolling to form sections
  document.querySelectorAll("h2").forEach((heading) => {
    heading.style.cursor = "pointer";
    heading.addEventListener("click", () => {
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Add hover effect to form sections
  document.querySelectorAll(".form-section").forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.style.transform = "translateY(-2px)";
    });
    
    section.addEventListener("mouseleave", () => {
      section.style.transform = "translateY(0)";
    });
  });

  // Initialize first step
  updateStep(1);
});

function saveInitiative(data) {
  const initiatives = JSON.parse(localStorage.getItem("initiatives") || "[]");
  initiatives.push({
    ...data,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem("initiatives", JSON.stringify(initiatives));
  alert("היוזמה פורסמה בהצלחה!");
  window.location.href = "initiatives.html";
}
