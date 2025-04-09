let numBut = document.querySelectorAll(".numBut");
let display = document.querySelector('.calcDisplay')
let opButs = document.querySelectorAll(".opBut");
let plusBut = document.querySelector('.plusBut')
let minusBut = document.querySelector('.minusBut')
let multiBut = document.querySelector('.multiBut')
let divideBut = document.querySelector('.divideBut')

let displayNum = [];

let num1 = null;
let num2 = null;
let operateButton = 0;
let continousCalc = false;

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function operate(operator,num1,num2){
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return substract(num1,num2)
        case "*":
            return multiply(num1,num2)
        case "/":
            return divide(num1,num2)
        default:
            alert('something went wrong')
    }
}


function getOperateButton() {
    opButs.forEach(opBut => {
        opBut.addEventListener('click', (e) => {
          operateButton = e.target.innerText
          console.log(operateButton)
        })
    })
}


function plusClicked () {
    plusBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseInt(display.innerText)
            display.innerText = '0'
            console.log(num1)
        } else if(num1 >= 0) {
                num2 = parseInt(display.innerText)
                console.log(num2)
                display.innerText = operate("+",num1,num2)
                num1 = operate("+",num1,num2)
                num2 = null
                continousCalc = true;
                
            
        }
    })
}

function minusClicked () {
    minusBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseInt(display.innerText)
            display.innerText = ''
            console.log(num1)
        } else if(num1 >= 0) {
                num2 = parseInt(display.innerText)
                console.log(num2)
                display.innerText = operate("-",num1,num2)
                num1 = operate("+",num1,num2)
                num2 = null
                continousCalc = true;
            
        }
    })
}

function multiplyClicked () {
    multiBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseInt(display.innerText)
            display.innerText = ''
            console.log(num1)
        } else if(num1 >= 0) {
                num2 = parseInt(display.innerText)
                console.log(num2)
                display.innerText = operate("*",num1,num2)
                num1 = operate("+",num1,num2)
                num2 = null
                continousCalc = true;
            
        }
    })
}

function divideClicked () {
    divideBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseInt(display.innerText)
            display.innerText = ''
            console.log(num1)
        } else if(num1 >= 0) {
                num2 = parseInt(display.innerText)
                console.log(num2)
                display.innerText = operate("/",num1,num2)
                num1 = operate("+",num1,num2)
                num2 = null
                continousCalc = true;
            
        }
    })
}











function updateDisplay() {
    numBut.forEach(but => {
        but.addEventListener('click', (e) => {

            if(continousCalc === true){
                display.innerText = 0;
                continousCalc = false;
            }

            
            if(parseInt(display.innerText) === 0){
                display.innerText = '';
            }

           


            display.innerText += e.target.innerText
        })
    })
}



console.log(operate("+",1,4))
console.log(operate("-",1,4))
console.log(operate("*",1,4))
console.log(operate("/",1,4))

function main(){
    updateDisplay()
    getOperateButton()
    plusClicked()
    minusClicked()
    multiplyClicked()
    divideClicked()
}
main()
