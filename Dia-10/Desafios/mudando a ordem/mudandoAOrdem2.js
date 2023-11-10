/*
LISTA DE EXERCICIOS -- 2
2 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário
 */


let numerosDoArray = Number(prompt("Você vai digitar quantos números? "));
let array = [];
let arrayInvertido = [];

for(let c = 0; c <= numerosDoArray; c++){
    let numerosUsuario = prompt("Digite o valor: ");
    array[c] = numerosUsuario;
}
console.log(array);

for(let contador = numerosDoArray; contador >= 0; contador--){
    arrayInvertido.push(array[contador]);
}
array = arrayInvertido;

console.log(array);
