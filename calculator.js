let num1 = "", num2 = "", operator = null, result = null;

const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {

    return b!=0 ? a/b : "#ERR";
}

const operate = (a, b, operation) => {
    switch(operation) {
        case "+": 
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}

const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const screen = document.querySelector(".display");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const smallDisplay = document.querySelector(".smallDisplay")

numBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (result) {
            clearScreen();
        }
        if(operator === null){
            num1 += (btn.textContent);
            screen.textContent += (btn.textContent);
        } else {
            num2 += (btn.textContent);
            screen.textContent += (btn.textContent);
        }
        
    })
})

operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(operator) {
            calculate();
        }
        if(result) {
            num1 = result;
            result = null;
            num2 = "";
        }
        operator = btn.textContent;
        screen.textContent += operator;
    })
})

equalBtn.addEventListener('click', () => {
    calculate();
    num1 = "";
    num2 = "";
    operator = null;

})

clearBtn.addEventListener('click', () => {
    clearScreen();
})

const clearScreen  = () => {
    screen.textContent = '';
    smallDisplay.textContent = '';
    num1 = "";
    num2 = "";
    operator = null;
    result = null;
}

const calculate = () => {
    smallDisplay.textContent = screen.textContent;
    console.log("num1", num1);
    console.log("num2", num2);
    result = toFixedIfNecessary(operate(Number(num1), Number(num2), operator), 2);
    screen.textContent = result;
}

const toFixedIfNecessary =( value, dp ) => {
    return +parseFloat(value).toFixed( dp );
  }
