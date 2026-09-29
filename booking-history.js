// ================= AUTH & USER DATA =================
const currentUser = localStorage.getItem("currentUser");

if (!currentUser || !localStorage.getItem("isLoggedIn")) {
  alert("Please login to access your bookings.");
  window.location.href = "login2.html";
}

// User-specific keys
const tripKey = `tripList_${currentUser}`;
const bookingKey = `bookingHistory_${currentUser}`;

let tripList = JSON.parse(localStorage.getItem(tripKey)) || [];
let history = JSON.parse(localStorage.getItem(bookingKey)) || [];

const container = document.getElementById("historyContainer");

// ================= RENDER BOOKINGS =================
container.innerHTML = "";

if (history.length === 0) {
  container.innerHTML = "<p>No bookings found</p>";
} else {
  history.forEach((b, index) => {
    const div = document.createElement("div");
    div.className = "history-card";

    div.innerHTML = `
      <p><b>Booking ID:</b> ${b.bookingId}</p>
      <p><b>Place:</b> ${b.place}</p>
      <p><b>Vehicle:</b> ${b.vehicle}</p>
      <p><b>Status:</b> ${b.status}</p>

      <button class="download-btn" onclick="downloadInvoice(${index})">
          Download Invoice
      </button>

      <button class="cancel-btn" onclick="cancelBooking(${index})">
        Cancel Booking
      </button>
    `;

    container.appendChild(div);
  });
}

