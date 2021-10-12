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
 
 if(Totlength <8 || Totlength > 128){
    alert("Please choose a number between 8 and 128 characters.");
}

//else if statements

else{

    if(confirm("Do you want to include upper case letters?")){
       Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if(confirm("Do you want to include lower case letters?")){
       Array.prototype.push.apply(allChars, abcLowerArr);
    }

    if(confirm("Do you want to include numbers?")){
       Array.prototype.push.apply(allChars, numArr);
    }

    if(confirm("Do you want to include symbols?")){
       Array.prototype.push.apply(allChars, symArr);
    }

    if(allChars.length===0){
       alert("You need choose at least 1 type of character to generate a password!\nTry again");
    }

    else{
        for(var i=0; i<Totlength; i++){
               var random = Math.floor(Math.random()*allChars.length);
               resultPass += allChars[random];
              }
          }
          }
       
          //Display password
       
          document.getElementById("password").innerHTML = resultPass;
        }
        
        // Bonus section

function copyPass(){   
    document.querySelector("textarea").select();
        document.execCommand("Copy");
        alert("Password copied to clipboard!");
    }