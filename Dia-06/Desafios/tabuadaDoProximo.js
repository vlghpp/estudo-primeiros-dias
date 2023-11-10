/*
Lista de exercicios Questão 4

*Não esqueça de testar seu código!

4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.

Ex: Números de entrada:3



    Saída:  Número 3:      Número 4:         Número 5:       

            3 x 1 = 3      4 x 1 = 4         5 x 1 = 5

            3 x 2 = 6      4 x 2 = 8         5 x 2 = 10

            3 x 3 = 9      4 x 3 = 12        5 x 3 = 15          

            3 x 4 = 12     4 x 4 = 16        5 x 4 = 20         

            ...            ...               ... 
*/



let qualProximo = Number(prompt("Qual o número que você quer e os 2 próximos?"));

for(let c = 0; c<=10; c++){
    console.log(qualProximo + " x " + c + "= "  + qualProximo* c);
}
console.log('');

qualProximo++;

for(let j = 0; j<=10; j++){
    console.log(qualProximo + " x " + j + "= "  + qualProximo* j);
}

console.log('');

qualProximo++;

for (let k = 0; k<= 10; k++){
    console.log(qualProximo + " x " + k + "= "  + qualProximo* k);
}