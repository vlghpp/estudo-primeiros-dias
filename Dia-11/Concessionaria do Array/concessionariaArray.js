/*

LISTA DE EXERCICIOS --2 Concessionária 

*Não esqueça de testar seu código!

1 - Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os valores do carro
2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.
3 - Seu usuário deve definir quando parar de inserir informações. 

*/


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