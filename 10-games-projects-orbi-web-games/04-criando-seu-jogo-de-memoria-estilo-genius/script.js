let order = []; // Ordem
let clickedOrder = []; // Clicar na ordem
let score = 0; // Todo jogador vai começar com um score

//0 - Verde, 1 - Vermelho, 2 - Amarelo, 3 - Azul

// Está trazendo as classes para o JS
const blue = document.querySelector('.blue'); 
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatória de 1 - 4
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // Ordem de cores
    order[order.length] = colorOrder;
    clickedOrder = [];

    // Acender a cor que corresponde o número sorteado
    for(let i in order) {
        let elementColor = createColorElement(order[i]); // Vai criar um elemento pra cada cor
        lightColor(elementColor, Number(i) + 1); //Vai trazer o número mais 1
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => { // Executa um código dentro daquele tempo estimado
        element.classList.add('selected'); //Vai criar uma classe pra cada vez que ativar
    }, number - 250);
    setTimeout(() => { // Esse vai fazer com que fique ativo por um tempo, depois apagar
        element.classList.remove('selected');
    })
}

//Checa se os botões clicados estão em ordem correta
let checkOrder = () => {
    for(let i in clickedOrder) {// Para cada i dentro do nosso clickedOrder
        if(clickedOrder[i] != order[i]){ // Se o nosso clickedOrder na posição i for diferente do nosso order na posição i, a gente vai rodar a seguinte função
            gameOver();
            break; // Para interação
        }
    }
    if(clickedOrder.length == order.length) { // Se os dois forem iguais, irá dizer a pontuação atual
        alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!');
        nextLevel();
    }
}

//Função de clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color; // O clickedOrder na posição que ele foi clicado, será a cor atribuida
    createColorElement(color).classList.add('selected');

    setTimeout(() => { // Será para retirar a classe que a gente acabou de clicar
        createColorElement(color).classList.remove('selected');
        checkOrder(); // Após acabar o click, será chamado essa função para checar se está certo
    }, 250);
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

// Função para próximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para game over
let gameOver = () => {
    alert('Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.');
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo!')
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

/* green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3)); */