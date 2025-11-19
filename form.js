document.getElementById("daycareForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let parentName = document.getElementById("parentName").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let childName = document.getElementById("childName").value.trim();
  let childAge = document.getElementById("childAge").value.trim();
  let timing = document.getElementById("timing").value;
  let msg = document.getElementById("msg");

  if (!parentName || !phone || !email || !childName || !childAge || !timing) {
    msg.style.color = "red";
    msg.innerText = "Please fill all required fields.";
    return;
  }

  // Validate phone number
  if (!/^[0-9]{10}$/.test(phone)) {
    msg.style.color = "red";
    msg.innerText = "Enter a valid 10-digit phone number.";
    return;
  }

  // Validate email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    msg.style.color = "red";
    msg.innerText = "Enter a valid email address.";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Enquiry submitted successfully!";

  document.getElementById("daycareForm").reset();
});
