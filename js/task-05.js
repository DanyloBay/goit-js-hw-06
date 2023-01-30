const inputText = document.querySelector('#name-input');

const inputSpanValue = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
  if (event.currentTarget.value === ' ') {
    inputSpanValue.textContent = 'Anonymous';
  } else {
    inputSpanValue.textContent = event.currentTarget.value;
  }
});
