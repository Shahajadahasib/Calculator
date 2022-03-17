class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement= currentOperandTextElement
        this.clear()
    }
    clear(){
this.chosseOperation=''
this.previousOperand=''
this.operation = undefined
    }
    detele(){

    }
    appendNumber(number){
       this.currentOperand = number
    }
    chosseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        console.log(this.currentOperand)
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')




const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button =>  {
    button.addEventListener('click', () => { 
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        }
    )
   
    }
)