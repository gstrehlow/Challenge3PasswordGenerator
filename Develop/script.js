// Assignment code here
function generatePassword() {
  // Capture users password length
  var pLength = Number(window.prompt("Enter a length of at least 8 characters and no more than 128 characters."));
  console.log(pLength);

  // Check if password length is valid 
  if(pLength < 8 || pLength > 128) {
    window.alert("Invalid Response");
    return "";
  }

  // Ask user which characters to include
  // Add users characters to the total characters
  let characters = "";
  if(window.confirm("Do you want to include uppercase letters?")) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };
  if(window.confirm("Do you want to include lowercase letters?")) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  };
  if(window.confirm("Do you want to include numerics?")) {
    characters += "0123456789"
  };
  if(window.confirm("Do you want to include special characters?")) {
    characters += "~!@#$%^&*+"
  };

  // Check if user selected at least one character type
  if(!characters.length) {
    window.alert("Please choose at least one character type.")
    return ""
  }

  // Loop through the password length
  // Generate random number between 0 and the total character length
  // Add generated character to password
  let password = ""
  for (let i = 0; i < pLength; i++) {
    const random = Math.floor(Math.random() * characters.length)
    password += characters.charAt(random)
  }
  return password
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
