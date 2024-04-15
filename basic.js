let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function operation(operator) {
    displayValue += operator;
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1); // Remove last character
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
