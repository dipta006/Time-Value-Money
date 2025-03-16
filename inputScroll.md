*CSS:
/* Remove the spinner (up and down buttons) for Chrome, Edge, and Safari */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Remove the spinner for Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}


**JS:
// Prevent scrolling from changing the value
const numberInputs = document.querySelectorAll('input[type="number"]');

numberInputs.forEach((input) => {
  input.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent scrolling from changing the value
  });
});
