const listOfCategory = document.querySelector('#categories');
const listOfCategoryItems = listOfCategory.querySelectorAll('.item');

console.log('Number of categories: ', listOfCategoryItems.length);

listOfCategoryItems.forEach(value => {
  console.log('Category:', value.firstElementChild.textContent);
  console.log('Elements:', value.lastElementChild.children.length);
});
