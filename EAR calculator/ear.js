const clcBtn = document.querySelector("#calculateEAR");
const resultEAR = document.querySelector("#result");

clcBtn.addEventListener("click", () => {
  let r = parseFloat(document.querySelector("#nominalRate").value) / 100;

  let m = parseInt(document.querySelector("#compoundingPeriods").value);

  if (isNaN(r) || isNaN(m) || r < 0) {
    resultEAR.innerText = "Please enter a valid nominal rate!";
    resultEAR.style.color = "red";
    return;
  }

  let EAR = Math.pow(1 + r / m, m) - 1;
  EAR = (EAR * 100).toFixed(2);

  resultEAR.innerText = `Effective Annual Rate (EAR): ${EAR}%`;
});

//

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
