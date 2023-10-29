//Vamos supor que um dono de uma balada nos pede um sistema de verificação de idade para a porta da bala-
//da dele, certo? 

//Aqui é um exemplo bem prático para o funcionamento deste teste. Veja:


let teste = true; //Definimos nossa condição para o while como true, então ela sempre vai ser executada

while(teste){
    let idadeControle = Number(prompt("Qual é sua idade? "));         //Cria uma váriavel que armazenará o valor digitado pelo Usuário com sua idade

    if(idadeControle < 18) {            //Cria um teste para caso o meliante que quer entrar seja menor de idade, ou seja, menos que 18 anos
        console.log("Você é menor de idade!"); //Caso a idade digitada seja menor que 18, ele vai printar no console que aquele rapaz é menor
        alert("Você é menor de idade, saia imediatamente daqui!"); //Vai aparecer um aviso na tela do segurança que essa pessoa é de menor
        teste = false //E o loop acaba com nossa condicao de existência do loop recebendo false
    }
}
console.log("Acabou o while!"); //Avisa que acabou o loop