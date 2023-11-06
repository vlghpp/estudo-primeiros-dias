let modelos = [];
let anos = [];
let valores = [];
let resposta = "Sim";
let contador = 0;
let maiorValores = 0;
let maiorAnos;
let maiorModelos;
while(resposta != "Não"){

    let perguntaModelo = (prompt("Informe o modelo do carro: "));
    modelos.push(perguntaModelo);

    let perguntaAnos = Number(prompt("Informe o ano do carro: "));
    anos.push(perguntaAnos);

    let perguntaValores = Number(prompt("Informe o valor do carro: "));
    valores.push(perguntaValores);

    resposta = prompt("Deseja informar mais algum carro? [Sim/Não]");
}

while(contador < modelos.length){
    console.log(`Foi digitado o modelo ${modelos[contador]}, de ano ${anos[contador]} e valor R$${valores[contador]}`);
    contador++;
}
for(let c = 0; c <= valores.length; c++){
    if(valores[c] > maiorValores) {
        maiorModelos = modelos[c];
        maiorAnos = anos[c];
        maiorValores = valores[c];
    }
}

console.log("");

console.log(`O carro com o valor mais alto foi o do ${maiorModelos}, de ano ${maiorAnos} e valor R$${maiorValores}. :)`);