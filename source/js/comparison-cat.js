const input = document.querySelector('.comparison__input');
const comparison = document.querySelector('.comparison__wrapper');
const buttons = document.querySelectorAll('.comparison__button');

input.addEventListener('input', function(evt) {
  const value = input.value + '%';
  comparison.style.setProperty('--comparison', value);
})
