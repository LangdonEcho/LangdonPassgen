// Variables separating into strings to add to array  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

// Initial window prompt
window.onload = alert("Please click Generate password to start");

//By clicking the generate password button 
function generatePass(){
 var allChars = [];
 var resultPass = ""; 

 //set first prompt 
 var Totlength = prompt("How many characters would you like your password to be?");

 //added minimum and maximum length of password characters required
