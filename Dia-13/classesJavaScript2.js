/*
A este arquivo destino outro exemplo de classes.
Lembre-se: o nome de uma classe sempre começa com uma letra MAÍUSCULA!
*/

class Aluno{
    nome;
    idade;
    areaAtuacao;
    constructor(nome, idade, areaAtuacao) {
        this.nome = nome;
        this.idade = idade;
        this.areaAtuacao = areaAtuacao;
    }
}
/* 
Explicação 'this' -> o this é uma forma de referenciarmos uma propriedade dentro de um objeto. Como assim? Note que foram criados 3 propriedades
dentro da classe Aluno, que são: nome, idade, areaAtuacao. Logo após foi criado um constructor que é um construtor, onde vai ser definido
os valores para nossas propriedades. Mas note que dentro do nosso construtor tem uma propriedade nome = nome(ligada ao parametro nome, passado
dentro do constructor), idade = idade(ligada ao parametro idade, passado dentro do constructor), areaAtuacao = areaAtuacao(ligada ao parametro 
areaAtuacao, passado dentro do constructor). O this é uma forma de diferenciar o parametro e a propriedade, então o this do inglês significa
'esse', esse o que? ESSE PARAMETRO. Então o this.nome refere-se ao 

class Aluno{
    nome ------------- refere-se a esse nome, então define um valor para ele, que é o que o usuário vai digitar, ou ser definido no console.log
    idade
    areaAtuacao
}


 */
let aluno = new Aluno('Henrique', '19 anos', 'Desenvolvedor full-stack');

console.log(aluno)