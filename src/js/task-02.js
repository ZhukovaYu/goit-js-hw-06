const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientListEl = document.querySelector('#ingredients');
console.log(ingredientListEl);

const createIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
      ingredientItemEl.classList.add('item');
      ingredientItemEl.textContent = ingredient;
    return ingredientItemEl;
  });
};
 
const listElements = createIngredientsList(ingredients);
ingredientListEl.append(...listElements);
 
 
 