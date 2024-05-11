let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

const numArray = []
const secondNumArray = []

const display = document.getElementById('display')



function getNumber(num) {
    if(step === 0 || step === 1){
        numArray.push(num)
        step = 1
        // debugger
        firstNumber = Number(numArray.join (''))
        console.log('firstNumber: ', firstNumber)
        display.value = firstNumber
        console.log('display: ', display)
    } else if (step === 2){
        secondNumArray.push(num)
        // debugger
        secondNumber = Number(secondNumArray.join (''))
        console.log('secondNumber: ', secondNumber)
        display.value = secondNumber
        console.log('display: ', display)
    }
}

function getOperator(op) {
    step = 2
    operation = op
}

const calculateEquals = () => {
    console.log('operation: ', operation)
    if(operation === '+'){
        result = firstNumber + secondNumber
        display.value = result
    }else if (operation === '-'){
        result = firstNumber -  secondNumber
        display.value = result
    }else if (operation === '*'){
        result = firstNumber * secondNumber
        display.value = result
    }else if (operation === '/'){
        result = firstNumber / secondNumber
        display.value = result
    }
}
