let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));
let profissao = prompt("Digite sua profissão: ");
console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}Kg.`);
if(idade >= 18) console.log("Está liberado para tomar umas geladas!");
else console.log("Sem geladas para você!");
let meses = Math.round(12 * idade);
let dias = Math.round(idade * 365);
let semanas =  Math.round(dias / 7);
console.log(`Sua idade equivale a ${meses} meses, ${semanas} semanas e ${dias} dias.`)