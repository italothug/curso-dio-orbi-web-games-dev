function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0
}

const meuArray = [1 , 23, 40, 374, 24, 15];

console.log(filtraPares(meuArray))