function generatePin() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pin = "";
  for (let i = 0; i < 8; i++) {
    pin += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("pin").value = pin;
}

function validateForm() {
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const pin = document.getElementById("pin").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const nameError = document.getElementById("name-error");
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const pinError = document.getElementById("pin-error");
  const passwordError = document.getElementById("password-error");

  // Reset error messages
  nameError.style.display = "none";
  usernameError.style.display = "none";
  emailError.style.display = "none";
  phoneError.style.display = "none";
  pinError.style.display = "none";
  passwordError.style.display = "none";

  // Validation regex
  const nameRegex = /^[A-Za-z\s]{1,20}$/;
  const usernameRegex = /^[a-z]{1,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:\+880|01)[3-9]\d{8}$/;
  const pinRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  let isValid = true;

  // Name validation
  if (!nameRegex.test(name)) {
    nameError.style.display = "block";
    isValid = false;
  }

  // Username validation
  if (!usernameRegex.test(username)) {
    usernameError.style.display = "block";
    isValid = false;
  }

  // Email validation
  if (!emailRegex.test(email)) {
    emailError.style.display = "block";
    isValid = false;
  }

  // Phone validation
  if (!phoneRegex.test(phone)) {
    phoneError.style.display = "block";
    isValid = false;
  }

  // PIN validation
  if (!pinRegex.test(pin)) {
    pinError.style.display = "block";
    isValid = false;
  }

  // Password confirmation
  if (password !== confirmPassword) {
    passwordError.style.display = "block";
    isValid = false;
  }

  return isValid;
}

// Attach the form validation to the submit event
document.getElementById("profileForm").onsubmit = function () {
  return validateForm();
};
