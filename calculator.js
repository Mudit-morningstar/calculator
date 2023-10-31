let num1, num2, operator;

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
    switch(operation){
        case "add": 
            add(a,b);
            break;
        case "subtract":
            subtract(a,b);
            break;
        case "multiply":
            multiply(a,b);
            break;
        case "divide":
            divide(a,b);
            break;
    }
}