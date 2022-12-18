//Напиши скрипт, який під час набору тексту 
//в інпуті input#name - input(подія input), 
//підставляє його поточне значення 
//в span#name - output.Якщо інпут порожній, 
//у спані повинен відображатися рядок "Anonymous".


const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

textInput.addEventListener('input', (event) => {
  output.textContent = textInput.value === '' ? 'Anonymous' : textInput.value;
});
 
 