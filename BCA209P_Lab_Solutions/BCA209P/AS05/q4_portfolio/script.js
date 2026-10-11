// Typing effect for the name
var text = "Your Name", i = 0;
function type() { if (i <= text.length) { document.getElementById("typed").textContent = text.slice(0, i++); setTimeout(type, 150); } }
type();
// Contact form validation
function send() {
  var n = document.getElementById("cn").value.trim(), m = document.getElementById("cm").value.trim();
  if (!n || !m) { alert("Please fill in name and message."); return false; }
  alert("Thanks " + n + "! Your message was sent."); return false;
}
