const result = document.getElementById('result');

function getResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    const resultValue = eval(result.value);
    if (Number.isNaN(resultValue) || !Number.isFinite(resultValue)) {
      throw new Error('Conta inválida');
    }
    result.value = resultValue;
  } catch (error) {
    result.value = 'Expressão inválida';
  }
}


result.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    calculate();
  }
});
