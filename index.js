const inputEl = document.querySelector('input[type="number"]');
const convertBtn = document.querySelector(".action-btn");

// Mode toggler container
const modeContainer = document.querySelector(".mode-toggler");

// Select paragraph to modify
const lengthPar = document.querySelector(".lenght");
const volumePar = document.querySelector(".volume");
const massPar = document.querySelector(".mass");

// Event listener for change of the mode
modeContainer.addEventListener("click", toggleMode);

// function for toogling mode element visibility and element styles
function toggleMode() {
  document
    .querySelectorAll(".mode")
    .forEach((mode) => mode.classList.toggle("hide"));
  document
    .querySelector(".converting-data")
    .classList.toggle("invertion-converting-data");

  document
    .querySelectorAll(".metric-data")
    .forEach((el) => el.classList.toggle("invertion-metric-data"));
  document
    .querySelectorAll("h2")
    .forEach((el) => el.classList.toggle("invertion-h2"));
  document
    .querySelectorAll(".fs")
    .forEach((el) => el.classList.toggle("invertion-fs"));
}

// Convert button click event listener
convertBtn.addEventListener("click", function () {
  inputData = Number(inputEl.value);
  if (!inputData) return;

  // Calculating meter to feet / feet to meter and update UI
  const meterToFeet = (inputData * 3.2808).toFixed(3);
  const feetToMetr = (inputData * 0.3048).toFixed(3);

  lengthPar.textContent = `${inputData} meters  = ${meterToFeet} feet | ${inputData} feet = ${feetToMetr} meters `;

  // Calculating liters to gallons / gallons to liters and update UI
  const litersToGallons = (inputData * 0.264172).toFixed(3);
  const gallonsToLiters = (inputData * 3.78541).toFixed(3);

  volumePar.textContent = `${inputData} liters = ${litersToGallons} gallons | ${inputData} = ${gallonsToLiters} liters`;

  // Calculating kilos to pounds / pounds to kilos and update UI
  const kilosToPounds = (inputData * 2.20462).toFixed(3);
  const poundsToKilos = (inputData * 0.453592).toFixed(3);

  massPar.textContent = `${inputData} kilos = ${kilosToPounds} pounds | ${inputData} pounds = ${poundsToKilos} kilos`;
});
