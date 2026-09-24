// 705.484.450-52 && 070.987.720-03
/*

7   0  5  4  8  4  4  5  0
x   x  x  x  x  x  x  x  x
10  9  8  7  6  5  4  3  2
=   =  =  =  =  =  =  =  =
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
se o dígito for maior que 9, se considera 0

7   0  5  4  8  4  4  5  0  5
x   x  x  x  x  x  x  x  x  x
11 10  9  8  7  6  5  4  3  2
=  =   =  =  =  =  =  =  =  =
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro digito)
se o dígito for maior que 9, se considera 0

*/
let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);


cpfArray.pop();
cpfArray.pop();
// console.log(cpfArray);

//const resultado = cpfArray.map((num, indx) => num * (10 - indx));

// -- Pegando o primeiro Dígito
const somaTotal1 = cpfArray.reduce((acum, num, indx) => acum + num * (10 - indx), 0);
console.log(somaTotal1);
const primeiroDigito = 11 - (somaTotal1 % 11);
console.log(primeiroDigito);

cpfArray.push(primeiroDigito.toString());
console.log(cpfArray);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//pegando o segundo dígito
const somaTotal2 = cpfArray.reduce((acum, num, indx) => acum + num * (11 - indx), 0);
console.log(somaTotal2);
const segundoDigito = 11 - (somaTotal2 % 11);
console.log(segundoDigito);

cpfArray.push(segundoDigito.toString());
console.log(cpfArray);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//Validando o resultado dos get do primeiro e segundo dígito com o CPF inserido incialmente.

const re1 = cpfArray.reduce((acc, item) => acc + item, "");
console.log(re1);

const validador = function(){
    return re1 === cpfLimpo ? true : false;
}

console.log(validador());