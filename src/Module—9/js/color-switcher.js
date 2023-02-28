
const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]')
};

refs.start.addEventListener('click', () => {
  
})


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }