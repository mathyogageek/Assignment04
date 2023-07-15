
//STEP 1  
// Write a function called halfNumber() that accepts one argument (a number), 
// divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".


function halfNumber(number){
    var result = number /2 ;
    console.log("Half of " + number + " is " + result + ".");
    return result;
}

halfNumber(5);


//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number){
    var result = number * number;
    console.log ("The result of squaring the number " + number + " is " + result + ".");
    return result;
}

squareNumber(3);


//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number,
// and return the result. It should log a string like "2 is 50% of 4."

function percentOf(num1 , num2){
    var result = (num1 / num2) * 100 ;
    console.log(num1 + " is " + result + "% of " + num2 + ".");
    return result ;
}

percentOf(2, 4);


//STEP 4
// Write a function called findModulus() that accepts two numbers.
// Within the function write a statement that returns the modulus of the first and second parameters.
// It should log a string like "2 is the modulus of 4 and 10."

function findModulus(num1, num2){
    var result = num1 % num2 ;
    console.log (result + " is the modulus of " + num1 + "  and  " + num2);
    return result ;
}
findModulus (10 , 4);

//STEP 5

function sumNumbers() {
    var numbers = prompt("Enter numbers separated by commas:");
    var numberComination = numbers.split(",");
    var sum = 0;
    for (var i = 0; i <  numberComination.length; i++) {
      sum += parseFloat(numberComination[i]);
    }
    console.log("The sum of the numbers is: " + sum);
    return sum;
  }
  var sum = sumNumbers();
