const calculatorScreen=document.querySelector(".calculator-screen")

const updateScreen =(number) => {
    calculatorScreen.value = number
}


const numbers= document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click",(event) =>{
        updateScreen(event.target.value)
    })
    
})

const decimal=document.querySelectorAll(".decimal")

decimal.forEach((dec) => {
    dec.addEventListener("click",(event) =>{
    currentInput=currentInput+"."
    updateScreen(currentInput)
    })
    
})

let prevInput="0"
let calculationOperator=""
let currentInput="0"

const inputNumber =(number) => {
    if(currentInput==0)
    {
        currentInput=number;
    }
    else
    {
        currentInput +=number;
    }
    
} 

numbers.forEach((number) => {
    number.addEventListener(("click"),(event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

const operators= document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click",(event) =>{
        inputOperator(event.target.value)
    })
        
})

const percentage= document.querySelectorAll(".percentage")

percentage.forEach((operator) => {
    operator.addEventListener("click",(event) => {
        inputOperator(event.target.value)
    })

})

const inputOperator=(operator) => {
    prevInput=currentInput
    calculationOperator=operator
    currentInput="0"
}

const equalSign=document.querySelector(".equal-sign")

equalSign.addEventListener("click",() => {
    calculate()
    updateScreen(currentInput)
})

const calculate = () => {
    let result=0
    switch(calculationOperator) {
        case "+":
            result=parseFloat(prevInput)+parseFloat(currentInput)
            break
        case "-":
            result=parseFloat(prevInput)-parseFloat(currentInput)
            break
        case "*":
            result=parseFloat(prevInput)*parseFloat(currentInput)
            break
        case "%":
            result=parseFloat(prevInput)/100*parseFloat(currentInput) 
            break      
        case "/":
            result=parseFloat(prevInput)/parseFloat(currentInput)
            break  
        default:
            return                
    }
    currentInput=result.toString()
    calculationOperator=""
}

const clearBtn=document.querySelector(".all-clear")

clearBtn.addEventListener("click",() => {
    clearAll()
    updateScreen(currentInput)
})

const clearAll=() => {
    prevInput="0"
    calculationOperator=""
    currentInput="0"
}
