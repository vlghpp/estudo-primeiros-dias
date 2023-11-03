let peso = Number(prompt("Qual é seu peso? (Kg)"));
let altura = Number(prompt("Qual é sua altura? (M)"));
let idade = Number(prompt("Qual o ano de seu nascimento? "));
let imc = peso / (altura * altura);

let agora = new Date();
let esseAno = agora.getFullYear();
idade = esseAno - idade;

if (imc < 18.5) console.log(`Você tem ${idade} anos e se encaixa como na classe de magreza!`)
else if(imc > 18.5 && imc <= 24.9) console.log(`Você tem ${idade} anos e se encaixa como na classe normal!`)
else if(imc > 24.9 && imc <= 30) console.log(`Você tem ${idade} anos e se encaixa como na classe de sobrepeso!`)
else console.log(`Você tem ${idade} anos e se encaixa como na classe de obesidade!`)

