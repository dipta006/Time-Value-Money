const calculateBtn = document.getElementById("calculateBtn");
const calculateBtnTime = document.getElementById("calculateBtn-time");
const resultRate = document.getElementById("result-rate");
const resultTime = document.getElementById("result-time");
const themeToggle = document.getElementById("themeToggle");

// Calculate Rule of 72 by Interest Rate!!
calculateBtn.addEventListener("click", () => {
  const rate = parseFloat(document.getElementById("interestRate").value);

  if (isNaN(rate) || rate <= 0) {
    resultRate.innerText = "Please enter a valid interest rate!";
    resultRate.style.color = "red";
    return;
  }

  const yearsToDouble = (72 / rate).toFixed(2);
  resultRate.innerText = `Your investment will double in approximately ${yearsToDouble} years.`;
  resultRate.style.color = "green";
});

// Calculate Rule of 72 by Time!!
calculateBtnTime.addEventListener("click", () => {
  const time = parseFloat(document.getElementById("time").value);

  if (isNaN(time) || time <= 0) {
    resultTime.innerText = "Please enter a valid time!";
    resultTime.style.color = "red";
    return;
  }

  const rateToDouble = (72 / time).toFixed(2);
  resultTime.innerText = `Your investment will double in approximately ${rateToDouble}% interast`;
  resultTime.style.color = "green";
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.innerText = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

function goHome() {
  setTimeout(() => {
    document.location.href = "../index.html";
  }, 300);
}

// Prevent scrolling from changing the value
const numberInputs = document.querySelectorAll('input[type="number"]');

numberInputs.forEach((input) => {
  input.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent scrolling from changing the value
  });
});
