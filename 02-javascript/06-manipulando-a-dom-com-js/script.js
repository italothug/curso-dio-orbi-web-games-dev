function changeMode() {
    changeClasses(); //Troca as cores
    changeText(); //Troca o texto
}

function changeClasses() {
    button.classList.toggle(darkModeClass); //toggle Verifica se no click, a classe dark-mode está ligada ou não
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode'; //const serve para trocar a palavra 'Light Mode' por lightMode no codigo
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)) { //Contains irá ver se tem a tag dark-mode no classlist do button 
        button.innerHTML = lightMode; //innerHTML serve para inserir texto no HTML, e nesse caso, no botão
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode; //Se não, vi acontecer
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode); //Adicionar o evento click na tag button e o elemento changeMode
