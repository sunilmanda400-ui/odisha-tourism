# 🌴 Odisha Tourism

A tourism and trip-planning web application designed to help users explore popular tourist destinations in Odisha, view destination details, plan trips, and manage their bookings.

## 📌 Project Overview

**Odisha Tourism** is a web application that provides an interactive platform for exploring tourist destinations across Odisha.

The application allows users to:

* Explore tourist destinations
* Browse destinations by category
* View destination details
* Add places to a personalized trip
* Plan a trip
* Select vehicles for travel
* Manage booking information
* View booking history
* Generate/view invoice information
* Use login pages for user interaction

The project is currently implemented using frontend web technologies and client-side storage. Backend integration with **Java, Spring Boot, and PostgreSQL** can be added as a future enhancement.

---

## ✨ Features

### 🏛️ Tourist Destinations

* Explore popular tourist places in Odisha
* Destination details with images and information
* Categorization of tourist destinations
* Temple
* Beach
* Nature
* Wildlife
* Hill Station

### 🧳 Trip Planning

* Add destinations to a trip
* Manage selected destinations
* Create a personalized travel plan
* View trip-related information

### 🚗 Vehicle Selection

* Vehicle selection interface
* Travel-related information
* Distance-based travel information

### 🎫 Booking Management

* Booking page
* Booking information
* Booking history
* Invoice interface

### 🔐 User Interface

* Login pages
* Navigation bar
* Responsive layouts
* Interactive buttons and forms

### 💾 Client-Side Data Management

The application uses **Browser LocalStorage** to maintain selected trip, booking, payment and other client-side information.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* LocalStorage

### Tools

* Visual Studio Code
* Git
* GitHub

---

## 📂 Project Structure

```text
Odisha-Tourism/
│
├── images/
│   ├── cardimages/
│   └── ...
│
├── about.html
├── about.css
│
├── add-to-trip.html
├── add-to-trip.css
├── add-to-trip.js
│
├── booking.html
├── booking.css
├── booking.js
│
├── booking-history.html
├── booking-history.css
├── booking-history.js
│
├── contact.html
├── contact.css
├── contact.js
│
├── food.html
├── food.css
├── food.js
│
├── loginpage.html
├── loginpage.css
├── loginpage.js
│
├── navbar.html
├── navbar.css
├── navbar.js
│
├── places-details.html
├── places-details.css
├── place-details.js
│
├── touristplaces.html
├── tourist-places.css
├── touristplaces.js
│
├── trip-plan2.html
├── trip-plan2.css
├── trip-plan2.js
│
├── vehicle-selection.html
├── vehicle-selection.css
├── vehicle-selection.js
│
├── placesdata.js
├── distance-data.js
├── invoice.css
│
└── README.md
```

> The exact file structure may change as the project is developed further.

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/odisha-tourism.git
```

### 2. Open the project

Open the downloaded project folder in **Visual Studio Code**.

### 3. Run the application

Open the main HTML page in your browser.

For a better development experience, you can use the **Live Server** extension in VS Code.

### 4. Explore the application

Use the navigation menu to explore destinations, add places to a trip, plan your journey, and view booking-related pages.

---

## 🔄 Application Flow

```text
Home
  ↓
Tourist Places
  ↓
Select Destination
  ↓
View Place Details
  ↓
Add to Trip
  ↓
Trip Planning
  ↓
Vehicle Selection
  ↓
Booking
  ↓
Payment / Invoice
  ↓
Booking History
```

---

## 💾 Data Management

The current version uses **LocalStorage** for client-side data persistence.

Examples of information handled on the client side include:

* Selected destinations
* Trip information
* Payment information
* Booking information
* Booking history

This allows the application to maintain user-related data within the browser without requiring a backend database.

---

## 🎯 Future Enhancements

The project can be extended into a complete full-stack tourism platform by adding:

* Java Spring Boot backend
* REST APIs
* Spring Data JPA
* PostgreSQL database
* User authentication and authorization
* Secure payment gateway integration
* Admin dashboard
* Destination management system
* Real-time booking management
* Cloud deployment
* Google Maps/API integration

### Planned Architecture

```text
React / Web Frontend
        ↓
Spring Boot REST API
        ↓
Service Layer
        ↓
Spring Data JPA
        ↓
PostgreSQL
```

---

## 📸 Screenshots

Screenshots of the application can be added here.

Example:

```text
### Home Page

![Home Page](screenshots/home.png)

### Tourist Places

![Tourist Places](screenshots/tourist-places.png)

### Trip Planning

![Trip Planning](screenshots/trip-planning.png)

### Booking History

![Booking History](screenshots/booking-history.png)
```

---

## 📚 Learning Outcomes

Through this project, I practiced:

* HTML page development
* CSS styling and responsive layouts
* JavaScript programming
* DOM manipulation
* Event handling
* LocalStorage
* Form handling
* Client-side data management
* Multi-page web application development
* Git and GitHub version control

---

## 👨‍💻 Author

**Sunil Manda**

B.Tech – Computer Science

---

## 📄 License

This project is created for educational and portfolio purposes.
