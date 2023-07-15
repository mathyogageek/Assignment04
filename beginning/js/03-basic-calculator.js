// IMPORT THE MODULE
import { add, subtract, multiply, divide } from "./modules/calculator.js";

//FUNCTION - user prompt 
function promptNums(info){
    return Number(prompt(info))
}

let continueCalculation = true;
while (continueCalculation){
    let num1 = promptNums("Enter the first number: ");

    let num2 = promptNums ("Enter the secodn numbers: ");

    let operation = prompt("Enter your choice : add , subtract, multiply, divide");

    let answer;
    switch(operation){

      case "add":
        answer = add(num1, num2);
        break;
      case "subtract":
        answer = subtract(num1, num2);
        break;
      case "multiply":
        answer = multiply(num1, num2);
        break;
      case "divide":
        answer = divide(num1, num2);
        break;

       default:
         alert(" Incorrect Choice ! Try again !");

         continue;
         
    }
if (answer !== undefined){
alert("The answer is: " + answer);

} else {
    alert("Something wrong ! Try again! ");
    continue;
}

let continueOrNot = prompt("Continue? (Yes, No)");
  if (continueOrNot.toLowerCase() === "no") {
    continueCalculation = false;
  }
}
