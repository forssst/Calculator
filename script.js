let numBut = document.querySelectorAll(".numBut");
let display = document.querySelector('.calcDisplay')
let opButs = document.querySelectorAll(".opBut");

let displayNum = [];

let num1 = 0;
let num2 = 0;
let operateButton = 0;

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




function updateDisplay() {
    numBut.forEach(but => {
        but.addEventListener('click', (e) => {
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
}
main()
