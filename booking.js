//  USER DATA 
const currentUser = localStorage.getItem("currentUser");
const tripKey = `tripList_${currentUser}`;

// 1. Get trip data
const paymentdata = JSON.parse(localStorage.getItem("paymentData"));
console.log(paymentdata);


if (!paymentdata) {
  alert("Booking data missing");
  window.location.href = "trip-plan2.html";
}

// 2. Show details on payment page
document.getElementById("details").innerHTML = `
  <p>📍 Places: <span>${paymentdata.place}</span></p>
  <p>📅 Date: <span>${paymentdata.date || "Not selected"}</span></p>
  <p>👥 People: <span>${paymentdata.people}</span></p>  
  <p>🚗 Vehicle: <span>${paymentdata.vehicle}</span></p>
  <p>💰 Rate: ₹${paymentdata.ratePerKm} / km</p>
  <p>💵 Advance Payment: ₹${paymentdata.advancePayment}</p>
`;

function bookNow() {
  const paymentData = JSON.parse(localStorage.getItem("paymentData"));

  if (!paymentData) {
    alert("Payment data missing");
    return;
  }

  const options = {
    key: "rzp_test_SAvhKcm099f7oc", 
    amount: paymentData.advancePayment * 100, 
    currency: "INR",
    name: "Odisha Tourism",
    description: "Advance Trip Booking",
    handler: function (response) {
      //  Payment success
      saveBooking(response.razorpay_payment_id);
    },
    theme: {
      color: "#0d6efd"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

function saveBooking(paymentId) {
  const paymentData = JSON.parse(localStorage.getItem("paymentData"));

  const booking = {
    bookingId: "OD" + Date.now(),
    place: paymentData.place,
    city: paymentData.city || "Odisha",
    startFrom: paymentData.startFrom,
    vehicle: paymentData.vehicle,
    ratePerKm: paymentData.ratePerKm,
    people: paymentData.people,
    advancePayment: paymentData.advancePayment,
    date: paymentData.date,
    paymentId: paymentId,              
    bookedOn: new Date().toISOString(),
    status: "Confirmed"
  };

  const bookingKey = `bookingHistory_${currentUser}`;
  const history = JSON.parse(localStorage.getItem(bookingKey)) || [];

  history.push(booking);
  localStorage.setItem(bookingKey, JSON.stringify(history));

  //  Clear temporary data
  // Clear temporary data and user-specific trip list
  localStorage.removeItem("paymentData");
  localStorage.removeItem(tripKey);
  localStorage.removeItem("paymentData");

  //  Popup → OK → Redirect
  alert("Payment Successful 🎉 Booking Confirmed!");
  window.location.href = "booking-history.html";
}
