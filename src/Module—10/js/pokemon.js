import pokemonCardTpl from '../../templates/pokemon-card.hbs'

console.log('pokemon');

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    cardContainer2: document.querySelector('.js-card-container-2')
}

fetch('https://pokeapi.co/api/v2/pokemon/2')
.then(response => {
    return response.json()
})
.then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon)
    console.log(markup);
    refs.cardContainer.innerHTML = markup
})
.catch(error => {
    console.log(error);
})

fetch('https://pokeapi.co/api/v2/pokemon/8')
.then(response => {
    return response.json()
})
.then(renderPokemonCard)
.catch(error => {
    console.log(error);
})

function renderPokemonCard(pokemon) {
    const markup2 = pokemonCardTpl(pokemon)
    refs.cardContainer2.innerHTML = markup2
}