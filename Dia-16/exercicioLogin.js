/*1 - Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o 
rograma. Essa função deve retornar a opção escolhida pelo usuário.


2 - Crie uma função de cadastro que solicite dois valores ao usuário, um nome e uma senha e guarde cada
um no seu respectivo array.


3 - Crie uma função de login que recebe dois valores como parâmetro, um nome e uma senha, depois procure o nome recebido no array de nomes e 
em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas retorne true s
e uma delas não for válida retorne false. 

4 - Crie uma função de exclusão de cadastro que recebe um nome como parâmetro, então procure pelo nome no array de nomes e exclua ele e a 
senha correspondente do outro array.


5 - Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o 
programa conforme as opções e que no login caso seja bem sucedido retorna uma mensagem “Login feito com sucesso!” e em caso negativo 
“Nome ou senha incorretos!”

*/
//--------------------------------------------Resposta do usuário----------------------------------------------
function respostaUsuario(){
    let respostaUsuario = prompt("O que você quer fazer no programa? [Login, Cadastro, Excluir ou Sair]").toUpperCase();
    return respostaUsuario;
}

//--------------------------------------------Cadastro Login e Senha-------------------------------------------

let loginsUsuario = [];
let senhasUsuario = [];
function usuarioESenha(){
    alert("VOCÊ SOLICITOU CADASTRO, PORFAVOR PROSSIGA COM OS PRÓXIMOS PASSOS!")
    let cadastroLoginUsuario = prompt("Digite seu usuário para cadastro: ")
    loginsUsuario.push(cadastroLoginUsuario);
    let cadastroSenhaUsuario = prompt("Digite sua senha para cadastro: ")
    senhasUsuario.push(cadastroSenhaUsuario);
}

//--------------------------------------------Login Usuario-------------------------------------------------

function loginUsuario(usuario, senha){
    alert("VOCÊ SOLICITOU LOGIN, PORFAVOR PROSSIGA COM OS PRÓXIMOS PASSOS!")
    if((!loginsUsuario.includes(usuario)) || (!senhasUsuario.includes(senha))){
        alert('Login não efetuado, usuário ou senha incorretos!')
    }else alert('Login realizado com sucesso! Seja bem-vindo.')
}


//-------------------------------------------Exclusão de Login e Senha ------------------------------------
function exclusaoUsuario(usuario){
    alert("VOCÊ SOLICITOU PARA EXCLUIR UM LOGIN, PORFAVOR PROSSIGA COM OS PRÓXIMOS PASSOS!")
    if(!loginsUsuario.includes(usuario)){
        alert("Você digitou um usuário que não existe!")
    }else{
        let indexDoLogin = loginsUsuario.indexOf(usuario);
        loginsUsuario.splice(indexDoLogin, 1);
        senhasUsuario.splice(indexDoLogin, 1);
        alert("O usuário/senha foi excluido com sucesso!")
    }
}
//------------------------------------------Sair do programa --------------------------------------------
function sair(){
    alert("VOCÊ SOLICITOU SAIR DO PROGRAMA, OBRIGADO PELA PREFERÊNCIA! :)")
}

//-----------------------------------------Fluxo principal do programa-----------------------------------
while (true) {
    opcaoUsuario = respostaUsuario();

    switch (opcaoUsuario) {
        case "CADASTRO":
            usuarioESenha();
            break;
        case "LOGIN":
            loginUsuario();
            break;
        case "EXCLUIR":
            exclusaoUsuario();
            break;
        case "SAIR":
            sair();
            break;
        default:
            alert("Opção inválida. Tente novamente.");
    }

    if (opcaoUsuario === "SAIR") {
        break;  // Sai do loop se a opção for "SAIR"
    }
}