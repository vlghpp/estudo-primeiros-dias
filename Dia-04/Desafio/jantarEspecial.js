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