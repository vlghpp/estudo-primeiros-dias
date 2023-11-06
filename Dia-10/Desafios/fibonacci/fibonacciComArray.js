let numeroUsuario = Number(prompt("Digite um valor: "));
let menosUm = numeroUsuario - 1;
let array = [menosUm, numeroUsuario];

while(!array[9]){
    menosUm = numeroUsuario + menosUm;
    array.push(menosUm);
    numeroUsuario = menosUm + numeroUsuario;
    array.push(numeroUsuario);
}
console.log("Fibonacci: " + array);