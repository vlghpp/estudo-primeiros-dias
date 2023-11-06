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

