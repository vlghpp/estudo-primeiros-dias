//Sejam bem-vindos a parte de funções em JavaScript, para definirmos uma função em javascript precisamos chamar function 'nome da funcao'(){}
//então ao chamarmos uma função precisamos criar um nome pra ela e logo após colocar parenteses() e chaves{}

//Gostaria de colocar um comentário de referência, pois para quem é do IFSC da primeira turma de ADS, o conteúdo de funções foi passado a nós,
//mas em forma de portugol("portugol é uma forma de aprender lógica de programação mais fácil, em uma linguagem mais 'entendível'.")
//em portugol se chamava sub-programas, a ideia da função é criar um código que podemos reutilizar ao longo do projeto, atividade(o que você estiver)
//(codando). Veja:

function somar(){
    console.log("Você está na função soma, e na função soma tem um escopo limitado!");
    let num1 = 1;
    let num2 = 3;
    console.log(num1 + num2);
}
//Existem diferentes formas de escrever dentro de uma função, essa é uma delas, explicarei código a código

//Linha 9 -> function somar(){} aqui chama uma função(function) e define um nome(somar)
//Linha 10 -> Printa no console que você entrou na função e que o escopo dela é limitado, ou seja, tudo que você criar dentro da function
//vai ser criado e usado apenas na função, se tentar usar uma váriavel criada dentro dessa função fora dela, você não vai conseguir usar
//Linha 11 -> Esse é um exemplo de váriavel de escopo local, que pode ser usada dentro e apenas dentro da função somar()
//Linha 12 -> Esse é um exemplo de váriavel de escopo local, que pode ser usada dentro e apenas dentro da função somar()
//Linha 13 -> Vai printar no console a soma entre os números num1 + num2

function somarOutraForma(n1, n2){       //Essa é outra forma de usar uma função, onde você está passando dois parametros, mas o que são esses
    return n1 + n2;                      //Parametros? Os parametros vão ser ou valores digitados por você, ou pelo usuário, veja abaixo.
                                        //Ah, e na linha 25 -> quando você escreve return, você quer dizer ao código que quer retornar esse
                                        //valor entre n1 + n2 para a função, então você vai poder guardar esse resultado dentro de uma váriavel
                                        //vai ficar mais claro. Veja:
}

somarOutraForma(2, 4); //Você chama a função e dentro os parenteses, você define um valor para n1 e n2 respectivamente 2 e 4
                        //E podemos guardar o resultado por causa do return em uma váriavel. Veja:

let guardandoValor = somarOutraForma(2,4); //Aqui estamos guardando o resultado da soma em uma váriavel chamada guardandoValor
                                            //Ah mas Henrique, como faço para ver o resultado? Quer saber o resultado da um console.log()
console.log(guardandoValor);//Pronto você vai ver o valor guardado da função printado no console!


//EIIIIIIIIIIII, lembra que você pode criar uma função para reutilizar no código? Então, se você quiser usar essa mesma função em algum outro 
//momento do código, você chama a função de novo, e ela vai acontecer novamente. Como? Só chamando o nome da função que você quer!

somarOutraForma(); //Pronto aqui eu estou utilizando novamente o código é como se eu tivesse escrevendo novamente o seguinte:

//function somarOutraForma(n1, n2){
//    return n1 + n2;
//}

//Não acredita em mim? Veja por si só, vamos definir mais um valor e uma váriavel para guardar o valor!

let naoAcreditaVejaSó = somarOutraForma(20, 30);    //Ele chama novamente a função, apenas com os parametros, não precisa escrever todo código
console.log(naoAcreditaVejaSó);                     //denovo, e depois printa no console o resultado (50)


//E NOTE QUE QUANDO EXECUTAR O CÓDIGO, VOCê VAI TER O RESULTADO DE 6(PRIMEIRA VEZ QUE CHAMAMOS A FUNÇÃO) E 50(SEGUNDA VEZ QUE CHAMAMOS A FUNÇÃO)!

