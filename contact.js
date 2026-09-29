document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(), // 👈 receiver
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  if (!params.name || !params.email || !params.subject || !params.message) {
    alert("Please fill all fields");
    return;
  }

  emailjs.send(
    "sunilmanda400",     // Service ID
    "template_3vevedq",    // Template ID
    params
  ).then(
    () => {
      alert("✅ Response sent to your email!");
      document.getElementById("contactForm").reset();
    },
    (error) => {
      console.error(error);
      alert("❌ Failed to send email");
    }
  );
});
