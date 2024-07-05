// Btn numbers
const btnNumberOne = document.getElementById("number-one");
const btnNumberTwo = document.getElementById("number-two");
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
const btnToggleMonth = document.querySelector(".btn-toggle-month");
const btnToggleYear = document.querySelector(".btn-toggle-year");

const btnToggleMonthAdon = document.getElementById("btn-toggle-month");
const btnToggleYearAdon = document.getElementById("btn-toggle-year");

// pages
const personalInfo = document.querySelector(".personal-info");
const selectPlan = document.querySelector(".select-plan");
const selectAdons = document.querySelector(".select-ad-ons");
const confirmPlans = document.querySelector(".confirm-plans");
const thankYouPage = document.querySelector(".thank-you-page");

// span for error handling
const errorHandlingName = document.getElementById("error-handling-name");
const errorHandlingEmail = document.getElementById("error-handling-email");
const errorHandlingNumber = document.getElementById("error-handling-number");

// variables to display the hidden year price when toggled
const monthlyPricePlan = document.querySelectorAll(".price");
const yearlyPackage = document.querySelectorAll(".yearly-parkage");
const yearlyPriceAdons = document.querySelectorAll(".yearly-price");
const monthlyPriceAdons = document.querySelectorAll(".monthly-price");
const toggleWhite = document.querySelectorAll(".toggle-white");

