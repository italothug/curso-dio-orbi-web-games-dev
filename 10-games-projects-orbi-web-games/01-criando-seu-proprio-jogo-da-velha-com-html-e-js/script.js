var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado'); // Pegar lá no html o id do jogador-selecionado
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X'); //Esse é o jogador inicialmente

function escolherQuadrado(id){

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id); // Pegar lá no html o id do quadrado
    if (quadrado.innerHTML !== '-') { //se o elemento for igual á "-" continua, se for diferente, é pra retornar e não fazer os seguintes comandos
        return;
    }

    quadrado.innerHTML = jogador; //quando clicar no quadrado, o elemento jogador será mandado para o html
    quadrado.style.color = '#000'; //quando clicar no quadrado, a cor da galera será mudado para preto

    if (jogador === 'X') { //checando se o jogador é idêntico a X
        jogador = 'O'; //se o jogador foi idêntico, vai mudar para O
    } else {
        jogador = 'X'; //se o jogador for nulo, mudará para X
    }

    mudarJogador(jogador);
    checkVencedor();
}

function mudarJogador(valor) { //valor do jogador, no caso X
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checkSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCor(quadrado1,quadrado2,quadrado3);
        mudaVencedor(quadrado1);
        return;
    }

    if (checkSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCor(quadrado4,quadrado5,quadrado6);
        mudaVencedor(quadrado4);
        return;
    }

    if (checkSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCor(quadrado1,quadrado4,quadrado7);
        mudaVencedor(quadrado7);
        return;
    }

    if (checkSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCor(quadrado7,quadrado8,quadrado9);
        mudaVencedor(quadrado7);
        return;
    }

    if (checkSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCor(quadrado2,quadrado5,quadrado8);
        mudaVencedor(quadrado2);
        return;
    }

    if (checkSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCor(quadrado3,quadrado6,quadrado9);
        mudaVencedor(quadrado3);
        return;
    }

    if (checkSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCor(quadrado1,quadrado5,quadrado9);
        mudaVencedor(quadrado1);
        return;
    }

    if (checkSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCor(quadrado3,quadrado5,quadrado7);
        mudaVencedor(quadrado3);
        return;
    }

}

function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checkSequencia(quadrado1,quadrado2,quadrado3) {
    var eIgual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;
    }

    return eIgual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; 1 <= 9; i++) { //Checa quadrado por quadrado
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#e0e0e0';
        quadrado.style.color = '#e0e0e0';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}