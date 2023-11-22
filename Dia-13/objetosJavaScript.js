/*
Bom, sejam bem-vindos a parte de objetos em JavaScript, cara, sinceramente se você está aqui desde o começo, quero dizer, desde a Aula-01
e você está entendendo, eu de coração estou muito feliz! Hoje eu estou fazendo essa aula em um sábado e são exatamente 00:10:57 horas da manhã.
Se o que eu estou fazendo realmente está funcionando é de bom grado. Muito obrigado.
 */

/*
Agora, sem mais delongas, vamos pro que interessa. Hoje a aula é sobre objetos, cara, esssa aula não vai ser fácil de entender então eu vou recomendar
algum vídeo para complementar essa Aula-13, mas tentarei passo a passo explicar o máximo!
*/

/*
Quero que vocês imaginem uma garrafa, essa garrafa é um objeto, não é? Então, agora quero que você se possível e tiver uma garrafa ao seu alcance
vai ser melhor, se não ta tudo bem também. Quero que você imagine essa garrafa, ela tem seu tamanho, tem seu peso, seu limite(volume),tem suas 
ações como: abrir a tampa da garrafa e fecha-la. Isso é um objeto em JavaScript também.
*/

//Bom, vou escrever um objeto de uma forma, mas é meramente para fins educacionais aqui para entender melhor. Veja:

let garrafa = { 
    tamanho: 50, //Altura(tamanho) da garrafa em centímetros
    peso: 100,  //Peso da garrafa em gramas
    limite: 500, //Volume da garrafa em ml's
    abrir: () => console.log("a garrafa está aberta!"),  //Acho que não expliquei sobre arrow functions, mas é uma forma de definir uma função
    fechar: () => console.log("a garrafa está fechada!") //sem ter que definir um nome pra ela, é o que chamamos de funções anônimas!
}

/*
A ideia de um objeto aqui no JavaScript é a mesma, e essa é a ideia que eu quero que você tome sempre quando pensar ou ter alguma matéria
ou atividade sobre. Veja que definimos o tamanho da nossa garrafa
*/

console.log(garrafa.tamanho + "cm esse é o tamanho da nossa garrafa em centímetros")
console.log(garrafa.peso + "g esse é o peso da nossa garrafa em gramas")
console.log(garrafa.limite + "ml esse é o máximo de volume que nossa garrafa suporta")
console.log(garrafa.abrir())
console.log(garrafa.fechar())

/*
Veja que definimos uma váriavel 'garrafa' (linha 20). Essa váriavel recebe um par de chaves, é assim que criamos objetos no JavaScript!
depois definimos suas propriedades, essa é a ideia.
*/

/*
Quero que você assista esse vídeo que vai ajudar a entender melhor na prática, caso eu não esteja com você o explicando agora:
https://www.youtube.com/watch?v=kqE3sp_7peQ&ab_channel=NodeStudioTreinamentos
Aula sobre objetos, bem explicativa e de fácil compreensão!
*/