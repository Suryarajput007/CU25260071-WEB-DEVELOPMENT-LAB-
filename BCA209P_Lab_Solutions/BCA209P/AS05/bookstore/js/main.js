/* ---- Shopping cart helpers (stored in localStorage) ---- */
function getCart() { try { return JSON.parse(localStorage.getItem("cart")) || []; } catch (e) { return []; } }
function saveCart(c) { localStorage.setItem("cart", JSON.stringify(c)); updateCount(); }
function findBook(id) { return books.find(function (b) { return b.id === id; }); }

function addToCart(id) {
  var b = findBook(id);
  if (!b.stock) { alert("Sorry, this book is out of stock."); return; }
  var cart = getCart(), item = cart.find(function (c) { return c.id === id; });
  if (item) item.qty++; else cart.push({ id: id, qty: 1 });
  saveCart(cart);
  alert(b.name + " added to cart!");
}
function updateCount() {
  var n = getCart().reduce(function (s, c) { return s + c.qty; }, 0);
  var el = document.getElementById("cartCount"); if (el) el.textContent = n;
}

/* ---- Catalogue / home rendering ---- */
function bookCard(b) {
  return '<div class="card"><a href="details.html?id=' + b.id + '"><img src="' + b.img + '" alt="' + b.name + '"></a>' +
    '<h4>' + b.name + '</h4><p>' + b.author + '</p><p class="price">Rs. ' + b.price + '</p>' +
    '<button onclick="addToCart(\'' + b.id + '\')">Add to Cart</button></div>';
}
function showFeatured() {
  var el = document.getElementById("featured");
  if (el) el.innerHTML = books.slice(0, 4).map(bookCard).join("");
}
function showCatalogue() {
  var body = document.getElementById("catBody"); if (!body) return;
  var q = document.getElementById("search").value.toLowerCase();
  body.innerHTML = books.filter(function (b) { return b.name.toLowerCase().includes(q) || b.author.toLowerCase().includes(q); })
    .map(function (b) {
      return '<tr><td>' + b.id + '</td><td><img src="' + b.img + '" width="50" alt=""></td>' +
        '<td><a href="details.html?id=' + b.id + '">' + b.name + '</a></td><td>' + b.author + '</td><td>' + b.publisher +
        '</td><td>Rs. ' + b.price + '</td><td><button onclick="addToCart(\'' + b.id + '\')">Add to Cart</button></td></tr>';
    }).join("");
}

/* ---- Book details page: reads ?id=B001 from URL ---- */
function showDetails() {
  var el = document.getElementById("details"); if (!el) return;
  var id = new URLSearchParams(location.search).get("id") || "B001";
  var b = findBook(id) || books[0];
  el.innerHTML = '<img src="' + b.img + '" alt="' + b.name + '" class="big"><div><h2>' + b.name + '</h2>' +
    '<p><b>Author:</b> ' + b.author + '</p><p><b>Publisher:</b> ' + b.publisher + '</p><p><b>Category:</b> ' + b.category + '</p>' +
    '<p><b>Price:</b> Rs. ' + b.price + '</p><p><b>Availability:</b> ' +
    (b.stock ? '<span class="ok">In Stock</span>' : '<span class="no">Out of Stock</span>') + '</p>' +
    '<p><b>Description:</b> ' + b.desc + '</p><button onclick="addToCart(\'' + b.id + '\')">Add to Cart</button></div>';
}

/* ---- Cart page ---- */
function showCart() {
  var body = document.getElementById("cartBody"); if (!body) return;
  var cart = getCart(), total = 0;
  if (cart.length === 0) { body.innerHTML = '<tr><td colspan="6">Your cart is empty.</td></tr>'; document.getElementById("total").textContent = 0; return; }
  body.innerHTML = cart.map(function (c, i) {
    var b = findBook(c.id), sub = b.price * c.qty; total += sub;
    return '<tr><td>' + b.name + '</td><td>Rs. ' + b.price + '</td>' +
      '<td><button onclick="changeQty(' + i + ',-1)">-</button> ' + c.qty + ' <button onclick="changeQty(' + i + ',1)">+</button></td>' +
      '<td>Rs. ' + sub + '</td><td><button onclick="removeItem(' + i + ')">Remove</button></td></tr>';
  }).join("");
  document.getElementById("total").textContent = total;
}
function changeQty(i, d) { var c = getCart(); c[i].qty += d; if (c[i].qty < 1) c.splice(i, 1); saveCart(c); showCart(); }
function removeItem(i) { var c = getCart(); c.splice(i, 1); saveCart(c); showCart(); }
function checkout() {
  if (getCart().length === 0) { alert("Cart is empty!"); return; }
  alert("Order placed successfully. Thank you for shopping!"); saveCart([]); showCart();
}

/* ---- Form validation (register, login, contact) ---- */
function validateRegister() {
  var f = document.getElementById("regForm"), msg = [];
  if (f.fname.value.trim().length < 3) msg.push("Name must be at least 3 characters.");
  if (!/^\S+@\S+\.\S+$/.test(f.email.value)) msg.push("Enter a valid email.");
  if (!/^[6-9][0-9]{9}$/.test(f.mobile.value)) msg.push("Mobile must be 10 digits.");
  if (f.pass.value.length < 6) msg.push("Password must be at least 6 characters.");
  if (f.pass.value !== f.cpass.value) msg.push("Passwords do not match.");
  if (!f.terms.checked) msg.push("Please accept the terms.");
  if (msg.length) { alert(msg.join("\n")); return false; }
  localStorage.setItem("user", JSON.stringify({ email: f.email.value, pass: f.pass.value }));
  alert("Registration successful! Please login."); location.href = "login.html"; return false;
}
function validateLogin() {
  var f = document.getElementById("loginForm"), u = JSON.parse(localStorage.getItem("user") || "null");
  if (!u) { alert("No account found. Please register first."); return false; }
  if (f.email.value === u.email && f.pass.value === u.pass) { alert("Login successful!"); location.href = "index.html"; }
  else alert("Invalid email or password.");
  return false;
}
function validateContact() {
  var f = document.getElementById("contactForm");
  if (!f.cname.value.trim() || !/^\S+@\S+\.\S+$/.test(f.cemail.value) || !f.msg.value.trim()) { alert("Please fill all fields correctly."); return false; }
  alert("Thank you for your feedback!"); f.reset(); return false;
}

window.onload = function () { updateCount(); showFeatured(); showCatalogue(); showDetails(); showCart(); };
