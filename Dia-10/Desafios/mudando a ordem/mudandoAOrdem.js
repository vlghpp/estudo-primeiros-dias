/*
LISTA DE EXERCICIOS --1

1 - Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. Modifique os elementos do array de modo que a sequência de números fique ao contrário.

Ex.: entrada: 1, 2, 3, 4, 5 -> saída: 5, 4, 3, 2 , 1 

*/

let numeros = [];
let meUse = [];
let contador = 0;
let condicao = true;

while(contador <= 4){
    let numerosInseridos = Number(prompt("Digite um valor: "))
    numeros.push(numerosInseridos);
    contador++
}
console.log(numeros);
for(let c = 4; c >= 0 ; c--){
    meUse.push(numeros[c]);
}
numeros = meUse;

console.log(numeros);

