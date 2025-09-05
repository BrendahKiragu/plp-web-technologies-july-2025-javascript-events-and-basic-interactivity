// ====================
// 🌙 Light/Dark Mode Toggle
// ====================
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ====================
// 🎮 Counter Game Logic
// ====================
let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increase").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
document.getElementById("decrease").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});
document.getElementById("reset").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

// ====================
// ❓ FAQ Toggle Logic
// ====================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ====================
// 📋 Form Validation
// ====================
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("success-message");

// Function to show error messages
function showError(input, message) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = message;
}

// Function to clear error messages
function clearError(input) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = "";
}

// Email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Validate Email
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  // Success Message
  if (isValid) {
    successMessage.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
