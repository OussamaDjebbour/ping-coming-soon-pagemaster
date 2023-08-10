"use strict";

const input = document.querySelector('[type="text"]');
const form = document.querySelector("form");
const errMessage = document.querySelector(".err-message");
const btn = document.querySelector('[type="button"]');

const regExp = /\w*@[a-z]*\.[a-z]*/g;

const errDisplay = function (errorMessage) {
  input.style.borderColor = "hsl(354, 100%, 66%)";
  errMessage.textContent = errorMessage;
};

const validation = function () {
  if (!regExp.test(input.value)) {
    errDisplay("Please provide a valid email address");
  }

  if (input.value.trim() === "") {
    errDisplay("Whoops! It looks like you forgot to add your email");
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validation();
});

btn.addEventListener("click", function () {
  validation();
});