btnFirstStepMove.addEventListener("click", (e) => {
  e.defaultPrevented;

  //   this is the data the user input
  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;
  const numberInputValue = numberInput.value;

  if (!nameInputValue || !emailInputValue || !numberInputValue) {
    errorHandlingName.textContent = "Name is required";
    errorHandlingEmail.textContent = "Email is required";
    errorHandlingNumber.textContent = "Phone number is required";
  } else {
    personalInfo.classList.add("hidden");
    selectPlan.classList.remove("hidden");
    btnNumberOne.classList.toggle("color-hidden");
    btnNumberTwo.classList.add("color-hidden");
    // console.log(nameInputValue, emailInputValue, numberInputValue);
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

// function to add all values in an array called selectedPlanArr
// let selectedPlanArr = [];

const combinedValue = (event) => {
  const button = event.currentTarget;

  const title = button.querySelector(".plan-type").innerText;
  const monthlyPrice = button.querySelector(".price").innerText;
  const yearlyPrice = button.querySelector(".year-price").innerText;

  const price = pricingMode === "yearly" ? yearlyPrice : monthlyPrice;

  const buttonData = {
    title: title,
    price: price,
  };

  selectedPlanArr.length = 0;
  selectedPlanArr.push(buttonData);
};

const buttons = document.querySelectorAll(".select-option");
buttons.forEach((button) => {
  button.addEventListener("click", combinedValue);
});

// function to toggle and change the value of year and month
let pricingMode = "monthly";

const toggleYear = (e) => {
  if (pricingMode === "monthly") {
    pricingMode = "yearly";

    monthlyPricePlan.forEach((e) => {
      e.classList.add("hidden");
    });
    monthlyPriceAdons.forEach((e) => {
      e.classList.add("hidden");
    });
    yearlyPriceAdons.forEach((e) => {
      e.classList.remove("hidden");
    });

    yearlyPackage.forEach((e) => {
      e.classList.remove("hidden");
    });

    toggleWhite.forEach((move) => (move.style.right = "15px"));
    toggleWhite.forEach((move) => (move.style.left = "15px"));
  } else {
    pricingMode = "monthly";
  }
};

// toggle the month to show monthly price
const toggleMonth = () => {
  monthlyPricePlan.forEach((e) => {
    e.classList.remove("hidden");
  });
  monthlyPriceAdons.forEach((e) => {
    e.classList.remove("hidden");
  });
  yearlyPriceAdons.forEach((e) => {
    e.classList.add("hidden");
  });

  yearlyPackage.forEach((e) => {
    e.classList.add("hidden");
  });

  toggleWhite.forEach((move) => (move.style.right = 0));
  toggleWhite.forEach((move) => (move.style.left = 0));
};

// when the button on the second page to move is clicked, second page should check if any of the option is clicked by checking the array that saved the data of the clicked button then hide the section while the third page show
const checkIfPlanIsSelected = () => {
  const title = document.querySelectorAll(".select-option");
  title.forEach((button) => {
    if (selectedPlanArr.length > 0) {
      selectPlan.classList.add("hidden");
      selectAdons.classList.remove("hidden");
      btnNumberThree.classList.toggle("color-hidden");
      btnNumberTwo.classList.remove("color-hidden");
    }
  });
};
btnSecondStepMove.addEventListener("click", checkIfPlanIsSelected);

// move to the previous page when the button is clicked and the value of the input is cleared
btnFirstStepMoveBk.addEventListener("click", (e) => {
  e.preventDefault;
  selectPlan.classList.add("hidden");
  personalInfo.classList.toggle("hidden");
  btnNumberOne.classList.toggle("color-hidden");
  btnNumberTwo.classList.remove("color-hidden");
  nameInput.value = "";
  numberInput.value = "";
  emailInput.value = "";
});

// get the item saved from the localstorage
const selectedPlanArr = JSON.parse(localStorage.getItem("data")) || [];

// save the array data collected in a localStorage
const updatedSelectedPlanArr = () => {
  localStorage.setItem("data", JSON.stringify(selectedPlanArr));
};

// Select an adOns and save the value in the array earlier created
const addAdonsValue = (e) => {
  const buttons = e.currentTarget;

  const title = buttons.querySelector(".online-ser").innerText;
  const monthlyPrice = buttons.querySelector(".monthly-price").innerText;
  const yearlyPrice = buttons.querySelector(".yearly-price").innerText;

  const price = pricingMode === "yearly" ? yearlyPrice : monthlyPrice;

  const buttonData = {
    adstitle: title,
    adonPrice: price,
  };
  const svgMark = buttons.querySelector(".path-class");

  // check using findIndex if an item is already saved in the selectedPlanArr variable and delete it
  const index = selectedPlanArr.findIndex((items) => items.adstitle === title);
  if (index !== -1) {
    selectedPlanArr.splice(index, 1);
    svgMark.style.stroke = "blue";
  } else {
    svgMark.style.stroke = "#fff";
    selectedPlanArr.push(buttonData);
  }

  updatedSelectedPlanArr();
};

const btnSelectAdons = document.querySelectorAll(".select-adon");
btnSelectAdons.forEach((button) => {
  button.addEventListener("click", addAdonsValue);
});

// move to the next page when the button is clicked
btnThirdStepMove.addEventListener("click", () => {
  selectAdons.classList.add("hidden");
  confirmPlans.classList.remove("hidden");
  btnNumberThree.classList.toggle("color-hidden");
  btnNumberFour.classList.toggle("color-hidden");

  renderData(selectedPlanArr);
});

// move to the previous page when the button is clicked
btnSecondStepMoveBk.addEventListener("click", () => {
  selectAdons.classList.add("hidden");
  selectPlan.classList.remove("hidden");
  btnNumberTwo.classList.toggle("color-hidden");
  btnNumberThree.classList.remove("color-hidden");
});

// button to move the page back to the previous one
btnThirdStepMoveBk.addEventListener("click", () => {
  selectAdons.classList.remove("hidden");
  confirmPlans.classList.add("hidden");
  btnNumberThree.classList.add("color-hidden");
  btnNumberFour.classList.remove("color-hidden");
});

// display a thank you message
btnConfirm.addEventListener("click", () => {
  confirmPlans.classList.add("hidden");
  thankYouPage.classList.remove("hidden");
  btnNumberFour.classList.remove("color-hidden");
  localStorage.clear();
});
let totalSum = 0;
// Rendering the stage four from the choice made in page 2 and 3
function renderData(data) {
  // let totalSum = 0;
  const planType = document.getElementById("plan-type");
  const finishPlanPrice = document.getElementById("finish-plan-price");
  const addonsRender = document.querySelector(".adons-render");
  addonsRender.innerHTML = "";
  data.forEach((item) => {
    if (item.title) {
      planType.innerText = item.title;
    }
    if (item.price) {
      finishPlanPrice.innerText = item.price;
      if (typeof item.price === "string") {
        let mainPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        totalSum += mainPrice;
      }
    }
    // rendering Add ons content and price
    const ssp = document.createElement("div");
    ssp.className = " service-price flex";
    const h3 = document.createElement("h3");
    h3.className = " servive-render";
    const p = document.createElement("p");
    p.className = "price-render";
    ssp.appendChild(h3);
    ssp.appendChild(p);
    addonsRender.appendChild(ssp);

    if (item.adstitle) {
      h3.textContent = item.adstitle;
    }
    if (item.adonPrice) {
      p.textContent = item.adonPrice;
    }
    if (typeof item.adonPrice === "string") {
      let addonPriceCaol = parseFloat(item.adonPrice.replace(/[^0-9.-]+/g, ""));
      totalSum += addonPriceCaol;
    }
  });

  const totalPriceOfParkage = document.querySelector(".price-total");
  totalPriceOfParkage.textContent = `$ ${totalSum}`;
}
