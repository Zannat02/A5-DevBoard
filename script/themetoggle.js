const colors = ["#F4F7FF", "#DFF6FF", "#FCECDD", "#FFF3C7", "#E2F0CB","#EAFFF3","#DBDACA"];
let currentIndex = 0;
const body = document.body;
 

// Function to apply color
function applyBackground(color) {
  body.style.backgroundColor = color;
  localStorage.setItem("bgColor", color);
}

// Load saved color on page load
const saved = localStorage.getItem("bgColor");
if (saved && colors.includes(saved)) {
  currentIndex = colors.indexOf(saved);
  applyBackground(saved);
}

// Click event to cycle background color
document.getElementById("themeToggle").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % colors.length;
  applyBackground(colors[currentIndex]);
});

  