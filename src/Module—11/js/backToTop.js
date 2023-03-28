// import { icon_pirat } from "./markup.js";
export {scrollFunction,topFunction}

const mybutton = document.querySelector('.back-to-top');
console.log(mybutton);
mybutton.addEventListener('click', topFunction);

mybutton.innerHTML = icon_pirat

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}