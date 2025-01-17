const generateButton = document.getElementById("generateButton");
const modal = document.getElementById("modal");
const inputBox = document.getElementById("passwordInput");
const linkInput = document.getElementById("linkInput");
const generatePassword = document.getElementById("generate");

function displayModal() {
  modal.style.display = "flex";
}

generateButton.addEventListener("click", displayModal);

const chars = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]></-=";

const allChars = upperCase + lowerCase + number + symbol;
console.log(allChars);

const createPassword = function GenChars() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  number += number[Math.floor(Math.random() * number.length)];
  symbol += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputBox.value = password;
};

generatePassword.addEventListener("click", createPassword);
