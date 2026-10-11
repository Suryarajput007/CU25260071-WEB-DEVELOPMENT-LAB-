// Greeting based on time of day
var h = new Date().getHours();
document.getElementById("greet").textContent =
  (h < 12 ? "Good Morning" : h < 17 ? "Good Afternoon" : "Good Evening") + "! Welcome to my profile.";
// Dark mode toggle
function toggleTheme() { document.body.classList.toggle("dark"); }
