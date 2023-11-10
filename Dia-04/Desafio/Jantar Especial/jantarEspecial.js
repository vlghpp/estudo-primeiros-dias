/*
1 - Jantar especial?
1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.
1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"
1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"
1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!" */

let fomeUsuario = confirm("Você está com fome?");
let dinheiroUsuario = confirm("Você está com dinheiro?");
let restauranteSituacao = confirm("O restaurante está aberto?");

if(fomeUsuario === false || dinheiroUsuario === false){
    console.log("Hoje a janta será em casa.");
} else if((fomeUsuario === true && dinheiroUsuario === true) && restauranteSituacao === false){
    console.log("Peça um delivery!");
}else if(fomeUsuario === true && dinheiroUsuario === true && restauranteSituacao === true){
    console.log("Hoje o jantar será no seu restaurante preferido!");
}