/*
Bom, espero que você tenha lido o material e que tenha visto o vídeo como apoio ao seus estudos, o que o 
amigo Henrique aqui recomenda é o seguinte, faça muitos exercicios, sério, faça milhares se possível
programação é igual matemática, você aprende se desafiando e se exercitando! NÃO DESISTA, já chegou muito
longe para ter esse tipo de pensamento.
*/

/*
Vamos para a segunda parte da aula! Agora veremos um pouco sobre classes, que tem haver diretamente com
programação orientada a 'objetos', QUE vimos na última aula, caso você esteja vendo POO(programação
orientada a objetos já na faculdade) creio que vai entender melhor, tanto que nem eu sei POO ainda, e
nem tive na faculdade, mas estou aprendendo e me esforçando o dobro, uma vez é por mim outra por vocês!
*/

/*
Classes, ok, vamos lá! Quero que vocês venham comigo e pensem de novo na garrafa, agora vamos fazer outra
analogia, ok? Pense na indústria antes da existência da garrafa, alguém foi lá um certo dia e teve a ideia
hmmm... e se eu tivesse um objeto que tivesse: tamanho, peso e limite, isso me ajudaria a tomar água mais
fácil. Então a pessoa foi lá e criou uma? GARRAFA, isso mesmo! O que eu quero dizer com isso? Que a classe
em JavaScript é mais uma ideia 'abstrata' de um 'objeto', então a classe é como se fosse 'um projeto que
não saiu do papel ainda, é uma IDEIA', já o 'objeto' é a ideia saindo do papel e se tornando realidade.
Veja logo abaixo para ver se faz sentido:
*/

class Garrafa{
    Tamanho
    Peso
    Limite
    constructor(tamanho, peso, limite){
        this.Tamanho = tamanho;
        this.Peso = peso;
        this.Limite = limite;
    }
}

let garrafa = new Garrafa(50, 100, 500)

console.log(garrafa.Tamanho + "cm esse é o tamanho da nossa garrafa em centímetros")
console.log(garrafa.Peso + "g esse é o peso da nossa garrafa em gramas")
console.log(garrafa.Limite + "ml esse é o máximo de volume que nossa garrafa suporta")

