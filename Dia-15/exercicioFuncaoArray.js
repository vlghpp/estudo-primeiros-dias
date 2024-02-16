/*

1 - Crie dois arrays: arrayA e arrayB. Preencha os dois arrays com 10 números cada, pode declarar já com valores;
let arrayA = [13,20,10,22,24,20,27,17,19,14]

let arrayB = [24,22,23,11,15,17,29,14,16,21]



2 - Implemente uma função que receba dois arrays como parâmetro.
Essa função deve retornar um array que contenha apenas os números em comum nos dois arrays recebidos 
como parâmetro.


3 - Se um número se repetir apenas no mesmo array, ele NÃO deve ser adicionado como um número comum.


4 - No array de saída NÃO deve ter números repetidos

Entrada: 
        arrayA = [13,20,10,22,24,20,27,17,19,14]

        arrayB = [24,22,23,11,15,17,29,14,16,21]



Saída:   numerosEmComum = [22,24,17,14]
 */

let arrayA = [13,20,10,22,24,20,27,17,19,14,22, 13, 19, 17];

let arrayB = [24,22,23,11,15,17,29,14,16,21,22,13, 19, 17];


function receberArrays(array1, array2){
    let numerosEmComum = [];
    for(let c = 0; c < array1.length; c++){
        if((array2.indexOf(array1[c]) >= 0) && (numerosEmComum.indexOf(array1[c]) < 0)){
            numerosEmComum.push(array1[c]);
        }
    }
    return numerosEmComum;
}
console.log(receberArrays(arrayA, arrayB));

