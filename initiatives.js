document.addEventListener("DOMContentLoaded", function () {
  const initiativesGrid = document.getElementById("initiativesGrid");

  // Load initiatives from localStorage
  const initiatives = JSON.parse(localStorage.getItem("initiatives") || "[]");

  // Display initiatives
  initiatives.forEach((initiative) => {
    const card = createInitiativeCard(initiative);
    initiativesGrid.appendChild(card);
  });
});

function createInitiativeCard(initiative) {
  const card = document.createElement("div");
  card.className = "initiative-card";

  // Create card content
  const content = `
        ${
          initiative.images && initiative.images.length > 0
            ? `<img src="${initiative.images[0]}" alt="${initiative.initiativeName}" class="initiative-image">`
            : `<div class="initiative-image" style="background-color: #f0f0f0;"></div>`
        }
        <div class="initiative-content">
            <h3 class="initiative-title">${initiative.initiativeName}</h3>
            <p class="initiative-description">${initiative.shortDescription}</p>
            
            <div class="initiative-details">
                ${initiative.categories
                  .map(
                    (category) =>
                      `<span class="initiative-tag">${category}</span>`
                  )
                  .join("")}
            </div>
            
            <div class="initiative-details">
                ${initiative.resourceTags
                  .map((tag) => `<span class="initiative-tag">${tag}</span>`)
                  .join("")}
            </div>
            
            <span class="initiative-status status-${initiative.status.toLowerCase()}">
                ${getStatusText(initiative.status)}
            </span>
            
            <div class="initiative-meta">
                <span>${initiative.location}</span>
                <span>${formatDate(initiative.date)}</span>
            </div>
        </div>
    `;

  card.innerHTML = content;
  return card;
}

function getStatusText(status) {
  const statusMap = {
    idea: "רעיון",
    active: "פעיל",
    planning: "בתכנון",
    completed: "הושלם",
  };
  return statusMap[status.toLowerCase()] || status;
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("he-IL", options);
}
