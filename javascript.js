var operator = '', firstNumber = 0, secondNumber = 0;
const display = document.querySelector('.display');
const calcCle = document.querySelector('.calcCle');
const calcEqu = document.querySelector('.calcEqu');
const calcNum0 = document.querySelector('.calcNum0');
const calcNum1 = document.querySelector('.calcNum1');
const calcNum2 = document.querySelector('.calcNum2');
const calcNum3 = document.querySelector('.calcNum3');
const calcNum4 = document.querySelector('.calcNum4');
const calcNum5 = document.querySelector('.calcNum5');
const calcNum6 = document.querySelector('.calcNum6');
const calcNum7 = document.querySelector('.calcNum7');
const calcNum8 = document.querySelector('.calcNum8');
const calcNum9 = document.querySelector('.calcNum9');
const calcDot = document.querySelector('.calcDot');
const calcSum = document.querySelector('.calcSum');
const calcSub = document.querySelector('.calcSub');
const calcMul = document.querySelector('.calcMul');
const calcDiv = document.querySelector('.calcDiv');

calcCle.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
})

calcNum0.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='0';
})

calcDot.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    let onlyOneDotChecker = display.textContent;
    !onlyOneDotChecker.includes('.') ?
    display.textContent +='.' : display.textContent +='';
})

calcNum1.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='1';
})

calcNum2.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='2';
})

calcNum3.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='3';
})

calcNum4.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='4';
})

calcNum5.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='5';
})

calcNum6.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='6';
})

calcNum7.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='7';
})

calcNum8.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='8';
})

calcNum9.addEventListener('click', () => {
    if (display.textContent.length > 11){
        return
    }
    if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
        operator = display.textContent;
        display.textContent = '';
    }
    display.textContent +='9';
})

calcSum.addEventListener('click', () => {
    if (isNaN(display.textContent)){
        return
    } else {
        firstNumber += parseFloat(display.textContent);
        display.textContent ='+';
    }
})

calcSub.addEventListener('click', () => {
    if (isNaN(display.textContent)){
        return
    } else if (operator == '-') {
        firstNumber -= parseFloat(display.textContent);
        display.textContent ='-';          
    } else {
    firstNumber += parseFloat(display.textContent);
    display.textContent ='-';
    } 
})

calcMul.addEventListener('click', () => {
    if (isNaN(display.textContent)){
        return
    } else if (operator == '*') {
        firstNumber *= parseFloat(display.textContent);
        console.log(firstNumber);
        display.textContent ='*';          
    } else {
    firstNumber += parseFloat(display.textContent);
    console.log(firstNumber);
    display.textContent ='*';
    } 
})

calcDiv.addEventListener('click', () => {
    if (isNaN(display.textContent)){
        return
    } else if (operator == '/') {
        firstNumber /= parseFloat(display.textContent);
        console.log(firstNumber);
        display.textContent ='/';          
    } else {
    firstNumber += parseFloat(display.textContent);
    console.log(firstNumber);
    display.textContent ='/';
    } 
})


calcEqu.addEventListener('click', () => {
    if (isNaN(display.textContent)){
        return
    }       
    if (operator === '') {
        return;
    }
    secondNumber = parseFloat(display.textContent);
    if (operator == '') {
        return
    }
    if (secondNumber == 0 && operator == '/'){
        display.textContent = "That's Illegal!";
        return
    }
    let finalRes = operate(operator, firstNumber, secondNumber);
    finalRes % 1 === 0 ? display.textContent = parseInt(finalRes) : display.textContent = parseFloat(finalRes).toFixed(3);
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
})


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
// console.log(add(a,b));
// console.log(subtract(a,b));
// console.log(multiply(a,b));
// console.log(divide(a,b));

