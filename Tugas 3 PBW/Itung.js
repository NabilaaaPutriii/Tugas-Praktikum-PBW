const appendToDisplay = value => {
  document.getElementById('display').value += value;
}

const clearDisplay = () => {
  document.getElementById('display').value = '';
}

const calculate = () => {
  const expression = document.getElementById('display').value;
  try {
      const result = eval(expression);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

const operators = ['+', '-', '*', '/', '%'];
operators.forEach(operator => {
  document.getElementById(operator).addEventListener('click', () => {
      appendToDisplay(operator);
  });
});