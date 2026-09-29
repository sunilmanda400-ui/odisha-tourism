// ===== AUTH + USER DATA (TOP OF FILE) =====
const isLoggedIn = localStorage.getItem("isLoggedIn");
const currentUser = localStorage.getItem("currentUser");

// LOGIN CHECK
if (!isLoggedIn || !currentUser) {
  alert("Please login to access your trip plan.");
  window.location.href = "login2.html";
}

// current user data
const tripKey = `tripList_${currentUser}`;

// GET USER TRIP DATA
let tripList = JSON.parse(localStorage.getItem(tripKey)) || [];

const container = document.getElementById("tripContainer");

//  CLEAR OLD UI
container.innerHTML = "";

//  RENDER TRIP 
if (tripList.length === 0) {
  container.innerHTML = "<p>No places added yet.</p>";
}

tripList.forEach((place, index) => {
  const div = document.createElement("div");
  div.className = "trip-card";

  div.innerHTML = `
    <img src="${place.image}" alt="${place.name}" class="trip-card-image">

    <div class="trip-card-content">
      <h3>${place.name}</h3>
      <p>${place.description}</p>

      <button class="remove-btn" onclick="removePlace(${index})">
        Remove
      </button>
    </div>
  `;

  container.appendChild(div);
});

//  REMOVE PLACE
function removePlace(index) {
  tripList.splice(index, 1);
  localStorage.setItem(tripKey, JSON.stringify(tripList));
  location.reload();
}

//  CLEAR ALL 
function clearTrip() {
  if (confirm("Are you sure you want to clear the entire trip?")) {
    localStorage.removeItem(tripKey);
    location.reload();
  }
}

//  PROCEED 
function proceed() {
  if (tripList.length === 0) {
    alert("Please add at least one place to continue.");
    window.location.href = "touristplaces.html";
    return;
  }

  window.location.href = "trip-plan2.html";
}
