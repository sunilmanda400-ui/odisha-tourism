// LOGIN CHECK
if (!localStorage.getItem("isLoggedIn")) {
  alert("Please login to access your trip plan.");
  window.location.href = "login2.html";
}


const odishaCities = [ "Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Berhampur", "Puri", "Balasore", "Baripada", "Bhadrak", "Jharsuguda", "Angul", "Dhenkanal", "Keonjhar", "Koraput","Rayagada", "Jeypore", "Sunabeda", "Bargarh", "Bolangir", "Titlagarh", "Nuapada", "Paralakhemundi", "Phulbani", "Nayagarh", "Kendrapara", "Jagatsinghpur", "Jajpur", "Sonepur", "Talcher","Paradeep"
];

const citySelect = document.getElementById("start");

odishaCities.forEach(city => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  citySelect.appendChild(option);
});


// LOAD TRIP LIST (per-user)
const currentUser = localStorage.getItem("currentUser");
const tripKey = `tripList_${currentUser}`;
const tripList = JSON.parse(localStorage.getItem(tripKey)) || [];

const container = document.getElementById("selectedPlaces");

if (tripList.length === 0) {
  alert("No places selected");
  window.location.href = "touristplaces.html";
} else {
  // Render selected places 
  container.innerHTML = tripList
    .map(p => `
      <li class="place-item">
        <span>${p.name}</span>
      </li>
    `)
    .join("");

  // Set advance payment
   const advInput = document.getElementById("advancePayment");
   advInput.value = 4000;
}

// CONTINUE TRIP
function continueTrip() {
  const start = document.getElementById("start").value;
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;
  const advancePayment = document.getElementById("advancePayment") .value;

  if (!start || !date || !people) {
    alert("Please fill all details");
    return;
  }

  const tripData = {
    place: tripList.map(p => p.name).join(", ") || "N/A",
    startFrom: start,
    date,
    people: Number(people),
    advancePayment: Number(advancePayment) 
  };

  localStorage.setItem("tripData", JSON.stringify(tripData));
  window.location.href = "vehicle-selection.html";
}
