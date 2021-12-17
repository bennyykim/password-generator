// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var beta = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var char = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", ',', '.', '<', '>', '/', '?', '`', '~'];

// Write password to the #password input
function writePassword() {

  var length = prompt("How long do you want your password (between 8-128)?");

  if (length < 8 || length > 128 || isNaN(length)) {
    alert('Please choose a length of at least 8 characters and no more than 128 characters.');
    return;
  }

  var lower = confirm("Include lowercase letters?");
  var upper = confirm("Include uppercase letters?");
  var number = confirm("Include numbers?");
  var special = confirm("Include special characters?");

  if (!lower && !upper && !number && !special) {
    alert('Please select at least 1 of the 4 options to generate a password.');
    return;
  }

  var code = [];
  var ultra = [];

  if (lower) {
    var r = alphabet[Math.floor(Math.random() * alphabet.length)];
    ultra.push(...alphabet);
    code.push(r);
  }

  if (upper) {
    var r = beta[Math.floor(Math.random() * beta.length)];
    ultra.push(...beta);
    code.push(r);
  }

  if (number) {
    var r = integers[Math.floor(Math.random() * integers.length)];
    ultra.push(...integers);
    code.push(r);
  }

  if (special) {
    var r = char[Math.floor(Math.random() * char.length)];
    ultra.push(...char);
    code.push(r);
  }

  for (var i = length; code.length < i;) {
    var r = ultra[Math.floor(Math.random() * ultra.length)];
    code.unshift(r);
  };

  console.log(ultra);
  console.log(code);

  var password = generatePassword();
  function generatePassword() {
    return code.join('');
  };

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
