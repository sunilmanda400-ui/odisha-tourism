


const placesContainer = document.getElementById("placesContainer");

// Load trip list (per-user)
const currentUser = localStorage.getItem("currentUser");
const tripKey = `tripList_${currentUser}`;
let tripList = JSON.parse(localStorage.getItem(tripKey)) || [];

function saveTrip() {
  localStorage.setItem(tripKey, JSON.stringify(tripList));
}

// Categories
const categories = ["Temple", "Beach", "Nature", "Wildlife", "Hill Station","Tribal Heritage"];

// View details function
function viewDetails(id) {
  localStorage.setItem("placeId", id);
  window.location.href = "places-details.html";
}

// Loop categories
categories.forEach(category => { 
  // Category heading
  const heading = document.createElement("h2");
  heading.className = "category-heading";
  heading.innerText = category + "s";
  placesContainer.appendChild(heading);

  // Grid
  const grid = document.createElement("div");
  grid.className = "places-grid";

  // Filter places
  touristPlaces
    .filter(place => place.category === category)
    .forEach(place => {

      const added = tripList.some(p => p.id === place.id);

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p class="description">${place.description}</p>

        <div class="btn-group">
          <button class="details-btn">View Details</button>
          <button class="trip-btn ${added ? "added" : ""}">
            ${added ? "Added to Trip" : "Add to Trip"}
          </button>
        </div>
      `;

      // View Details 
      card.querySelector(".details-btn").onclick = () => {
        viewDetails(place.id);
      };

      // Add to Trip
      card.querySelector(".trip-btn").onclick = () => {
        if (!tripList.some(p => p.id === place.id)) {
          tripList.push(place);
          saveTrip();
          card.querySelector(".trip-btn").innerText = "Added to Trip";
          card.querySelector(".trip-btn").classList.add("added");
        }
      };
      
      grid.appendChild(card);
    });

  placesContainer.appendChild(grid);
});
