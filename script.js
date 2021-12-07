// Variables separating into strings to add to array  
var abcUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var abcUpperArray = abcUpper;
var abcLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var abcLowerArray = abcLower;
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var numberArray = num;
var symbol = ["!","#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "|", "~",];
var symbolArray = symbol;

// Initial window prompt
window.onload = alert("Please click Generate password to start");

//By clicking the generate password button 
function generatePass(){
 var allChars = [];
 var resultPass = ""; 

 //set first prompt 
 var Totlength = prompt("How many characters would you like your password to be?");

 //added minimum and maximum length of password characters required
 
 if(Totlength <8 || Totlength > 128){
    alert("Please choose a number between 8 and 128 characters.");
}

//else if statements

else{

    if(confirm("Do you want to include upper case letters?")){
       Array.prototype.push.apply(allChars, abcUpperArray);
    }

    if(confirm("Do you want to include lower case letters?")){
       Array.prototype.push.apply(allChars, abcLowerArray);
    }

    if(confirm("Do you want to include numbers?")){
       Array.prototype.push.apply(allChars, numberArray);
    }

    if(confirm("Do you want to include symbols?")){
       Array.prototype.push.apply(allChars, symbolArray);
    }

    if(allChars.length===0){
       alert("You need choose at least 1 type of character to generate a password!\nTry again");
    }
    var randomPass= ""
      
    for (var i = 0; i < Totlength; i++) {
      randomPass = randomPass[Math.floor(Math.random() * allChars.length)];
      console.log(randomPass)
    }
    return randomPass;
}
       
          //Display password using password id tag in html
       
          document.getElementById("password").innerHTML = resultPass;
        }
        
        // Bonus section

function copyPass(){   
    document.querySelector("textarea").select();
        document.execCommand("Copy");
        alert("Password copied to clipboard!");
    }