const clcBtn = document.querySelector("#clcBtn");
const resultPV = document.querySelector(".result");

clcBtn.addEventListener("click", () => {
  let fv = parseFloat(document.querySelector("#futureValue").value);
  let r = parseFloat(document.querySelector("#rate").value) / 100;
  let t = parseFloat(document.querySelector("#time").value);

  if (isNaN(fv) || isNaN(r) || isNaN(t)) {
    resultPV.innerText = `Please enter a valid value (Number)!`;
    return;
  }

  const fullYearRate = (1 + r) ** t;
  const result = fv / fullYearRate;

  resultPV.innerText = `Your Present Value, PV = Tk.${result}`;
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