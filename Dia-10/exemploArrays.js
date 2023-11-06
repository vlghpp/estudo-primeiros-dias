let nomes = []; //Criamos nosso array chamado 'nomes'
let continuar = true; //Aqui estou definindo uma váriavel booleana para o while a seguir
let posicaoDoArray = 0; //Definindo nosso contador em 0
while(continuar){
    let nomesInseridos = prompt("Digite um nome: ") //Perguntamos ao usuário que nome ele quer digitar

    nomes[posicaoDoArray] = nomesInseridos; //Aqui ele pega nosso Array (nomes), e eu estou definindo uma váriavel que vai passar pelos índices
    //do nosso Array, chamada posicaoDoArray, ou seja, ela vai começar em 0 e vai receber o nomeInserido daquela vez que está passando no loop
    //Ou seja, a primeira vez que o código rodar o loop, vai estar na posição 0 (definida antes mesmo de começar o loop 'let posicaoDoArray = 0)
    //então vai entrar no While, e vai perguntar ao usuário um nome, depois entrará nessa linha de código onde
    //Nosso array (NOMES) na posição (posicaoDoArray) vai receber = 'nomesInseridos' (nome inserido pelo usuário).
    //Assim para cada vez que o loop acontecer, vai ser uma posicao diferente pois sempre que o loop rodar a nossa posicaoDoArray = + 1

    let resposta = prompt("Deseja continuar? [Sim/Não]")//Pergunta ao usuário se ele quer continuar escrevendo nomes

    if(resposta === "Não") continuar = false;//Caso a resposta seja 'não', nosso booleano que faz acontecer o loop recebe false e acaba o loop

    posicaoDoArray++; //Fazemos com que a posição do array acima não seja igual a mesma de antes, sempre somando + 1 a posição, assim podemos
    //diferenciar as posiçoes e não irá sobreescrever nenhum nome digitado pelo usuário
}

console.log(nomes) //Escreve todos os nomes digitados pelo usuário em suas respectivas posições.