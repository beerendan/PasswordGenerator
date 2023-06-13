// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var generatedPassword= "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
    console.log("generatePassword function running");

    //reset password holder
    generatedPassword="";

    var promptCheck=false;
    while(promptCheck==false){
        var lengthCheck=false;
        var errorCheck=0;
        while (lengthCheck==false){
            var lengthInput= prompt("How long would do you want your password to be? (8-128 char", "8");
            
            var lengthArray=lengthInput.split("");
            var arrayLength=lengthArray.length;
        
        //verify desired length input is a number
        for (var i=0; i< arrayLength; i++){
            var x= lengthArray[i];
        
        if (x >="0" && x <="9"){}
        else {
            errorCheck++;
            break;
        }
        }
        //repeat input prompt if an error is encountered
        if (errorCheck>0){
            alert("Input must be a number");
            errorCheck=0;
        }
        //if no errors, verify valid length 
        else{
            var sum=lengthInput;
        if (sum<8){
            alert("Minimum character length must be greater than 8");
        }  else if (sum>128){
            alert("Maximum character length must be less than 128");
        
        }   else{
            passwordLength=sum;
            console.log("Valid desired password length");
            lengthCheck=true;
        }
        }
    }
    var confirmCheck=false;
    var attributeArray= [];
    var confirmTotal=0;

    while(confirmCheck==false){
        var pLowercase= confirm ("Would you like to include lowercase characters?");
        var pUppercase= confirm ("Would you like to include uppercase characters?");
        var pNumeric= confirm ("Would you like to include numeric characters?");
        var pSpecial= confirm ("Would you like to include special characters?");

      if (pLowercase==true) {
        attributeArray += "L";
        confirmTotal++;
        console.log("Including lowercase characters");
    }
      if (pUppercase==true){
        attributeArray += "U";
        confirmTotal++;
        console.log("Including uppercase characters");
    }
      if (pNumeric==true){
        attributeArray += "N";
        confirmTotal++;
        console.log("Including numeric characters");
    }
      if (pSpecial==true){
        attributeArray+= "S";
        confirmTotal++;
        console.log("Including special characters");
    }
    if (confirmTotal>0){
        confirmCheck=true;
        console.log("At least one attribute confirmed.");
    } else {alert("You must select at least 1 attribute.")}
    }

//Begin generating password with length and attributes selected
console.log("Begin generating password with" +passwordLength +"characters");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
