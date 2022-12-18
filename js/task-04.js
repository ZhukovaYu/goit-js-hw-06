//Cтвори змінну counterValue, в якій буде зберігатися
//поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, 
//всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

 
const btnIncrement = document.querySelector(
    "#counter button[data-action='increment']");
  
const btnDecrement = document.querySelector(
    "#counter button[data-action='decrement']");
  
const counter = document.querySelector('#counter #value');

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
