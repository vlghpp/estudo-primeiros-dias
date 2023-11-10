/*

Conhecendo seu usuário -- 3

Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.

   *ATENÇÃO: Aqui você deve utilizar o loop FOR.

Ex: Nasceu em 2018 você deve exibir: 

    2018 - 0 anos de idade

    2019 - 1 anos de idade

    2020 - 2 anos de idade

    2021 - 3 anos de idade

    2022 - 4 anos de idade

Utilizando o loop WHILE/DOWHILE, pergunte a seu usuário se ele deseja inserir novos dados ou se deseja finalizar o programa
 */


let resposta = true
while(resposta){
    let anoIdade = Number(prompt("Em que ano você nasceu?"));
    let contador2 = -1;
    for(let c = anoIdade; c <= 2023; c++) {
        contador2 += 1;
        console.log(`${c} Você tinha ${contador2} anos`);
    }
    if(resposta === "Sim") console.log("");
    resposta = prompt("Você deseja testar com outro ano e/ou errou a sua data? [Sim/Não]");
    if(resposta === "Não") resposta = false;
}
