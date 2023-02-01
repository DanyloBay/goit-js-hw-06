const checkOnType = document.querySelector('#validation-input');
const validationLength = checkOnType.dataset.length;

checkOnType.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (checkOnType.value.length === parseInt(validationLength)) {
    checkOnType.classList.add('valid');
    checkOnType.classList.replace('invalid', 'valid');
  } else {
    checkOnType.classList.add('invalid');
    checkOnType.classList.replace('valid', 'invalid');
  }
}
