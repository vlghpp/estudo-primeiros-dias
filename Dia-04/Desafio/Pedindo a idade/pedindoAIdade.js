/*

Crie um sistema onde pede ao usuário sua idade e com a resposta digitada por ele retorna se ele 
tem mais de 10 anos ou menos.

*/

let idade = Number(prompt("Insira sua idade: "));//Pergunta ao usuário a idade

if (idade <= 10) console.log("Você tem menos ou tem 10 anos.");//Testa se a idade é maior ou igual a 10, caso for imprime a mensagem no console
else console.log("Você tem mais de 10 anos.");///caso a condição não seja verdadeira imprimirá essa mensagem