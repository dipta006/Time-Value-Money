const clcBtn = document.querySelector("#clcBtn");
const resultPV = document.querySelector(".result");
const toggleMode = document.querySelector("#toggleMode");

const fvInput = document.querySelector("#futureValue");
const rateInput = document.querySelector("#rate");
const timeInput = document.querySelector("#time");
const mInput = document.querySelector("#mValue");

//Input validation
function validateInputs(inputs) {
  for (const input of inputs) {
    if (isNaN(input.value) || input.value === "") {
      resultPV.innerText = `Please enter a valid value (Number)!`;
      return false;
    }
  }
  return true;
}

//Calculation of Present Value
clcBtn.addEventListener("click", () => {
  let fv = parseFloat(fvInput.value);
  let r = parseFloat(rateInput.value) / 100;
  let n = parseFloat(timeInput.value);

  //After clicking the clcBtn we have to validate our inputs for calculating PV.
  const baseInputs = [fvInput, rateInput, timeInput];
  if (!validateInputs(baseInputs)) return; //this IF condition need True for satisfaction. That means this IF condition will satisfied when the function(validateInputes) returns false!

  //Logic for Compounding
  if (toggleMode.checked) {
    let m = parseFloat(mInput.value);

    //Validation check for mInput
    if (!validateInputs([mInput])) return;

    const compoundFullYearRate = Math.pow(1 + r / m, n * m);
    const result = fv / compoundFullYearRate;

    resultPV.innerText = `Your Present Value, PV = Tk.${result.toFixed(2)}`;
  } else {
    const FullYearRate = Math.pow(1 + r, n);
    const result = fv / FullYearRate;

    resultPV.innerText = `Your Present Value, PV = Tk.${result.toFixed(2)}`;
  }
});

//Toggle Compounding Input
const compoundingInput = document.querySelector("#compoundingInput")
toggleMode.addEventListener("change", () => {
  compoundingInput.style.display = toggleMode.checked ? "block" : "none";
})

//goHome and Input scrolling problem..!
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
