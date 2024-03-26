const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// #Variables
//*String -> Cadena de TEXTO, puede ir en comillas simples o dobles.
let myVariableString1 = 'Bob';
let myVariableString2 = "Bob";

//**Number -> Cadena de caracter numerico, no necesita comillas.
let myVariableNumber1 = 10;

//***Boolean -> True/False value, las palabras que se usan "true" y "false" son palabras especiales. No necesitan comillas. 
let myVariableBoolean1 = true;

//****Array -> Estructura para almacenar distintos tipos de variables en una sola referencia.
let myVariableArray1 =[1,'Bob',"Steve",10];

//****Array -> Para referenciar un elemento del arreglo: inicia desde el cero.
myVariableArray1[0]

//*****Object -> Todo en Js es un objeto y lo puedes almacenar en una variable.
let myVariableObjet1 = document.querySelector('h1');

// #Operators

// Addition: Add two numbers together or combine two strings.
// Symbol: +
// Example:
let result = 6 + 9; // Adds two numbers
let combinedString = 'Hello ' + 'world!'; // Combines two strings

// Subtraction: Subtract one number from another.
// Multiplication: Multiply two numbers.
// Division: Divide one number by another.
// Symbols: -, *, /
// Examples:
let subtractionResult = 9 - 3; // Subtracts one number from another
let multiplicationResult = 8 * 2; // Multiplies two numbers
let divisionResult = 9 / 3; // Divides one number by another

// Assignment: Assigns a value to a variable.
// Symbol: =
// Example:
let myVariableValue = 'Bob'; // Assigns the value 'Bob' to myVariable

// Strict equality: Tests if two values are equal and of the same data type.
// Symbol: ===
// Examples:
let variableOne = 3;
let variableTwo = 4;
let isEqual = variableOne === variableTwo; // Tests if variableOne is strictly equal to variableTwo

// Not: Returns the logically opposite value of what it precedes.
// Does-not-equal: Tests whether two values are not equal.
// Symbols: !, !==
// Examples:
let myVariable1 = 3;
let isNotEqual = !(myVariable1 === 3); // Tests if myVariable1 is NOT equal to 3 using "Not" operator

let myVariable2 = 3;
let doesNotEqual = myVariable2 !== 3; // Tests if myVariable2 does NOT equal 3 using "Does-not-equal" operator

// #Conditionals

// Conditionals: Code structures used to test if an expression returns true or not.
// Example:
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

// Functions: A way of packaging functionality for reuse.
// Example:
let myVariable = document.querySelector("h1"); // Selects an element in the document
alert("hello!"); // Displays a pop-up box inside the browser window

// Function with more than one argument : 
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// Events: Code structures that listen for activity in the browser and run code in response.
// Example:
document.querySelector("html").addEventListener("click",function () {
  alert("Ouch! Stop poking me!");
});

// Alternative way of writing anonymous functions:
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});

// Image Changer: Uses JavaScript and DOM API features to alternate the display of one of two images.
// Example:
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// Personalized Welcome Message: Changes the page title to a personalized welcome message.
// Example:
let myButton = document.querySelector("button"); // Selects a button element
let myHeading = document.querySelector("h1"); // Selects an h1 element

function setUserName() {
  const myName = prompt("Please enter your name."); // Prompts the user to enter their name
  localStorage.setItem("name", myName); // Stores the name in local storage
  myHeading.textContent = `Mozilla is cool, ${myName}`; // Displays the personalized welcome message
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

