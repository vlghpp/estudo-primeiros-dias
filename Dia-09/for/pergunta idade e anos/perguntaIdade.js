let resposta = true
while(resposta){
    let anoIdade = Number(prompt("Em que ano você nasceu?"));
    let contador2 = -1;
    for(let c = anoIdade; c <= 2023; c++) {
        contador2 += 1;
        console.log(`${c} Você tinha ${contador2}`);
    }
    if(resposta === "Sim") console.log("");
    resposta = prompt("Você deseja testar com outro ano e/ou errou a sua data? [Sim/Não]");
    if(resposta === "Não") resposta = false;
}
