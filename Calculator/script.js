// Define a class named Calculator
class Calculator {
    // Define the constructor method for the Calculator class
      constructor() {
        // Initialize the calculator display elements
        this.previousOperandElement = document.getElementById("previous-operand")
        this.currentOperandElement = document.getElementById("current-operand")
        this.display = document.getElementById("display")
        this.clearButton = document.getElementById("clear")
        this.signButton = document.getElementById("sign")
        this.percentButton = document.getElementById("percent")
        this.divideButton = document.getElementById("divide")
        this.sevenButton = document.getElementById("seven")
        this.eightButton = document.getElementById("eight")
        this.nineButton = document.getElementById("nine")
        this.multiplyButton = document.getElementById("multiply")
        this.fourButton = document.getElementById("four")
        this.fiveButton = document.getElementById("five")
        this.sixButton = document.getElementById("six")
        this.subtractButton = document.getElementById("subtract")
        this.oneButton = document.getElementById("one")
        this.twoButton = document.getElementById("two")
        this.threeButton = document.getElementById("three")
        this.addButton = document.getElementById("add")
        this.zeroButton = document.getElementById("zero")
        this.decimalButton = document.getElementById("decimal")
        this.equalsButton = document.getElementById("equals")
    
        // Set default values for the current and previous operands and operation
        this.currentOperand = "0"
        this.previousOperand = ""
        this.operation = undefined
    
        // Update the calculator display
        this.updateDisplay()
       
      }
      // Define the method to clear the calculator
      clear() {
        this.currentOperand = "0"
        this.previousOperand = ""
        this.operation = undefined
      }
    
      // Define the method to delete the last digit from the current operand
      delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
      }
      // Define the method to append a new number to the current operand
      appendNumber(number) {
        // Check for duplicate decimal points
        if (number === "." && this.currentOperand.includes(".")) return
    
        // Replace 0 with the new number if the current operand is 0
        if (this.currentOperand === "0" && number !== ".") {
          this.currentOperand = number
        } else {
          // Append the new number to the current operand
          this.currentOperand += number
        }
      }
    
      // Define the method to choose an operation
      chooseOperation(operation) {
        // Don't allow operation selection if current operand is empty
        if (this.currentOperand === "") return
    
        // Perform the previous operation if one exists
        if (this.previousOperand !== "") {
          this.compute()
        }
    
        // Set the new operation and move the current operand to the previous operand
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
        // Update the calculator display
        this.updateDisplay()
      }
      // Define the method to compute the result of the current operation
      compute() {
        // Initialize variables for the previous and current operands
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
    
        // Don't allow computation if either operand is NaN
        if (isNaN(prev) || isNaN(current)) return
    
        // Perform the appropriate operation based on the selected operation
        switch (this.operation) {
          case "+":
            computation = prev + current
            break
          case "-":
            computation = prev - current
            break
          case "*":
            computation = prev * current
            break
          case "/":
            computation = prev / current
            break
          default:
            return
        }
    
        // Update the current operand with the computed result and reset the operation and previous operand
        this.currentOperand = computation.toString()
        this.operation = undefined
        this.previousOperand = ""
      }
      // Define the method to format a number for display on the calculator
      getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1]
        let integerDisplay
        
        if (isNaN(integerDigits)) {
          integerDisplay = ""
        } else {
          integerDisplay = integerDigits.toLocaleString("en", {
            maximumFractionDigits: 0,
          })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }
    
      // Define the method to update the calculator display
      updateDisplay() {
        // Display the appropriate content based on whether an operation has been selected
        if (this.operation != null) {
          this.display.value = `${this.getDisplayNumber(this.previousOperand)} ${this.operation} ${this.currentOperand ? this.currentOperand : ''}`
        } else {
          this.display.value = this.getDisplayNumber(this.currentOperand)
        }
      }
     }
    
     // Create a new instance of the Calculator class
    const calculator = new Calculator()
    
    
    // Add event listeners for each button to update the calculator display based on user input
    calculator.clearButton.addEventListener("click", () => {
      calculator.clear()
      calculator.updateDisplay()
    })
    
    calculator.signButton.addEventListener("click", () => {
      calculator.currentOperand = calculator.currentOperand * -1
      calculator.updateDisplay()
    })
    
    calculator.percentButton.addEventListener("click", () => {
      calculator.currentOperand = calculator.currentOperand / 100
      calculator.updateDisplay()
    })
    
    calculator.divideButton.addEventListener("click", () => {
      calculator.chooseOperation("/")
      calculator.updateDisplay()
    })
    
    calculator.multiplyButton.addEventListener("click", () => {
      calculator.chooseOperation("*")
      calculator.updateDisplay()
    })
    
    calculator.subtractButton.addEventListener("click", () => {
      calculator.chooseOperation("-")
      calculator.updateDisplay()
    })
    
    calculator.addButton.addEventListener("click", () => {
      calculator.chooseOperation("+")
      calculator.updateDisplay()
    })
    
    calculator.equalsButton.addEventListener("click", () => {
      calculator.compute()
      calculator.updateDisplay()
    })
    
    calculator.zeroButton.addEventListener("click", () => {
      calculator.appendNumber("0")
      calculator.updateDisplay()
    })
    
    calculator.oneButton.addEventListener("click", () => {
      calculator.appendNumber("1")
      calculator.updateDisplay()
    })
    
    calculator.twoButton.addEventListener("click", () => {
      calculator.appendNumber("2")
      calculator.updateDisplay()
    })
    
    calculator.threeButton.addEventListener("click", () => {
      calculator.appendNumber("3")
      calculator.updateDisplay()
    })
    
    calculator.fourButton.addEventListener("click", () => {
      calculator.appendNumber("4")
      calculator.updateDisplay()
    })
    
    calculator.fiveButton.addEventListener("click", () => {
      calculator.appendNumber("5")
      calculator.updateDisplay()
    })
    
    calculator.sixButton.addEventListener("click", () => {
      calculator.appendNumber("6")
      calculator.updateDisplay()
    })
    
    calculator.sevenButton.addEventListener("click", () => {
      calculator.appendNumber("7")
      calculator.updateDisplay()
    })
    
    calculator.eightButton.addEventListener("click", () => {
      calculator.appendNumber("8")
      calculator.updateDisplay()
    })
    
    calculator.nineButton.addEventListener("click", () => {
      calculator.appendNumber("9")
      calculator.updateDisplay()
    })
    
    calculator.decimalButton.addEventListener("click", () => {
      calculator.appendNumber(".")
      calculator.updateDisplay()
    })