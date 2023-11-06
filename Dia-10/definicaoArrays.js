//Sejam bem-vindos a parte que vamos falar sobre arrays, mas o que são arrays?
//Para entender sobre arrays espero que você tenha começado desde o começo e ter entendido sobre o que são váriaveis
//Arrays (arranjos), são uma forma de armazenarmos mais de uma váriavel, mas como assim? Veja abaixo:

let nossoPrimeiroArray = []; //Essa é a estrutura padrão para criar um array, define uma váriavel que vai receber colchetes

//Agora vou criar um laço for que vai contar de 0 até 10, e que cada valor desse contador seja adicionado no nossoPrimeiroArray

for(let c = 0; c <= 10; c++){          //Aqui eu estou criando o nosso contador
    nossoPrimeiroArray.push(c);       //Nesta linha eu estou já atribuindo um método dos arrays, mas não se preocupe vou tentar explica-los
}                                     //melhor mais pra frente, mas o intuito dele é pegar o c(contador que vai de 0 a 10 no loop)
                                        //e depois push(empurra-lo) para dentro do nossoPrimeiroArray

console.log(nossoPrimeiroArray);  //Espero que fique de mais fácil compreensão quando vocês virem esse console.log(nossoPrimeiroArray)
//Ele vai retornar os valores de 0 até 10 dentro de APENAS UMA VÁRIAVEL, isso é o que o array faz, se fosse como antes precisariamos criar
//10 váriaveis para termos acesso aos 10 valores, entenderam? Vejam como seria se não tivessemos arrays:
let n0;
let n1;
let n2;
let n3;                     //Aqui criamos nossas 10 váriaveis para receber nossos 10 números da contagem
let n4;
let n5;
let n6;
let n7;
let n8;
let n9;
let n10;

for(let contador = 0; contador <= 10; contador++){  
    if(contador == 0) n0 = 0
    if(contador == 1) n1 = 1                //Aqui atribuimos uma condição para cada valor do nosso laço, assim que a condição for
    if(contador == 2) n2 = 2                // verdadeira ele vai armazenar na sua váriavel correspondente
    if(contador == 3) n3 = 3    
    if(contador == 4) n4 = 4
    if(contador == 5) n5 = 5
    if(contador == 6) n6 = 6
    if(contador == 7) n7 = 7
    if(contador == 8) n8 = 8
    if(contador == 9) n9 = 9
    if(contador == 10) n10 = 10
}

console.log(n0);
console.log(n1);
console.log(n2);                //Aqui vai nos printar os valores das váriaveis que foram usadas para guardar a contagem
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(n8);
console.log(n9);
console.log(n10);

//Se você teve dificuldade em entender, veja este video: https://www.youtube.com/watch?v=XdkW62tkAgU&ab_channel=CursoemV%C3%ADdeo