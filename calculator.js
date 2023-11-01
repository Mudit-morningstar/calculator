let num1 = "", num2 = "", operator = null;

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

numBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(operator === null){
            num1 += (btn.textContent);
            screen.textContent = num1;
        } else {
            num2 += (btn.textContent);
            screen.textContent += num2;
        }
        
    })
})

operatorBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        operator = btn.textContent;
        screen.textContent += operator;
    })
})

equalBtn.addEventListener('click', ()=> {
    console.log(operate(Number(num1), Number(num2), operator));
    screen.textContent = operate(Number(num1), Number(num2), operator);
    num1 = "";
    num2 = "";
    operator = null;
})


