function escreverNaTela(algumTexto) {
    document.write(algumTexto);
    document.write("<br>");
}

var vitorias = parseInt(prompt("Quantas vitórias tem seu time?"));
var empates = parseInt(prompt("Quantos empates tem seu time?"));

var pontos = vitorias * 3 + empates

escreverNaTela("Seu time tem: " + pontos + " pontos.");

if(pontos < 28)  {

    escreverNaTela("Seu time está pior que o ano passado.");

}

if(pontos >= 28) {

    escreverNaTela("Seu time está melhor que o ano passado.");

}


if(pontos == 28) {

    escreverNaTela("Seu time está igual ao ano passado.");
    
}
