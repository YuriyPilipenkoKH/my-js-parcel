console.log('handlebars');

// const myColors = require('./colors.json');
// console.log(myColors);

import colorCardTpl from '../../templates/color-card.hbs'
import colorCardsTpl from '../../templates/color-cards.hbs'
import colorInputTpl from '../../templates/color-input.hbs'
import colors from './colors.json'
import '../css/handlebars.css'

// console.log(colors);
// console.log(colorCardTpl(colors[0]));
// console.log(colorInputTpl);


//-------------------colorpicker------------------------------
const paletteContainer = document.querySelector('.js-palette')




const cardsMarkup = createColorCardsMarkup(colors)

paletteContainer.insertAdjacentHTML('beforebegin',colorInputTpl())
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)

paletteContainer.addEventListener('click', onPaletteContainerClick )

const refs = {
   
    cardsAmount: document.querySelector('.amount'),
    form: document.querySelector('.js-form')

}

// console.log(createColorCardsMarkup(colors))
refs.form.addEventListener('submit', onUpdate)

function onUpdate(e) {
    e.preventDefault()
    console.log(e.currentTarget.elements.amount.value);
    // const colorsAmount = e.currentTarget.elements.amount.value

    // renderCards(colorsAmount)
    refs.form.reset()
}


//* refactored
function createColorCardsMarkup (colors) {
    return colors.map(color => colorCardTpl(color)).join('') //*  /color-card.hbs'
    // return colorCardsTpl(colors)  //* /color-cards.hbs'
}



function onPaletteContainerClick(e) {
   if(!e.target.classList.contains('color-swatch'))  {
    return
   }
   const swatchEl = e.target;
   const parentColorCard = swatchEl.closest('.color-card') 

    removeActiveCardClass();
    addActiveCardClass(parentColorCard )
    setBodyColor(swatchEl.dataset.hex);
}  

function setBodyColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
   if(currentActiveCard) {
    currentActiveCard.classList.remove('is-active')
   }
}

function addActiveCardClass (card) {
    card.classList.add('is-active')
    
}




