const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value; //Isso irá acontecer, array * valor da fruta (array x fruta) multiplicação
    }, thisArg);
}

const nums = [1, 2]; //Esse é o array (arr)

console.log('this -> maçã', mapComThis(nums, maca)); //maca será o thisArg

console.log('this -> laranja', mapComThis(nums, laranja)); //laranja será o thisArg