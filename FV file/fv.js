const clcBtn = document.querySelector("#clcBtn");
const resultFV = document.querySelector(".result");
const toggleMode = document.querySelector("#toggleMode");
const compoundingInput = document.querySelector("#compoundingInput");


clcBtn.addEventListener("click", () => {
  let pv = parseFloat(document.querySelector("#presentValue").value);
  let r = parseFloat(document.querySelector("#rate").value) / 100;
  let t = parseFloat(document.querySelector("#time").value);

  if (isNaN(pv) || isNaN(r) || isNaN(t)) {
    resultFV.innerText = `Please enter a valid value (Number)!`;
    return;
  }

  if (toggleMode.checked) {
    let m = parseFloat(document.querySelector("#mValue").value);

    if (isNaN(m)) {
      resultFV.innerText = `Please enter a valid value (Number)!`;
      return;
    }

    const compaundFullYearRate = Math.pow(1 + r / m, t * m);
    const result = pv * compaundFullYearRate;

    resultFV.innerText = `Your Future Value, FV = Tk.${result.toFixed(2)}`;
  } else {
    const fullYearRate = Math.pow(1 + r, t);
    const result = pv * fullYearRate;

    resultFV.innerText = `Your Future Value, FV = Tk.${result.toFixed(2)}`;
  }
});

toggleMode.addEventListener("change", () => {
  compoundingInput.style.display = toggleMode.checked ? "block" : "none";
})

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
