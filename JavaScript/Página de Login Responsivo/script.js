const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'angelo.hervis@gmail.com' && senha === '123456') {
    window.location.href = 'https://www.google.com';
  } else {
    alert('E-mail ou senha inválidos!');
  }
});
