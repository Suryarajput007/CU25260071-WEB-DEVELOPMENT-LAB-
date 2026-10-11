// Interactive feature 1: live clock   Feature 2: image zoom (lightbox)
function tick() { document.getElementById("clock").textContent = new Date().toLocaleString(); }
tick(); setInterval(tick, 1000);
function zoom(img) {
  document.getElementById("big").src = img.src;
  document.getElementById("modal").style.display = "flex";
}
