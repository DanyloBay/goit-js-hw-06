const inputText = document.querySelector('#name-input');
const inputSpanValue = document.querySelector('#name-output');

inputText.addEventListener(
  'input',
  event =>
    (inputSpanValue.textContent =
      event.currentTarget.value === ''
        ? 'Anonymous'
        : event.currentTarget.value),
);
