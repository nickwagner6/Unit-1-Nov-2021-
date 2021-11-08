let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
const convertButton = document.querySelector(".convert-button");
let temp = 0;

//this line is converting celsius to fahrenheit
const convertCtoF = (celsius) => (9 / 5) * celsius + 32;
//40 degrees celsius is 104 degrees fahrenheit in the console
console.log(convertCtoF(40));

//this line is converting fahrenheit to celsius
const convertFtoC = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
//0 degrees fahrenheit is -17.7778 degrees celsius in the console
console.log(convertFtoC(0));

document.getElementById("convertButton").addEventListener;

if (temp <= 32) {
  //generate cold.png
} else if (temp >= 32 && temp <= 50) {
  //generate cool.png
} else if (temp > 50) {
  //generate warm.png
}
