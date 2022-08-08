const input = document.querySelector('.comparison__input');
const comparison = document.querySelector('.comparison__wrapper');
const buttons = document.querySelectorAll('.comparison__button');
const rangeInput = document.querySelectorAll('.comparison__input')

input.addEventListener('input', function(evt) {
  const value = (100 - input.value) + '%';
  comparison.style.setProperty('--comparison', value);
})

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  }
  const min = target.min
  const max = target.max
  const val = target.value

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInput.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

for(btn of buttons) {
  btn.addEventListener('click', (evt) => {
    const btnDtValue = evt.target.dataset.value;
    comparison.style.setProperty('--comparison', btnDtValue);
    input.value = btnDtValue;
    document.getElementById('range').style.backgroundSize = btnDtValue + '% 100%';
  })
}
