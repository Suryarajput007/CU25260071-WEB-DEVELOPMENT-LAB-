// Interactive menu filter: show only veg / non-veg items
function filter(type) {
  document.querySelectorAll(".item").forEach(function (el) {
    el.style.display = (type === "all" || el.classList.contains(type)) ? "block" : "none";
  });
}
