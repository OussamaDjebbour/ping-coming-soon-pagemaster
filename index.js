"use strict";

const input = document.querySelector('[type="text"]');
const form = document.querySelector("form");
const errMessage = document.querySelector(".err-message");

const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
// /\w*@[a-z]*\.[a-z]*/gi
// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errDisplay = function (errorMessage) {
  input.style.borderColor = "hsl(354, 100%, 66%)";
  errMessage.textContent = errorMessage;
};

const validation = function () {
  if (input.value.trim() === "") {
    errDisplay("Whoops! It looks like you forgot to add your email");
    return;
  }

  if (!regExp.test(input.value.trim())) {
    errDisplay("Please provide a valid email address");
    return;
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
});
