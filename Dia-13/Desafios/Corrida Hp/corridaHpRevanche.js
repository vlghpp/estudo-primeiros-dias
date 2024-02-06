class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
    }

    calculaTempo(distancia) {
        return distancia / (this.VelocidadeMaxima / this.Aceleracao);
    }
}

class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia) {
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Participantes = [];
        this.Vencedor = null;
    }

    verificaTempo() {
        let menorTempo = Number.MAX_VALUE;
        let indexDoMenorTempo = -1;

        for (let i = 0; i < this.Participantes.length; i++) {
            let tempoAtual = this.Participantes[i].calculaTempo(this.Distancia);

            if (tempoAtual < menorTempo) {
                menorTempo = tempoAtual;
                indexDoMenorTempo = i;
            }
        }

        return indexDoMenorTempo;
    }

    dizVencedor() {
        if (this.Vencedor !== null) {
            alert(`O vencedor da corrida foi da equipe ${this.Participantes[this.Vencedor].Nome}, com o tempo de ${this.Participantes[this.Vencedor].calculaTempo(this.Distancia)} segundos!`);
        } else {
            alert("A corrida não teve vencedor, pois não houve participantes.");
        }
    }
}

// --------------------------------Informações class Corrida----------------------------------------
let nomeCorrida = prompt("Qual o local da corrida? ");
let tipoCorrida = prompt("Qual o tipo de corrida? ");
let distanciaCorrida = Number(prompt("Qual a distância da corrida? "));
let continuar = true;

let corrida = new Corrida(nomeCorrida, tipoCorrida, distanciaCorrida);
// -------------------------------------------------------------------------------------------


// --------------------------------Informações class Carro-----------------------------------------
while (continuar) {
    let nomeCarro = prompt("Insira o nome da equipe que representa seu piloto: ");
    let potenciaCarro = Number(prompt("Quantos cavalos tem o carro do seu piloto? "));
    let velocidadeMaximaCarro = Number(prompt("Qual a maior velocidade que este carro pode alcançar? "));
    let aceleracaoCarro = Number(prompt("Quantos segundos leva para o carro ir de 0 a 100km/h?"));

    let carro = new Carro(nomeCarro, potenciaCarro, velocidadeMaximaCarro, aceleracaoCarro);
    corrida.Participantes.push(carro);

    let desejaContinuar = prompt("Deseja continuar? [Sim/Não]");

    if (desejaContinuar.toLowerCase() !== "sim") {
        continuar = false;
    }
}
// --------------------------------------------------------------------------------------------------


// -----------------Definindo que há algum participante e testando as velocidades deles--------------

corrida.Vencedor = corrida.verificaTempo();

// --------------------------------------------------------------------------------------------------

// ------------------------------Chamando o corrida.dizVencedor()------------------------------------
corrida.dizVencedor();

