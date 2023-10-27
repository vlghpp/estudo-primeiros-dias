//Espero que você tenha lido a parte de contadores, e se entendeu seja bem-vindo a parte de estruturade um laço for!

//Esse é um exemplo clássico de uma necessidade de um laço de repetição
console.log(tabuada +" x 0 = " + tabuada* 0)
console.log(tabuada +" x 2 = " + tabuada* 1)
console.log(tabuada +" x 3 = " + tabuada* 2)
console.log(tabuada +" x 4 = " + tabuada* 3)
console.log(tabuada +" x 5 = " + tabuada* 4)
console.log(tabuada +" x 6 = " + tabuada* 5)
console.log(tabuada +" x 7 = " + tabuada* 6)

//Ta vendo como é muito dificil ficar escrevendo várias linhas de código pra mesma coisa? Sempre quando você ver a repetição de código, é pq podemos
//melhora-lá usando um laço de repetição como o FOR!


for(let contador = 0; contador <= 5; contador++){//A estrutura de um laço for é feita do seguinte pensamento:
    console.log(contador)                       //primeiro ele cria uma váriavel que vai receber o conta
}                                               //define uma condição para que continue acontecendo aquele laço de repetição (contador <= 5)
                                                //define a estrutura do contador(contador++), então ENQUANTO, a condição não for batida ele vai ficar
                                                //somando no contador ATÉ que a condição seja verdadeira, nesse caso até quando o contador for menor ou
                                                //igual a 5!
//Dessa forma temos um laço de repetição FOR! :) Qualquer dúvida entre em contato comigo!

//EXEMPLO DE UMA TABUADA PRA VOCÊS
//c é o nome que eu defini para meu contador, pode ser qualquer nome!

for(let c = 0; c <= 10; c++){
    console.log("A tabuada do 5 é: " +  5 + "x" + c + "=" + 5*c);
}
//Caso não tenha entendido como é que foi feito entre em contato comigo!


//Desafio: faça uma tabuada, mas pedindo para o usuário qual tabuada ele quer, ou seja, de que número. Esse desafio
//quero que vocês retornem na mesma nomenclatura do meu exemplo '5x0=0'