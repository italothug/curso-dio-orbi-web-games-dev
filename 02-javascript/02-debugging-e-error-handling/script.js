function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");
        //Se array ou o número não forem enviados, lance um erro do tipo ReferenceError
        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        //Se o array não for do tipo 'object', lance um erro do tipo TypeError
        if (typeof num !== 'number') throw new TypeError("Array precisa ser do tipo número");
        //Se o número não for do tipo 'number', lance um erro do tipo TypeError
        if (arr.lenght !== num) throw new RangeError('Tamanho invalido');
        //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
        //Se esse erro for um ReferenceError então, eu quero que apareça o que este Erro significa e a mensagem
            console.log("Este erro é um ReferenceError")
            console.log (e.message)
        }   else if (e instanceof TypeError) {
            //Se esse erro for um TypeError então, eu quero que apareça o que este Erro significa e a mensagem
            console.log("Este erro é um TypeError")
            console.log (e.message)
        }   else if (e instanceof RangeError) {
            //Se esse erro for um RangeError então, eu quero que apareça o que este Erro significa e a mensagem
            console.log("Este erro é um RangeError")
            console.log (e.message)
        }   else {
            console.log("Erro inesperado:"+ e)
        }
    }
}

console.log(validaArray(5));