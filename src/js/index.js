const $form = document.getElementById('form');
const $input = document.getElementById('input');
const $cardContainer = document.querySelector('.main-container');
const url = 'https://pokeapi.co/api/v2/pokemon/';


const getPokemon = async (id) => {
    try {
        const res = await fetch(url + id);
        const data = await res.json();
        return data;
    } catch  {
        showError();
    }
}

const createCard = async (pokemon) => {
    const img = pokemon.sprites.other.dream_world.front_default;
    const {name} = pokemon;
    return $cardContainer.innerHTML = `
        <div class="card-container">
            <div class="card-img-container">
                <img class="card-img" src="${img}" alt="${name}">
            </div>
            <div class="card-name-container">
            <h2 class="card-name">${name}</h2>
            </div>
        </div>`;
}

const showEmptyError =   () => {
    return $cardContainer.innerHTML = `
        <div class="card-conteiner">
            <img src="./src/img/error.png" >
            <h2> ¡Ingrese un Número! </h2>
        </div>`;
}

const showError = () => {
    return $cardContainer.innerHTML = `
        <div class="card-error-container">
            <img src="./src/img/catch.png" >
            <h2> ¡No Existe ese Pokémon! </h2>
        </div>` ;
}

const searchPokemon = async (e) => {
    e.preventDefault(e)
    
    const idValue = $input.value.trim();
    const pokemon =   await getPokemon(idValue);
    
    if(!idValue){
        return showEmptyError();
    }else if(pokemon){
        createCard(pokemon);
        return $form.reset();
    }else{
        return showError();
    }
}

 const init = () => $form.addEventListener('submit', searchPokemon);

 init();