let sessionMath = []
let number1;
let number2; 
let operator; 
let displayNumber;

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, op) {
    if (op == "+") {
        return add(num1, num2);
    } else if (op == "-") {
        return subtract(num1, num2);
    } else if (op == "*") {
        return multiply(num1, num2)
    } else if (op == "/") {
        return divide(num1, num2)
    }
}

console.log(operate(6, 18, "+"));