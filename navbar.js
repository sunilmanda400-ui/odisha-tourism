const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ================= LOGOUT FUNCTION =================
function logout() {
  // end session only
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("loggedInUser");

  alert("Logged out successfully!");
  window.location.href = "login.html";
}
