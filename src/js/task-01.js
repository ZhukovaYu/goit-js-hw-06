//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, 
//знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
//і кількість елементів в категорії(усіх < li >, 
//вкладених в нього).

const listItems = document.querySelectorAll('.item');

console.log('Number of categories: ', listItems.length);

const categoriesNames = document.querySelectorAll('.item h2');

categoriesNames.forEach(categoriesName => {
    console.log('Category: ', categoriesName.textContent);
    const subCategories = categoriesName.nextElementSibling;
    console.log('Elements: ', subCategories.children.length); 
});





