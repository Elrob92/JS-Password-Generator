// Assignment Code
var generateBtn = document.querySelector("#generate");

function password_generator( len ) {
    var length = (len)?(len):(8);
    var string = "abcdefghijklmnopqrstuvwxyz"; 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    

passwordText.value = password;

}

// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var passwordName = prompt("Please enter a password containing uppercase, lowercase, numbers and special characters");

// if (passwordName !== "h1" && passwordName !== "h2" && passwordName !== "p" && passwordName !== "div") {
//     alert("please enter a valid password");
// } else {
// //   // Creates element based on tag entered by user
// var tag = document.createElement(tagName);

// //   // Adds text content to created tag
// tag.textContent = "This was made via prompts. It's a " + tagName + ".";

//   // Appends tag as child of document body
// document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to enter a different password?");

// if (nextTag === true) {
//     var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter password here");
//     if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//     } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
//     document.body.appendChild(secondTag);
// }
// }


// // var userPreference;

// // if (confirm("Do you want to save changes?") == true) {
// //     userPreference = "Data saved successfully!";
// // } else {
// //     userPreference = "Save Cancelled!";
// // }  

// // alert("#password"); {
    
// //     window.alert(true);

// // }

