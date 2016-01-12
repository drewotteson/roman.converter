"use strict";


function checkUserNumber() {
    while (true){
    var userNumber;
    userNumber = prompt("Enter a number to convert.");
    if(isNaN(userNumber) || (userNumber === "") || (userNumber <= 0)) {
    console.log("Try again.");
    }
    else {
    return userNumber;
    }
}
}
function convertToRoman(userNumber){
    var romanNumber;
    romanNumber = ""
    var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i < decimals.length; i++){
        while (userNumber >= decimals[i]){
        romanNumber += romans[i];
        userNumber -= decimals[i];
        }
    }
    console.log(romanNumber);
}
var userNumber = checkUserNumber();
convertToRoman(userNumber);













