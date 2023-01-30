const counterButtons = document.querySelectorAll('#counter button');

const counterNumber = document.querySelector('#value');
let counterValue = 0;

counterButtons[0].addEventListener('click', counterSubtractOne);
counterButtons[1].addEventListener('click', counterAddOne);

function counterSubtractOne() {
  window.addEventListener('keydown', onPlusMinusClick);
  counterValue -= 1;
  counterNumber.textContent = counterValue;
}

function counterAddOne() {
  window.addEventListener('keydown', onPlusMinusClick);
  counterValue += 1;
  counterNumber.textContent = counterValue;
}

function onPlusMinusClick(event) {
  if (event.key === '-') {
    counterSubtractOne();
  } else if (event.key === '+') {
    counterAddOne();
  }
}
