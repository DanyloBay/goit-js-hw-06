const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const list = [];

ingredients.forEach(item => {
  const createListOfIngredient = document.createElement('li');
  createListOfIngredient.classList.add('item');
  createListOfIngredient.textContent = item;
  list.push(createListOfIngredient);
  return list;
});

listOfIngredients.append(...list);
