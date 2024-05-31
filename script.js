// Btn numbers
const btnNumberOne = document.getElementById("number-one");
const btnNumberTo = document.getElementById("number-two");
const btnNumberThree = document.getElementById("number-three");
const btnNumberFour = document.getElementById("number-four");

// input value

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const numberInput = document.getElementById("phone-input");

// buttons

// button that moves the page to the next page
const btnFirstStepMove = document.getElementById("btn-first-step-move");
const btnSecondStepMove = document.getElementById("btn-second-step-move");
const btnThirdStepMove = document.getElementById("btn-third-step-move");
const btnConfirm = document.getElementById("btn-confirm");

// button that moves the page to the previous page
const btnFirstStepMoveBk = document.getElementById("btn-go-back-to-first");
const btnThirdStepMoveBk = document.getElementById("btn-go-back-to-third");
const btnSecondStepMoveBk = document.getElementById("btn-go-back-to-second");

// toggle buttons
const btnToggleMonth = document.getElementById("btn-toggle-month");
const btnToggleYear = document.getElementById("btn-toggle-year");

// pages
const personalInfo = document.querySelector(".personal-info");
const selectPlan = document.querySelector(".select-plan");
const selectAdons = document.querySelector(".select-ad-ons");

// span for error handling
const errorHandlingName = document.getElementById("error-handling-name");
const errorHandlingEmail = document.getElementById("error-handling-email");
const errorHandlingNumber = document.getElementById("error-handling-number");

const monthlyPricePlan = document.querySelectorAll(".price");
const yearlyPackage = document.querySelectorAll(".yearly-parkage");
const toggleWhite = document.querySelector(".toggle-white");

btnFirstStepMove.addEventListener("click", (e) => {
  e.defaultPrevented;

  //   this is the data the user input
  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;
  const numberInputValue = numberInput.value;

  if (!nameInputValue || !emailInputValue || !numberInputValue) {
    errorHandlingName.textContent = "name is required";
    errorHandlingEmail.textContent = "email is required";
    errorHandlingNumber.textContent = "phone number is required";
  } else {
    personalInfo.classList.add("hidden");
    selectPlan.classList.remove("hidden");
    btnNumberOne.classList.toggle("color-hidden");
    btnNumberTo.classList.add("color-hidden");
    console.log(nameInputValue, emailInputValue, numberInputValue);
  }
});

// save the data like the plan and the price into somewhere when the button is clicked
// select plan buttons to get the innerText of the price and plan

const btnArcade = document.getElementById("btn-arcade");
const btnAdvance = document.getElementById("btn-advance");
const btnPro = document.getElementById("btn-pro");

const arcadePlan = document.getElementById("arcade-plan");
const arcadeMonthlyPrice = document.getElementById("arcade-montly-price");
const arcadeYearlyPrice = document.getElementById("arcade-yearly-price");

// function to add all values in a big array
let allValue = [];

const combinedValue = (event) => {
  const button = event.currentTarget;

  const title = button.querySelector(".plan-type").innerText;
  const monthlyPrice = button.querySelector(".price").innerText;
  const yearlyPrice = button.querySelector(".year-price").innerText;

  const buttonData = {
    title: title,
    montly: monthlyPrice,
    yearly: yearlyPrice,
  };

  allValue.push(buttonData);
  console.log(allValue);
};

const buttons = document.querySelectorAll(".select-option");
buttons.forEach((button) => {
  button.addEventListener("click", combinedValue);
});

// function to toggle and change the value of year and month

const toggleYear = (e) => {
  monthlyPricePlan.forEach((e) => {
    e.classList.add("hidden");
  });

  yearlyPackage.forEach((e) => {
    e.classList.remove("hidden");
  });

  toggleWhite.style.left = "15px";
  toggleWhite.style.right = "15px";
};

btnToggleYear.addEventListener("click", toggleYear);

// toggle the month to show monthly price
btnToggleMonth.addEventListener("click", () => {
  monthlyPricePlan.forEach((e) => {
    e.classList.remove("hidden");
  });

  yearlyPackage.forEach((e) => {
    e.classList.add("hidden");
  });

  toggleWhite.style.left = "";
  toggleWhite.style.right = "";
});

// when the button on the second page to move is clicked, second page should be hidden while the third page show
btnSecondStepMove.addEventListener("click", () => {
  selectPlan.classList.add("hidden");
  selectAdons.classList.remove("hidden");
});
