const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const createListOfIngredient = document.createElement('li');
  createListOfIngredient.classList.add('item');
  createListOfIngredient.textContent = item;
  listOfIngredients.appendChild(createListOfIngredient);
});
