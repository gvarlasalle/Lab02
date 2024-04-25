let displayValue = '';
let stack = [];

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  const equation = displayValue;
  let result;

  // Verificar si es una ecuación o una asignación
  if (equation.includes('=')) {
    const parts = equation.split('=');
    const variable = parts[0].trim();
    const expression = parts[1].trim();
    result = eval(expression);
    stack.push({ operation: equation, result: result, variable: variable });
  } else {
    result = eval(equation);
    stack.push({ operation: equation, result: result });
  }

  displayValue = '';
  document.getElementById('display').value = result;
  updateStack();
}

function undo() {
  if (displayValue.length > 0) {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function updateStack() {
  const stackList = document.getElementById('stack-list');
  stackList.innerHTML = '';
  stack.forEach((item, index) => {
    const li = document.createElement('li');
    if (item.variable) {
      li.textContent = `${item.variable} = ${item.result}`;
    } else {
      li.textContent = `${item.operation} = ${item.result}`;
    }
    li.onclick = () => {
      displayValue = stack[index].operation;
      document.getElementById('display').value = displayValue;
    };
    stackList.appendChild(li);
  });
}
