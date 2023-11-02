let num1 = "", num2 = "", operator = null, result = "";

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
        if(operator === null){
            num1 += (btn.textContent);
            screen.textContent += num1;
        } else {
            num2 += (btn.textContent);
            screen.textContent += num2;
        }
        
    })
})

operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        operator = btn.textContent;
        screen.textContent += operator;
    })
})

equalBtn.addEventListener('click', () => {
    smallDisplay.textContent = screen.textContent
    screen.textContent = operate(Number(num1), Number(num2), operator);
    num1 = operate(Number(num1), Number(num2), operator);
    num2 = "";
    operator = null;

})

clearBtn.addEventListener('click', () => {
    screen.textContent = '';
    smallDisplay.textContent = '';
    num1 = "";
    num2 = "";
    operator = null;
})


