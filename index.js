class Calculator {
    constructor(currentInput, operator = undefined, previousInput = undefined) {
        this.currentInput = currentInput;
        this.operator = operator;
        this.previousInput = previousInput;
    }

    appendNumber(number) {
        this.currentInput = this.currentInput.toString() + number.toString();
        this.currentInput = Number(this.currentInput);
    }

    setOperator(operator) {
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }

    calculate(){
        const previous = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        let result = 0;
        if (this.operator === '+') {
            result = previous + current;
        } else if (this.operator === '-') {
            result = previous - current;
        } else if (this.operator === '*') {
            result = previous * current;
        } else if (this.operator === '/') { 
            result = previous / current;
        }

        this.currentInput = result;
        this.operator = undefined;
        this.previousInput = undefined;
        console.log(`o resultado é ${result}`);
    }
}

const calculadora1 = new Calculator(25);
calculadora1.appendNumber(5);
calculadora1.setOperator('/');
calculadora1.appendNumber(5);
calculadora1.calculate();

const calculadora2 = new Calculator(4);
calculadora2.appendNumber(5);
calculadora2.setOperator('+');
calculadora2.appendNumber(5);
calculadora2.calculate();

const calculadora3 = new Calculator(4);
calculadora3.appendNumber(5);
calculadora3.setOperator('*');
calculadora3.appendNumber(5);
calculadora3.calculate();

const calculadora4 = new Calculator(4);
calculadora4.appendNumber(5);
calculadora4.setOperator('-');
calculadora4.appendNumber(5);
calculadora4.calculate();
