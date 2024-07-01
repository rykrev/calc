let sessionMath = "";
let endValue = "";
let number1 = document.querySelector(".numb");
let number2 = document.querySelector(".numb");
let operator = document.querySelector(".oper");
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let operatorCount = 0;
let bClick;
let i = 0;
let greeting = "Welcome to the NC CORPORATIONS Calculator. If you have already read the following message before, skip it by pressing any button on the calculator. Rely on this calculator for quick math. If you encounter an error, just put in another number and it will clear itself up. Enjoy!"
let delay = setTimeout(message, 5)

message();

function message() {
    if (i < greeting.length) {
        if (bClick) {
        } else {
            display.value += greeting.charAt(i);
            i++;
            setTimeout(message, 50);
        }
    }
}

function updateDisplay(value) {
    display.value = String(value);
    if (value == "") {
        display.value = "";
    }
}

buttons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            bClick = true;
            if (button.classList.contains("numb") || button.classList.contains("spec")) {
                sessionMath += button.textContent;
                updateDisplay(sessionMath);
            } else if (button.classList.contains("oper")) {
                operatorCount += 1;
                if (operatorCount >= 2) {
                    updateDisplay("Error. Two operators cannot be selected at the same time.");
                    resetAll();
                    return;
                }
                if (!sessionMath) {
                    updateDisplay("Error. Please select a number first.")
                    resetAll();
                    return;
                } 
                operator = button.textContent;
                number1 = sessionMath;
                sessionMath = "";
                updateDisplay(operator);
            } else if (button.classList.contains("equal")) {
                if (number1 && operator && sessionMath) {
                    number2 = sessionMath;
                    let result = operate(parseFloat(number1), parseFloat(number2), operator);
                    updateDisplay(result);
                    resetAll();
                } else {
                    updateDisplay("Error. Please complete the operation.");
                }
            } else if (button.classList.contains("clear")) {
                resetAll();
                updateDisplay("");
            }
        })
    });

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, op) {
    if (op == "+") {
        endValue = add(num1, num2);
        return endValue;
    } else if (op == "-") {
        endValue = subtract(num1, num2);
        return endValue;
    } else if (op == "*") {
        endValue = multiply(num1, num2)
        return endValue;
    } else if (op == "/") {
        endValue = divide(num1, num2)
        return endValue;
    }
}

function resetAll() {
    sessionMath = "";
    number1 = "";
    number2 = "";
    operator = "";
    operatorCount = 0;
}