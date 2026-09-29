// GET PLACE ID
const placeId = Number(localStorage.getItem("placeId"));

// FIND PLACE
const place = touristPlaces.find(p => p.id === placeId);

if (!place) {
  alert("Place not found");
}

// SET DATA
document.getElementById("placeTitle").innerText = place.name;
document.getElementById("placeLocation").innerText =
  `${place.city}, ${place.district}`;

document.getElementById("placeImage").src = place.image;
document.getElementById("placeDescription").innerText = place.description;


document.getElementById("placeCity").innerText = place.city;
document.getElementById("placeDistrict").innerText = place.district;
document.getElementById("placeBestTime").innerText = place.bestTime;
document.getElementById("placeFee").innerText = place.entryFee;

//  WIKI
document.getElementById("wikiBtn").href =
  `https://en.wikipedia.org/wiki/${place.name.replaceAll(" ", "_")}`;

// ADD TO TRIP
function addToTrip() {
  const currentUser = localStorage.getItem("currentUser");
  const tripKey = `tripList_${currentUser}`;
  let tripList = JSON.parse(localStorage.getItem(tripKey)) || [];

  if (tripList.some(p => p.id === place.id)) {
    alert("This place is already added to your trip!");
    return;
  }

  tripList.push(place);
  localStorage.setItem(tripKey, JSON.stringify(tripList));

  alert("Place added to trip successfully");
}
