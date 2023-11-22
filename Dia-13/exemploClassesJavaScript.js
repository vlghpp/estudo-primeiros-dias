/*
Este arquivo destino a um exemplo usando diversos conhecimentos vistos até aqui
*/


class Aluno{
    nome;
    idade;
    areaAtuacao;
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }   
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e minha área de atuação é ${temAreaAtuacao}.`)
    }
}
console.log("============ CADASTRO DE ALUNOS =============")

let alunos = [];
let continuar = true;
let indexDeAluno = 0;

while(continuar){
    let nome = prompt("Qual é o seu nome aluno? ")
    let idade = Number(prompt("Qual é sua idade aluno? "));
    let aluno = new Aluno(nome, idade);
    
    alunos[indexDeAluno] = aluno;
    let temAreaAtuacao = prompt("Insira a sua area de atuação");
    aluno.areaAtuacao = temAreaAtuacao;
    let desejaContinuar = prompt("Deseja continuar? [Sim/Não]");
    if(desejaContinuar !== "Sim"){
        continuar = false;
    }else indexDeAluno++
    
}
console.log(alunos.apresentar())