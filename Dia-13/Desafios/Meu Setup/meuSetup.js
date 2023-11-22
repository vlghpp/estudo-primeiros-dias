/*
Desafio 1 - Meu Setup

1 - Crie uma classe para representar o seu computador:
Tipo - desktop ou notebook;
Processador - nome do seu processador, ex: Ryzen 5
Video - Integrado ou Dedicado;
Armazenamento - número em GB de memória, ex: 500 ou 1000;
MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
SSD - True ou False

2 - Implemente um método nessa classe para exibir as informações no console;


Se você não souber todas essas informações do seu computador, não tem problema preencha com os valores de exemplo mesmo.
 */

class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    }
    apresentar(){
        if(ssd === true) console.log(`Seu computador é do tipo ${tipo}, processador ${processador}, placa de video ${video}, armazenamento de ${armazenamento}gb, memoria ram de ${memoriaRam}gb e tem sdd`)
        else console.log(`Seu computador é do tipo ${tipo}, processador ${processador}, placa de video ${video}, armazenamento de ${armazenamento}gb, memoria ram de ${memoriaRam}gb e não tem sdd`)
    }
}

let tipo = prompt("Qual é o tipodo seu dispositivo? [desktop/notebook]")
let processador = prompt("Qual é o nome do seu processador? ") 
let video = prompt("Sua placa de video é dedicada ou integrada? ")
let armazenamento = prompt("Quanto de gb tem de armazenamento? ")
let memoriaRam = prompt("Quanto de memoria ram tem seu computador? ")
let ssd = confirm("Se seu computador tiver ssd clique em 'ok', senão, clique em 'cancelar'")
let meuSetup = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)

console.log(meuSetup.apresentar());