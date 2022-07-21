// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
// SIGN UP
let userInput = document.getElementById("input-username");
let pwdInput = document.getElementById("input-pwd");
let pwdConfirm = document.getElementById("confirm-pwd");
// SIGN IN
let userEl = document.getElementById("username");
let passEl = document.getElementById("password");

// GLOBAL VARIABLES
let users = loadUsers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  if (checkUsernames(userInput.value)) {
    alert("Username currently unavailable.");
    clearInputs();
  } else {
    newUser(userInput.value, pwdInput.value);
    alert("Your account has been successfully created.");
    saveUsers();
    clearInputs();
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  if (checkSignIn(userEl.value, passEl.value)) {
    alert("Sign-In Successful");
  } else {
    alert("Username or Password Incorrect");
  }
}

// Helper Functions
// Create new user account
function newUser(name, pass) {
  users.push({username: name, password: pass});
}

function clearInputs() {
  userInput.value = "";
  pwdInput.value = "";
  pwdConfirm.value = "";
}

function checkUsernames(testName) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === testName) {
      return true;
    }
  }
  return false;
}

function checkSignIn(testName, testPwd) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    if (testName === user.username && testPwd === user.password) {
      return true;
    }
  }
  return false;
}

// Load and Save data on Local Storage
function loadUsers() {
  let dataStr = localStorage.getItem("users");
  return JSON.parse(dataStr) ?? []; // return parsed data or empty array
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}