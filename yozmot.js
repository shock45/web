document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("initiativeForm");
  const shortDescription = document.getElementById("shortDescription");
  const charCount = document.getElementById("charCount");
  const imageUpload = document.getElementById("imageUpload");
  const imagePreview = document.getElementById("imagePreview");

  // Character counter for short description
  shortDescription.addEventListener("input", function () {
    charCount.textContent = this.value.length;
  });

  // Image upload preview
  imageUpload.addEventListener("change", function (e) {
    imagePreview.innerHTML = "";
    const files = e.target.files;

    for (let file of files) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.style.maxWidth = "100px";
          img.style.margin = "5px";
          imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    }
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data from correct field IDs
    const formData = {
      name: document.getElementById("initiativeName").value,
      date: document.getElementById("date").value,
      shortDescription: shortDescription.value,
      resources: document.getElementById("resources").value,
      status: document.getElementById("status").value,
      location: document.getElementById("location").value,
      fullName: document.getElementById("fullName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      aboutMe: document.getElementById("aboutMe").value,
      resourceTags: Array.from(
        document.querySelectorAll('input[name="resource"]:checked')
      ).map((cb) => cb.value),
      categories: Array.from(
        document.querySelectorAll('input[name="category"]:checked')
      ).map((cb) => cb.value),
      images: [],
    };

    // Validate required fields
    if (
      !formData.name ||
      !formData.date ||
      !formData.shortDescription ||
      !formData.resources ||
      !formData.status ||
      !formData.location ||
      !formData.fullName ||
      !formData.phone ||
      !formData.email
    ) {
      alert("אנא מלא את כל השדות החובה");
      return;
    }

    const files = imageUpload.files;
    let imagesToProcess = Array.from(files).filter((f) =>
      f.type.startsWith("image/")
    );

    if (imagesToProcess.length > 0) {
      let processed = 0;

      imagesToProcess.forEach((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          formData.images.push(e.target.result);
          processed++;
          if (processed === imagesToProcess.length) {
            saveInitiative(formData);
          }
        };
        reader.readAsDataURL(file);
      });
    } else {
      saveInitiative(formData);
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
