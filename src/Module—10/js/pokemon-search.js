import pokemonCardTpl from '../../templates/pokemon-card.hbs'
import '../css/common.css'

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form'),
}


refs.searchForm.addEventListener('submit', onSearch)

function onSearch(e) {
    e.preventDefault()

    const form = e.currentTarget
    const searchQuery = form.elements.query.value
    console.log(searchQuery);
     
    fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(error => console.log(error))
    .finally(() => form.reset())
}

function fetchPokemon(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
       
        return response.json()
    })
    
}

function renderPokemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon)
    refs.cardContainer.innerHTML = markup
}