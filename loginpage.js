/* ===== HERO BACKGROUND SLIDESHOW ===== */
const hero = document.getElementById("hero");

const bgImages = [
  "images/anik-das-MGCk4knIQFk-unsplash.jpg",
  "images/background2.jpg",
  "images/background3.webp",
  "images/background4.webp",
  "images/Rath-Yatra-Festival-3.jpg"
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${bgImages[index]}')`;
  index = (index + 1) % bgImages.length;
}

changeBackground();
setInterval(changeBackground, 5000);

/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ================= LOGOUT FUNCTION =================
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("loggedInUser");

  alert("Logged out successfully");
  window.location.href = "login2.html";
}


