const generateButton = document.getElementById("generateButton");
const modal = document.getElementById("modal");
const inputBox = document.getElementById("passwordInput");
const linkInput = document.getElementById("linkInput");
const generatePassword = document.getElementById("generate");
const saveButton = document.getElementById("saveButton");
const historyList = document.getElementById("list");

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

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (chars > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputBox.value = password;
  saveButton.style.display = "block";

  // alert("Add the link for your password");
}

function copyPassword() {
  navigator.clipboard
    .writeText(inputBox.value)
    .then(() => {})
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });

  if (!(inputBox.value = "")) {
    alert("Password copied to clipboard!");
    console.log("Gotcha");
  } else {
    console.log("Okay sure");
  }
}

generatePassword.addEventListener("click", createPassword);

function saveLink() {
  const linkText = linkInput.value;
  const link = document.createElement("list");
  const password = inputBox.value;
  const passwordText = document.createElement("p");
  passwordText.innerHTML = password;
  link.innerHTML = linkText;
  link.classList.add("list-item");
  historyList.appendChild(link);

  link.addEventListener("click", showAccount);
  saveButton.style.display = "none";
  inputBox.value = "";
  linkInput.value = "";
}

const showAccount = () => {
  inputBox.value = password;
  linkInput.value = link;
};

saveButton.addEventListener("click", saveLink);
