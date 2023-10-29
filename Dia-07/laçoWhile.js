//Vamos la! o while é um esquema equivalente a um laço de repetição for, mas um pouquiniiiinho diferente. Vejamos:
//a tradução de while é 'enquanto', então o laço vai continuar se repetindo ENQUANTO tiver acontecendo o que foi proposto a ele
//No caso abaixo por exemplo, veja:

let condicao = true;        //Aqui definimos uma váriavel que vai ser a condição de existência do nosso laço While 
let contador = 0;           //Definimos um contador, mesma coisa do for, mas esse contador vai ser a condição de existência para sair do laço

while(condicao){        //estrutura padrão de um while é: while('aqui vai alguma condicao pra ele continuar existindo'){}

    if(contador == 5) condicao = false //aqui é a forma dele não ficar se repetindo infinitivamente, porque você me pergunta que ele ficaria
    //se repetindo infinitamente? porque definimos nossa condição como true, ou seja, ela sempre vai ser executada pois, a condição de existência
    //do nosso laço while é verdadeira, então sempre que for verdadeira(true) ele vai executa-lá
    //então vem essa linha de código if(contador == 5), o que quer dizer que: quando o nosso contador ele chegar na contagem 5, ou seja, ja ter
    //repetido 5 vezes nosso laço, a váriavel antes criada 'condicao' vai receber false, assim quando o laço repetir pela 6vez ele não repetirá
    //pois a condição do while(condicao -> é falsa agora pois foi definida no if), então ele sairá do loop!
    
    contador++ //Esse é nosso contador para que o if aconteça, então ele é definido como 0 la em cima, e depois a cada vez que o loop é executado
    //ele vai fazer contador = contador(0) + 1, ou seja, ele vai aumentando de 1 em 1, veja:
    //Primeira vez repetindo: contador = contador(0) + 1 ----> dessa forma nosso contador vai receber 0 + 1 = 1
    //Segunda vez repetindo: contador = contador(1) + 1 ----> dessa forma nosso contador vai receber 1 + 1 = 2
    //Terceira vez repetindo: contador = contador(2) + 1 ----> dessa forma nosso contador vai receber 2 + 1 = 3
    //Quarta vez repetindo: contador = contador(3) + 1 ----> dessa forma nosso contador vai receber 3 + 1 = 4
    //Quinta vez repetindo: contador = contador(4) + 1 ----> dessa forma nosso contador vai receber 4 + 1 = 5
    //Depois da 5 vez o if se torna verdadeiro e a condicao recebe false, então finaliza o loop!

    //Qualquer dúvida me chamem!!
}