const tripData = JSON.parse(localStorage.getItem("tripData"));

if (!tripData) {
  alert("Trip data not found");
  window.location.href = "trip-plan2.html";
}

const vehicles = [
  { name: "Sedan", capacity: 4, rate: 15},
  { name: "SUV", capacity: 7, rate: 20 },
  { name: "Tempo Traveller", capacity: 12, rate: 25 },
  { name: "Max Tempo Traveller", capacity: 17, rate: 29 },
  { name: "Mini Bus", capacity: 12, rate: 25 },
  { name: "Bus", capacity: 30, rate: 25 }

];

const container = document.getElementById("vehicleList");

// Fill people count in existing summary element
const peopleCountEl = document.getElementById('peopleCount');
if (peopleCountEl) peopleCountEl.innerText = tripData.people;

/* Vehicle cards */
let eligibleFound = false;

vehicles.forEach(vehicle => {
  if (tripData.people <= vehicle.capacity ) {
    eligibleFound = true;

    const div = document.createElement("div");
    div.className = "vehicle";

    div.innerHTML = `
      <h3>${vehicle.name}</h3>
      <p>Capacity: ${vehicle.capacity} people</p>
      <p>Rate: ₹${vehicle.rate} / km</p>
    `;

    const btn = document.createElement('button');
    btn.className = 'select-btn';
    btn.textContent = 'Select Vehicle';
    btn.addEventListener('click', () => selectVehicle(vehicle.name, vehicle.rate));

    div.appendChild(btn);
    container.appendChild(div);
  }
});

if (!eligibleFound) {
  container.innerHTML = "<p>No suitable vehicles available for this people count.</p>";
}

// details page
function selectVehicle(name, rate) {
  if (!tripData) {
    alert("Trip data missing");
    window.location.href = "trip-plan2.html";
    return;
  }

  // Safely build the place names
  const placeNames = Array.isArray(tripData.places) && tripData.places.length
    ? tripData.places.map(p => p.name).join(", ")
    : (tripData.place || "N/A");

  const paymentPayload = {
    place: placeNames,
    date: tripData.date,
    people: tripData.people,
    startFrom: tripData.startFrom,
    vehicle: name,
    ratePerKm: rate,
    advancePayment: tripData.advancePayment ?? 0
  };

  localStorage.setItem("paymentData", JSON.stringify(paymentPayload));
  window.location.href = "booking.html";
}

 