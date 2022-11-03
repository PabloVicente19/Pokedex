const content = document.getElementById('app')

// Creacion de la NavBar
const header = document.createElement('header');
    header.className = 'container';

const logoContent = document.createElement('div');
    logoContent.className = 'logo-content'
    logoContent.innerHTML = `<img  src="./src/img/logo.png" alt="Logo">`

const form = document.createElement('form');
    form.className = 'form-content';
    form.id = 'form';

const input = document.createElement('input');
    input.className = 'form-input-search';
    input.type = 'number';
    input.id = 'input';
    input.placeholder = 'Ingrese un Número';

const btn = document.createElement('button');
    btn.id = 'btn';
    btn.className = "form-btn-submit";
    btn.textContent = 'Buscar Pokémon';

form.append(input, btn);
header.append(logoContent,form);
content.appendChild(header);

const main = document.createElement('main');
main.className = 'results-container';

content.appendChild(main)
