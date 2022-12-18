// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість символів повинна бути в інпуті, 
//зазначається в його атрибуті data - length.
//Якщо введена правильна кількість символів, 
//то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length);
 
 const onInputElBlur = () => {
    if (inputEl.value.length === inputLength) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }
    else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}

inputEl.addEventListener("blur", onInputElBlur);
   