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
