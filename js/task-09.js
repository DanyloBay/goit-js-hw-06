const button = document.querySelector('.change-color');
const textColorSpan = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textColorSpan.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
