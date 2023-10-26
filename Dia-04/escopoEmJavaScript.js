let idade = 5; //Váriavel criada fora de qualquer if/function/object etc, logo ela é uma váriavel global
//váriaveis globais podem ser acessadas a qualquer lugar do código!

if (idade <= 10){
    console.log(idade);//note que a váriavel idade pode ser usada dentro do escopo local do if
    //mas se criarmos uma váriavel dentro do escopo local do if, ou seja, dentro de suas chaves, ele não poderá
    //ser usado fora das chaves. Veja:
    let teste = "henrique";

    //Defini outro if dentro do if, para mostrar que um escopo local pode ser usado quando você o coloca para um
    //filho. Veja:
    if(true){
        console.log("entrou no terceiro escopo");//Ele printa no console que entrou no terceiro escopo
        console.log(teste);//Usa a váriavel que foi criada no escopo do seu if pai e funciona!
    }


    console.log("Você tem menos que 10 anos");
}else{
    //console.log(teste);  //Se tentar rodar esse código com esse console.log() ele vai dizer que a váriavel teste
    //não está sendo definida, pois ela está fora do escopo local do if em q foi criada, portanto não é definida
    //fora.
    console.log("Você tem mais que 10 anos");
}