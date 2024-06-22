let sessionMath = "";
let endValue = "";
let number1 = document.querySelector(".numb");
let number2 = document.querySelector(".numb");
let operator = document.querySelector(".oper");
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

function updateDisplay(value) {
    display.value = String(value);
    if (value == "") {
        display.value = "";
    }
}

buttons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("numb") || button.classList.contains("spec")) {
                sessionMath += button.textContent;
                updateDisplay(sessionMath);
            } else if (button.classList.contains("oper")) {
                if (number1 && operator && sessionMath) {
                    operator = button.textContent;
                    number1 = sessionMath;
                    sessionMath = "";
                    updateDisplay(operator);
                } else {
                    operator = button.textContent;
                    number1 = sessionMath;
                    sessionMath = "";
                }
            } else if (button.classList.contains("equal")) {
                if (number1 && operator && sessionMath) {
                    number2 = sessionMath;
                    let result = operate(parseFloat(number1), parseFloat(number2), operator)
                    updateDisplay(result);
                    number1 = "";
                    operator = "";
                    sessionMath = "";
                    number2 = "";
                }
            } else if (button.classList.contains("clear")) {
                sessionMath = "";
                number1 = "";
                number2 = "";
                operator = "";
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