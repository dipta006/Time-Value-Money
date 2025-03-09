// DOM Elements
const clcBtn = document.querySelector("#clcBtn");
const resultFV = document.querySelector(".result");
const toggleMode = document.querySelector("#toggleMode");
const compoundingInput = document.querySelector("#compoundingInput");
const pvInput = document.querySelector("#presentValue");
const rateInput = document.querySelector("#rate");
const timeInput = document.querySelector("#time");
const mValueInput = document.querySelector("#mValue");

// Validate Inputs
function validateInputs(inputs) {
  for (const input of inputs) {
    if (isNaN(input.value) || input.value === "") {
      resultFV.innerText = `Please enter a valid value (Number)!`;
      return false;
    }
  }
  return true;
}

// Calculate Future Value
clcBtn.addEventListener("click", () => {
  let pv = parseFloat(pvInput.value);
  let r = parseFloat(rateInput.value) / 100;
  let t = parseFloat(timeInput.value);

  // Validate Base Inputs
  const baseInputs = [pvInput, rateInput, timeInput];
  if (!validateInputs(baseInputs)) return;

  // Logic for Compounding
  if (toggleMode.checked) {
    let m = parseFloat(mValueInput.value);

    // Validate 'm'
    if (!validateInputs([mValueInput])) return;

    const compoundFullYearRate = Math.pow(1 + r / m, t * m);
    const result = pv * compoundFullYearRate;

    resultFV.innerText = `Your Future Value, FV = Tk.${result.toFixed(2)}`;
  } else {
    const fullYearRate = Math.pow(1 + r, t);
    const result = pv * fullYearRate;

    resultFV.innerText = `Your Future Value, FV = Tk.${result.toFixed(2)}`;
  }
});

// Toggle Compounding Input
toggleMode.addEventListener("change", () => {
  compoundingInput.style.display = toggleMode.checked ? "block" : "none";
});

// Go Home Function
function goHome() {
  setTimeout(() => {
    document.location.href = "../index.html";
  }, 300); // Keep this if delay is intentional
}

// Prevent Scrolling from Changing Input Values
const numberInputs = document.querySelectorAll('input[type="number"]');
numberInputs.forEach((input) => {
  input.addEventListener("wheel", (event) => {
    event.preventDefault();
  });
});
