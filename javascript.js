var operator = '', firstNumber = 0, secondNumber = 0;
const display = document.querySelector('.display');
const calcCle = document.querySelector('.calcCle');
const calcEqu = document.querySelector('.calcEqu');
const calcNum = document.querySelectorAll('.calcNum');
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

calcNum.forEach((num) => {

    num.addEventListener('click', () => {
        if (display.textContent.length > 11){
            return
        }
        if (display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/'){
            operator = display.textContent;
            display.textContent = '';
        }
        display.textContent +=num.textContent;
    })
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
        display.textContent ='*';          
    } else {
    firstNumber += parseFloat(display.textContent);
    display.textContent ='*';
    } 
})

calcDiv.addEventListener('click', () => {
    if (isNaN(display.textContent)){
        return
    } else if (operator == '/') {
        firstNumber /= parseFloat(display.textContent);
        display.textContent ='/';          
    } else {
    firstNumber += parseFloat(display.textContent);
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
       return a+b;
    } else if (operator ==='-'){
        return a-b;
    } else if (operator ==='*'){
        return a*b;
    } else if (operator ==='/'){
        return a/b;
    }

}