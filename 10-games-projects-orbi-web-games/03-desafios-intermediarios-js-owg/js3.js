// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let linhas = parseInt(gets());

//TODO: Complete os espaços em branco com uma solução possível para o problema.

let a,b;

for (let i = 1; i <= linhas; i++) {
  let a =i * i;
  let b =i * i * i;

  console.log(i, a, b)
}

/* Desafio
Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

Entrada
O arquivo de entrada contém um número inteiro positivo N.

Saída
Imprima a saída conforme o exemplo fornecido. */