let numBut = document.querySelectorAll(".numBut");
let display = document.querySelector('.calcDisplay')
let opButs = document.querySelectorAll(".opBut");
let plusBut = document.querySelector('.plusBut')
let minusBut = document.querySelector('.minusBut')
let multiBut = document.querySelector('.multiBut')
let divideBut = document.querySelector('.divideBut')
let equalBut = document.querySelector('.equalBut')
let clearBut = document.querySelector('.clearBut')

let displayNum = [];

let num1 = null;
let num2 = null;
let operateButton;
let continousCalc = false;
let newCalc = false;

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
        //   operateButton = e.target.innerText 
        })
    })
}


function plusClicked () {
    plusBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseFloat(display.innerText)
            display.innerText = '0'
            console.log(num1)
            console.log(` chuj ${operateButton}`)
            operateButton = e.target.innerText
            
        } else if(num1 >= 0) {
                num2 = parseFloat(display.innerText)
                console.log(num2)
                display.innerText = operate(operateButton,num1,num2)
                num1 = operate(operateButton,num1,num2)
                num2 = null
                continousCalc = true;
                newCalc = true;
                operateButton = e.target.innerText
  
        }
       
    })
}

function minusClicked () {
    minusBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseFloat(display.innerText)
            display.innerText = '0'
            console.log(num1)
            operateButton = e.target.innerText
            newCalc = true;
            console.log(parseFloat(display.innerText))
        } else if(num1 >= 0) {
                num2 = parseFloat(display.innerText)
                console.log(num2)
                console.log(` chuj ${operateButton}`)
                display.innerText = operate(operateButton,num1,num2)
                num1 = operate(operateButton,num1,num2)
                num2 = null
                continousCalc = true;
                console.log(parseFloat(display.innerText))
                operateButton = e.target.innerText
                
            
        }
        
    })
}

function multiplyClicked () {
    multiBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseFloat(display.innerText)
            display.innerText = '0'
            console.log(num1)
            operateButton = e.target.innerText
        } else if(num1 >= 0) {
                num2 = parseFloat(display.innerText)
                console.log(num2)
                console.log(` chuj ${operateButton}`)
                display.innerText = operate(operateButton,num1,num2)
                num1 = operate(operateButton,num1,num2)
                num2 = null
                continousCalc = true;
                operateButton = e.target.innerText
            
        }
    })
}

function divideClicked () {
    divideBut.addEventListener('click', (e) =>{
        if(num1 === null){
            num1 = parseFloat(display.innerText)
            display.innerText = '0'
            console.log(num1)
            operateButton = e.target.innerText
        } else if(num1 >= 0) {
                num2 = parseFloat(display.innerText)
                console.log(num2)
                console.log(` chuj ${operateButton}`)
                display.innerText = operate(operateButton,num1,num2)
                num1 = operate(operateButton,num1,num2)
                num2 = null
                continousCalc = true;
                operateButton = e.target.innerText
            
        }
    })
}


function clearClicked() {
    clearBut.addEventListener('click', () => {
        display.innerText = '0'
        num1 = null;
        num2 = null;
    })
}


function equalClicked() {
   
    equalBut.addEventListener('click', () => {
        console.log(`kurwa 1 ${num1}`)
        console.log(`kurwa 2 ${num2}`)
               if(parseFloat(display.innerText) >= 0 ) {
                
               }

               if(num1 === null) {
                num1 = 0;
                display.innerText = operate(operateButton,num1,parseInt(display.innerText))
                console.log(operate(operateButton,num1,parseInt(display.innerText)))
                num1 = null;
                num2 = null;
                continousCalc = true;
               } else {
                display.innerText = operate(operateButton,num1,parseFloat(display.innerText))
                console.log(operate(operateButton,num1,parseFloat(display.innerText)))
                num1 = null;
                num2 = null;
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


            if(parseFloat(display.innerText) === 0){
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
    plusClicked()
    minusClicked()
    multiplyClicked()
    divideClicked()
    clearClicked()
    equalClicked()
}
main()
