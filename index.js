const inputEl = document.querySelector('input[type="number"]');
const convertBtn = document.querySelector(".action-btn");

// Select paragraph to modify
const lengthPar = document.querySelector(".lenght");
const volumePar = document.querySelector(".volume");
const MassPar = document.querySelector(".mass");

// Button click event listener
convertBtn.addEventListener("click", function () {
  inputData = Number(inputEl.value);
  if (!inputData) return;
  lengthPar.textContent = `${inputData} meters  = ${inputData * 3.281} feet`;
});

/*

1 meter = 3.281 feet

1 liter = 0.264 gallon

1 kilogram = 2.204 pound

*/
