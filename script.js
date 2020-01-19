
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var copyBtn = document.querySelector("#copyBtn");



var upCharacterCodes= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowCharacterCodes= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numCharacterCodes=  ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacterCodes = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '?', '@', ',', '-', '.', '/', ':', ';', '<', '>', '=', '[', ']', '\\', '^', '_', '`', '{', '}', '|', '~'];
var randomPassword = [];

function generatePassword(arr, number) {
	let newArray = arr.flat();
	let newPassword = [];
	for (let i = 0; i < number; i++) {
		let randomIndex = Math.floor(Math.random() * newArray.length - 1);
		newPassword.push(newArray[randomIndex]);
	}
	return newPassword.join('');
}





function writePassword(){

    var passLength= parseInt(prompt( "Choose length of password between 8 and 128."));
    var passChar = confirm ( "Do you want special characters?");
    var passNum = confirm ("Do you want numbers in your password?");
    var passUppercase = confirm("do you want upper case alphabets in your password?");
    var passLowerCase = confirm("Do you want lower case alphabets in your password?");
    


if (passChar) {randomPassword.push(specialCharacterCodes);}


if ( passNum) {randomPassword.push( numCharacterCodes);}


if (passLowerCase) {randomPassword.push( lowCharacterCodes);}

if (passUppercase) {randomPassword.push(upCharacterCodes);}

else if (!passChar && !passNum && !passLowerCase && !passUppercase) {
    alert('Please select at least one character type.');
    return;
    
  }
  
  
  var password = generatePassword(randomPassword, passLength);
  
  passwordText.value = password;
  }
  
  function copyToClipboard() {
    // BONUS function copyToClipboard() {
      let copyText = document.querySelector('#password');
      copyText.select();
      document.execCommand("copy");
      alert(`The password ${copyText.value} has been copied to your clipboard`)
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  // BONUS EVENT LISTENER
  copyBtn.addEventListener('click', copyToClipboard);