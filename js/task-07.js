const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeInputFontSize);

function changeInputFontSize() {
  console.log((textEl.style.fontSize = inputEl.value + 'px'));
}
