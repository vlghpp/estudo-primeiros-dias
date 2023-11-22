/*
Desafio 2 - Corrida DoDev

1 - Crie uma classe Carro com as seguintes propriedades:


Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
Potencia - número de cavalos de potência do carro;
VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 

resultado = distância / (VelocidadeMaxima / Aceleracao). 
A função deve retornar esse resultado;

3 - Crie uma classe Corrida com as seguintes propriedades:

Nome - nome do local da corrida;
Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
Distancia - o total em metros da corrida;
Participantes - um array de objetos da classe Carro
Vencedor - qual a equipe que ganhou a corrida;

*/

/*
ESSE EXERCICIO NAO FOI TERMINADO
*/
let continuar = true;
let indexParticipantes = 0;
let campeao = Infinity;
let resultadoVariacaoDoTempo;


class Corrida{
    nome
    tipo
    distancia
    participantes
    vencedor
    constructor(nome, tipo, distancia, participantes, vencedor){
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = participantes;
        this.vencedor = vencedor;
    }
    campeao(){
        for (let c = 0; c < this.participantes.length; c++) {
            if (this.participantes[c].tempo(this.distancia) < campeao) {
                campeao = this.participantes[c].tempo(this.distancia);
                this.vencedor = this.participantes[c].nome;
            }
        }
    }

    apresentar(){
        console.log(`O campeão da corrida foi ${this.vencedor}, com ${resultadoVariacaoDoTempo}s`);
    }
}    

let nome = prompt("Insira o local da corrida: ")
let tipo = prompt("Insira o tipo da corrida: ")
let distancia = Number(prompt("Insira o total em metros da corrida: "))
let participantes = [];
let vencedor = "";
let corrida = new Corrida(nome, tipo, distancia, participantes, vencedor)


while(continuar){
    class Carro{
        nome 
        potencia
        velocidadeMaxima
        aceleracao
        constructor(nome, potencia, velocidadeMaxima, aceleracao){
            this.nome = nome;
            this.potencia = potencia;
            this.velocidadeMaxima = velocidadeMaxima;
            this.aceleracao = aceleracao;
        }
        tempo(distancia){
            let variacaoDoTempo = distancia / ( this.velocidadeMaxima / this.aceleracao) 
            return variacaoDoTempo
        }
    }
    
    
    /* Cria as informações dos participantes e atribui as suas classes. */
    let nome = prompt("Qual é o modelo do seu carro? ")
    let potencia = Number(prompt("Qual número de cavalos do seu carro?"))
    let velocidadeMaxima = Number(prompt("Qual é a velocidade maxima que seu carro alcanca?"))
    let aceleracao = Number(prompt("Qual o tempo em segundos que o carro leva para ir de 0 a 100 km/h ? "))
    let carro = new Carro(nome, potencia, velocidadeMaxima, aceleracao)
    /*PASSA A DISTANCIA COMO PARAMETRO E GUARDA O RESULTADO NA VARIAVEL */
    carro.tempo(distancia);
    resultadoVariacaoDoTempo = carro.tempo(distancia);
    
    /*Adiciona ao array de participantes o objeto carro e também o resultado em segundos da distancia percorrida. */
    corrida.participantes[indexParticipantes] = carro;
    corrida.resultadoVariacaoDoTempo[indexParticipantes] = resultadoVariacaoDoTempo;
    
    /*DEFINE UM LIMITE PARA O WHILE */
    let desejaContinuar = prompt("Deseja continuar ? [Sim/Não]");
    if(desejaContinuar !== "Sim"){
        continuar = false 
    } else {
        /*DEFINE UM CONTADOR PARA O ARRAY DE PARTICIPANTES */
        indexParticipantes++
    }
}

console.log(corrida.apresentar());
