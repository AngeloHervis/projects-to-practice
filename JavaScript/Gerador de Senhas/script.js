const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const form = document.querySelector('.form');
const generateButton = document.querySelector('#generate');
const copyButton = document.querySelector('#copy');
const passwordInput = document.querySelector('#password');

generateButton.addEventListener('click', () => {
  const length = document.querySelector('#length').value;
  const includeUppercase = document.querySelector('#uppercase').checked;
  const includeLowercase = document.querySelector('#lowercase').checked;
  const includeNumbers = document.querySelector('#numbers').checked;
  const includeSymbols = document.querySelector('#symbols').checked;

  let characters = '';
  if (includeUppercase) {
    characters += uppercaseLetters;
  }
  if (includeLowercase) {
    characters += lowercaseLetters;
  }
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSymbols) {
    characters += symbols;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordInput.value = password;
});

copyButton.addEventListener('click', () => {
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Senha copiada para a área de transferência!');
});
