var generateBtn = document.querySelector("#generate");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbols = "`~!@#$%^&*()_+-=[]\{}|;'./:>?";
const passWordLength = "";


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    userPassword = "";
    passwordValue = "";

    
    let passWordLength = prompt(
        "Please select the length of your password. (Between 8 - 128 characters)"
    );

    
    if (passWordLength >= 8 && passWordLength <= 128) {
        password.length = passWordLength;

        
        var isLowercase = confirm("Include lowercase letters in your password?");
        
        var isUppercase = confirm("Include uppercase letters in your password?");
        
        var isNumber = confirm("Include numbers in your password?");
        
        var isCharacters = confirm("Include sepcial characters in your password?");
    }  else {
        alert("Please choose from 8-128 characters");
        return "Please Try again";
    }
    
    if (isLowercase) {
        passwordValue += lowerCase;
    }
    if (isUppercase) {
        passwordValue += upperCase;
    }
    if (isNumber) {
        passwordValue += number;
    }
    if (isCharacters) {
        passwordValue += symbols;
    } 
    
    for (var i = 0; i < passWordLength; i++) {
        userPassword += passwordValue[Math.floor(Math.random() * passwordValue.length)];
    }
    
    return userPassword;
}
// event listener for generate button
generateBtn.addEventListener("click", writePassword);