// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate (num1, num2, operation){

    switch (operation){
        case "add":
            return num1 + num2;
        case "subtract":
            return num1-num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1/num2;
        default:
            throw new Error("Incorrect Operation!")
    }
}
// ADD FOUR PUBLIC FUNCTIONS BELOW
// MULTIPLY FUNCTION

// DIVIDE FUNCTION

// EXPORT THE FOUR PUBLIC FUNCTIONS// ADD FUNCTION

// SUBTRACT FUNCTION

export function add (num1, num2){
    return calculate (num1, num2 , "add");

}
export function subtract (num1, num2){
    return calculate (num1, num2 , "subtract");
    
}

export function multiply (num1, num2){
    return calculate (num1, num2 , "multiply");
    
}

export function divide (num1, num2){
    return calculate (num1, num2 , "divide");
    
}





