//Напиши скрипт, який реагує на зміну значення 
//input#font - size - control(подія input) і 
//змінює інлайн - стиль span#text, оновлюючи 
//властивість font - size.В результаті, 
//перетягуючи повзунок, буде змінюватися розмір тексту.


const fontSizeControlEl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

const onInputText = () => {
  inputText.style.fontSize = `${fontSizeControlEl.value}px`;
};

fontSizeControlEl.addEventListener("input", onInputText)

 