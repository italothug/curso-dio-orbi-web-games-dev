function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current; //Valor anterior + valor atual
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));