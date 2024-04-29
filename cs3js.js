let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function operation(operator) {
    if (displayValue !== '') {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    if (displayValue !== '') {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = '';
    }
}