// ================= DOWNLOAD INVOICE =================
function downloadInvoice(index) {
  const b = history[index];

  const invoiceHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Invoice - ${b.bookingId}</title>
<style>
body { font-family: Arial; background: #f4f6f8; padding: 30px; }
.invoice-box { max-width: 900px; margin: auto; background: #fff; padding: 25px; border: 1px solid #ddd; }
.header { display: flex; align-items: center; gap: 15px; }
.invoice-logo { width: 70px; }
.header h1 { margin: 0; }
.sub { color: #666; font-size: 14px; }
hr { margin: 20px 0; }
table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
th, td { border: 1px solid #ccc; padding: 10px; font-size: 14px; }
th { background: #667eea; color: #fff; text-align: left; }
.status { color: green; font-weight: bold; }
.footer { text-align: center; margin-top: 30px; font-size: 14px; color: #555; }
</style>
</head>
<body>
<div class="invoice-box">
  <div class="header">
    <img src="images/invoice.logo.png" class="invoice-logo">
    <div>
      <h1>Odisha Tourism</h1>
      <div class="sub">Travel Booking Invoice</div>
    </div>
  </div>
  <hr>
  <table>
    <tr>
      <td><b>Booking ID</b><br>${b.bookingId}</td>
      <td><b>Travel Date</b><br>${b.date}</td>
      <td><b>Status</b><br><span class="status">${b.status}</span></td>
    </tr>
    <tr>
      <td><b>Transaction ID</b><br>TXN${Date.now()}</td>
      <td><b>Booked On</b><br>${new Date().toLocaleDateString()}</td>
      <td></td>
    </tr>
  </table>
  <table>
    <thead>
      <tr><th>Place</th><th>City</th><th>Advance Payment</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>${b.place}</td>
        <td>${b.city || "Odisha"}</td>
        <td>₹${b.advancePayment}</td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <tr><th>Started From</th><th>Vehicle</th><th>Rate</th><th>People</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>${b.startFrom || "-"}</td>
        <td>${b.vehicle}</td>
        <td>₹${b.ratePerKm} / km</td>
        <td>${b.people}</td>
      </tr>
    </tbody>
  </table>
  <div class="footer">
    Thank you for booking with <b>Odisha Tourism</b><br>Have a safe and happy journey 🙏
  </div>
</div>
</body>
</html>
`;

  const blob = new Blob([invoiceHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Invoice_${b.bookingId}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ================= CANCEL BOOKING =================
function cancelBooking(index) {
  let history = JSON.parse(localStorage.getItem(bookingKey)) || [];
  const booking = history[index];

  if (booking.status === "Cancelled") {
    alert("Booking already cancelled ❌");
    return;
  }

  const today = new Date();
  const travelDate = new Date(booking.date);
  const diffDays = (travelDate - today) / (1000 * 60 * 60 * 24);

  if (diffDays <= 2) {
    alert("Cancellation not allowed within 2 days of travel ❌");
    return;
  }

  booking.status = "Cancelled";
  history[index] = booking;

  localStorage.setItem(bookingKey, JSON.stringify(history));

  alert("Booking cancelled successfully 🌿");
  location.reload();
}

if (history.length === 0) {
  container.innerHTML = "<p>No bookings found</p>";
} else {
  history.forEach((b, index) => {
    const div = document.createElement("div");
    div.className = "history-card";
    div.innerHTML = `
      <p><b>Booking ID:</b> ${b.bookingId}</p>
      <p><b>Place:</b> ${b.place}</p>
      <p><b>Vehicle:</b> ${b.vehicle}</p>
      <p><b>Status:</b> ${b.status}</p>

      <button class="download-btn" onclick="downloadInvoice(${index})">
          Download Invoice
      </button>

      <button class="cancel-btn" onclick="cancelBooking(${index})">
        Cancel Booking
      </button>

    `;
    container.appendChild(div);
  });
}


function downloadInvoice(index) {
  const b = history[index];

  const invoiceHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Invoice - ${b.bookingId}</title>
  <style>
body {
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  padding: 30px;
}

.invoice-box {
  max-width: 900px;
  margin: auto;
  background: #fff;
  padding: 25px;
  border: 1px solid #ddd;
}

.header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.invoice-logo {
  width: 70px;
}

.header h1 {
  margin: 0;
}

.sub {
  color: #666;
  font-size: 14px;
}

hr {
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #1b1a1a;
  padding: 10px;
  font-size: 14px;
}

th {
  background: #e1e4ef;
  color: #151414;
  text-align: left;
}

.status {
  color: green;
  font-weight: bold;
}
  


.footer {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #555;
}
</style>
</head>
<body class="invoice-page">

  <div class="invoice-box">

  <!-- Header -->
  <div class="header">
    <img src="images/817110e8-13d4-4ce3-9e5b-2a49bf0a708a-removebg-preview.png" class="invoice-logo">
    <div>
      <h1>Odisha Tourism</h1>
      <div class="sub">Travel Booking Invoice</div>
    </div>
  </div>

  <hr>

  <!-- Booking Info -->
  <table>
    <tr>
      <td><b>Booking ID</b><br>${b.bookingId}</td>
      <td><b>Travel Date</b><br>${b.date}</td>
      <td><b>Status</b><br><span class="status ${b.status}">${b.status}</span></td>
    </tr>
    <tr>
      <td><b>Transaction ID</b><br>TXN${Date.now()}</td>
      <td><b>Booked On</b><br>${new Date().toLocaleDateString()}</td>
      <td></td>
    </tr>
  </table>

  <!-- Place Info -->
  <table>
    <thead>
      <tr>
        <th>Place</th>
        <th>City</th>
        <th>Advance Payment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${b.place}</td>
        <td>${b.city || "Odisha"}</td>
        <td>₹${b.advancePayment}</td>
      </tr>
    </tbody>
  </table>

  <!-- Vehicle Info -->
  <table>
    <thead>
      <tr>
        <th>Started From</th>
        <th>Vehicle</th>
        <th>Rate</th>
        <th>People</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${b.startFrom || "-"}</td>
        <td>${b.vehicle}</td>
        <td>₹${b.ratePerKm} / km</td>
        <td>${b.people}</td>
      </tr>
    </tbody>
  </table>

  <div class="footer">
    Thank you for booking with <b>Odisha Tourism</b><br>
    Have a safe and happy journey 🙏
  </div>

</div>


</body>
</html>
`;
  // ✅ CREATE DOWNLOAD
  const blob = new Blob([invoiceHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `Invoice_${b.bookingId}.html`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


function cancelBooking(index) {
  const bookingKey = `bookingHistory_${currentUser}`;
  const history = JSON.parse(localStorage.getItem(bookingKey)) || [];
  const booking = history[index];

  if (booking.status === "Cancelled") {
    alert("Booking already cancelled ❌");
    return;
  }

  const today = new Date();
  const travelDate = new Date(booking.date);
  const diffDays = (travelDate - today) / (1000 * 60 * 60 * 24);

  if (diffDays <= 2) {
    alert("Cancellation not allowed within 2 days of travel ❌");
    return;
  }

  booking.status = "Cancelled";
  history[index] = booking;

  localStorage.setItem(bookingKey, JSON.stringify(history));

  alert("Thank you for visiting Odisha 🌿");
  location.reload();
}
