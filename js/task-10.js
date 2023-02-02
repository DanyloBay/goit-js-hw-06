const boxForElements = document.querySelector('#boxes');
const numberOfelements = document.querySelector(
  '#controls input[type="number"]',
);
const createButtonBoxes = document.querySelector('button[data-create]');
const deleteButtonBoxes = document.querySelector('button[data-destroy]');

createButtonBoxes.addEventListener('click', createBoxes);

deleteButtonBoxes.addEventListener('click', destroyBoxes);

function createBoxes() {
  let amount = numberOfelements.value;

  const color = getRandomHexColor();
  let width = 30;
  let height = 30;
  for (let box = 0; box < amount; box += 1) {
    const createBox = document.createElement('div');
    createBox.style.width = width + 'px';
    createBox.style.height = height + 'px';
    createBox.style.backgroundColor = color;

    boxForElements.append(createBox);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxForElements.childNodes.forEach(box => boxForElements.removeChild(box));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
