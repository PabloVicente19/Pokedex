const $form = document.getElementById('form')
const $input = document.getElementById('input')
const $card = document.createElement('section')
const url = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async (id) => {
    const response = await fetch(url + id)
    const data = await response.json() 
    return data;
};
const createCardPokemon = (pokemon) => {
    const type = pokemon.types.map( (tipo) => tipo.type.name).join(" / ");
    const img = 
    pokemon.sprites.other.dream_world.front_default || 
    pokemon.sprites.other.home.front_default 

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
        <span>${changeUnits(pokemon.height)} Cm</span>
        <h2> Peso: </h2>
        <span>${changeUnits(pokemon.weight)} Kg</span>
    </section>
    `
}
const showEmptyError = () => {
    return main.innerHTML = 
    `
    <div class="card-conteiner">
    <img src="./src/img/error.png" >
        <h1> ¡ Ingrese un Número ! </h1>
    </div>` ;
}
const showError = () => {
    return main.innerHTML = 
    `
    <div class="card-conteiner">
    <img src="./src/img/catch.png" >
        <h1> ¡ No Existe ese Pokémon ! </h1>
    </div>` ;
}
const changeUnits = (value) => {
    return value / 10
}
const removeCard = () =>{
    setTimeout(()=>{
        return main.innerHTML = "";
    },1500)
}
const searchPokemon = async (e) => {
    e.preventDefault();

    const idValue = $input.value;

    const poke = await getPokemon(idValue)
    .catch( () => {
        showError(),
        removeCard(),
        $form.reset() } )
 
    if(!idValue){
        showEmptyError();
        removeCard()
        return;
    }
    
    createCardPokemon(poke);
    $form.reset();
};
const init = () => {$form.addEventListener('submit', searchPokemon)};

init();