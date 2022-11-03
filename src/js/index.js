/*
👉 Crear un input de tipo number ,un botón y un contenedor vacío tal como hicimos en las entregas anteriores.

👉 Con el número que se ponga, hacer una llamada a la pokeapi y renderizar una card con los datos del Pokémon encontrado. Lo mínimo que deberá tener la card es el nombre, su tipo principal (pueden intentar poner todos) , su altura y peso (expresada en metros y kilogramos, tendrán que dividir el alto y peso que les llegue por 10), y una de sus imágenes.

👉 En caso de que no se encuentre ningún pokemon, renderizar un mensaje de error. En caso de que no se ingrese un número, renderizar otro mensaje de error acorde.

*/
const $form = document.getElementById('form')
const $input = document.getElementById('input')
const $card = document.createElement('section')
const url = 'https://pokeapi.co/api/v2/pokemon/';


const getPokemon = async (id) => {
    const responde = await fetch(url + id);
    const data = await responde.json();
    return data;
};

const showEmptyError = () => {
    return main.innerHTML = 
    `
    <div class="card-conteiner">
    <img src="./src/img/error.png" >
        <h1> ¡ Ingrese un Número ! </h1>
    </div>` ;
}
const createCardPokemon = (pokemon) => {
    const type = pokemon.types.map( (tipo) => tipo.type.name);

    const img = 
    pokemon.sprites.other.dream_world.front_default || 
    pokemon.sprites.other.home.front_default;

    main.innerHTML = `
    <section class="card-conteiner">
        <div class="img-container"> 
            <img src=${img}>
        </div>
        <h2> Nombre: </h2>
        <span>${pokemon.name}</span>
        <h2> Tipo: </h2>
        <span>${type}</span>
        <h2> Altura: </h2>
        <span>${pokemon.height}</span>
        <h2> Peso: </h2>
        <span>${pokemon.weight}</span>
    </section>
    `
}

const searchPokemon = async (e) => {
    e.preventDefault();
    const idValue = $input.value;

    if(!idValue){
        showEmptyError()
        return
    }

    const poke = await getPokemon(idValue)
    createCardPokemon(poke)
    console.log(poke)
    $form.reset()
};
const init = () => {$form.addEventListener('submit', searchPokemon)} ;
init();