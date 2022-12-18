 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const changeBtnEl = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color');

const onBtnColorChange = event => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  backgroundColor.textContent = randomColor;
};

changeBtnEl.addEventListener('click', onBtnColorChange);

