"use strict";

const loanAmount = document.querySelector("#loanValue");
const loanTerm = document.querySelector("#loanTerm");
const calcBtn = document.querySelector("#calcButton");
const resetBtn = document.querySelector("#resetButton");
const evalElement = document.querySelector(".evalElement");
//Amount
const amountMinus = document.querySelector(".minusButtonAmount");
const amountPlus = document.querySelector(".plusButtonAmount");
const amountInput = document.getElementById("amountInput").innerHTML;
//Term
const termMinus = document.querySelector(".minusButtonTerm");
const termPlus = document.querySelector(".plusButtonTerm");
const termInput = document.getElementById("termInput").innerHTML;

// Amount button selectors
// Plus button
const moneyUp = function moneyUp() {
  document.getElementById("amountInput").stepUp(1);
};
amountPlus.addEventListener("click", moneyUp);

// Minus Button
const moneyDown = function moneyDown() {
  document.getElementById("amountInput").stepUp(-1);
};
amountMinus.addEventListener("click", moneyDown);

// Term button selectors
// Plus button
const termUp = function termUp() {
  document.getElementById("termInput").stepUp(1);
};
termPlus.addEventListener("click", termUp);

// Minus Button
const termDown = function termDown() {
  document.getElementById("termInput").stepUp(-1);
};
termMinus.addEventListener("click", termDown);

const initApp = function initApp() {
  // document.querySelector("#loanValue").value = "0";
  // document.querySelector("#loanTerm").value = "0";
  // amountInput.value = "";
  document.getElementById("termInput").value = "";
  document.getElementById("amountInput").value = "";
  evalElement.textContent = "";
};

initApp();

const calcPayment = () => {
  // var lv = document.getElementById("loanValue").value;
  // var lt = document.getElementById("loanTerm").value;
  var lv = document.getElementById("amountInput").value;
  var lt = document.getElementById("termInput").value;

  if (lv || lt > 0) {
    if (lv > 1000) {
      var result = (lv / lt / 100) * 120;
      var interestRate = "20%";
      // 20% interest
    } else {
      var result = (lv / lt / 100) * 140;
      var interestRate = "40%";
      // 40% interest
    }
    const youPay = parseFloat(result).toFixed(2);
    const totalPay = youPay * lt;

    // did the user enter 0's? if not calculate the loan
    if (lv > 0 && lt > 0) {
      evalElement.textContent = `If you borrow £${lv} over ${lt} months, you will pay £${youPay} each month for a total of £${totalPay}. 
   Your interest rate will be ${interestRate}.`;
      // add apply now btn from elements
    } else {
      initApp();
      alert("Values need to be more than '0'");
      //style this
    }
  }
};

calcBtn.addEventListener("click", calcPayment);
resetBtn.addEventListener("click", initApp);

// Style the form validation

// Produce an apply now button when valid entry using createElement

// Apply spinner while loading

// Accepted or Rejected function
