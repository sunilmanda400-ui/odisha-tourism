// ================= GET ELEMENTS =================
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const title = document.getElementById("title");
const formCard = document.getElementById("formCard");

// ================= SWITCH FORMS =================
function openRegister() {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
  title.innerText = "Create Account";
  animateCard();
}

function openLogin() {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  title.innerText = "Login";
  animateCard();
}

// ================= CARD ANIMATION =================
function animateCard() {
  formCard.style.animation = "none";
  formCard.offsetHeight;
  formCard.style.animation = "openBook 0.9s ease";
}

// ================= KONARK ROTATION =================
const konark = document.getElementById("konark");
let angle = 0;

setInterval(() => {
  angle += 0.4;
  konark.style.transform = `rotate(${angle}deg)`;
}, 30);

// ================= LOGOUT FUNCTION =================
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("loggedInUser");

  alert("Logged out successfully");
  window.location.href = "login2.html";
}

// ================= LOGIN =================
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginForm.querySelector("input[type='email']").value.trim();
  const password = loginForm.querySelector("input[type='password']").value.trim();

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const storedUser = users.find(
    user => user.email === email && user.password === password
  );

  if (!storedUser) {
    alert("Invalid email or password");
    return;
  }

  // ✅ LOGIN SUCCESS
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", storedUser.email);
  localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

  // ✅ INIT USER-SPECIFIC STORAGE
  const userKey = storedUser.email;

  if (!localStorage.getItem(`tripList_${userKey}`)) {
    localStorage.setItem(`tripList_${userKey}`, JSON.stringify([]));
  }

  if (!localStorage.getItem(`bookingHistory_${userKey}`)) {
    localStorage.setItem(`bookingHistory_${userKey}`, JSON.stringify([]));
  }

  alert("Login successful!");
  window.location.href = "loginpage.html";
});

// ================= REGISTER =================
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = registerForm.querySelector("input[type='text']").value.trim();
  const email = registerForm.querySelector("input[type='email']").value.trim();
  const password = registerForm.querySelector("input[type='password']").value.trim();

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(u => u.email === email)) {
    alert("User already exists. Please login.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  openLogin();
});
