// Assignment code here
function generatePassword() {
  // Capture users password length
  var pLength = Number(window.prompt("Enter a length of at least 8 characters and no more than 128 characters."));
  console.log(pLength);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
