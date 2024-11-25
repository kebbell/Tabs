// Select all tabs and panels
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Function to handle tab click
function handleTabClick(event) {
  const clickedTab = event.target;
  const targetPanelId = clickedTab.dataset.panel;

  // Remove active class from all tabs and panels
  tabs.forEach(tab => tab.classList.remove("active"));
  panels.forEach(panel => panel.classList.remove("active"));

  // Add active class to the clicked tab and its corresponding panel
  clickedTab.classList.add("active");
  document.getElementById(targetPanelId).classList.add("active");
}

// Attach click event listeners to all tabs
tabs.forEach(tab => tab.addEventListener("click", handleTabClick));
