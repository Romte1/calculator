let a=2;
let b=2;
let operator = "/";

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    if (operator === '+'){
       return add(a,b);
    } else if (operator ==='-'){
        return subtract(a,b);
    } else if (operator ==='*'){
        return multiply(a,b);
    } else if (operator ==='/'){
        return divide(a,b);
    }

}

console.log(operate(operator,a,b));
// console.log(add(a,b));
// console.log(subtract(a,b));
// console.log(multiply(a,b));
// console.log(divide(a,b));

