"use strict";

const loanAmount = document.querySelector("#loanValue");
const loanTerm = document.querySelector("#loanTerm");
const calcBtn = document.querySelector("#calcButton");
const resetBtn = document.querySelector("#resetButton");
const evalElement = document.querySelector(".evalElement");

const initApp = function initApp() {
  document.querySelector("#loanValue").value = "0";
  document.querySelector("#loanTerm").value = "0";
  evalElement.textContent = "";
};

initApp();

const calcPayment = () => {
  var lv = document.getElementById("loanValue").value;
  var lt = document.getElementById("loanTerm").value;

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
