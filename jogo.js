function escreverNaTela(algumTexto) {
    document.write(algumTexto);
    document.write("<br>");
}

var numero = Math.round(Math.random() * 10);
var tentativas = 1;

while(tentativas <= 3) {

    var chute = parseInt(prompt("Digite um número de 1 a 10 para adivinhar."));

    if(chute == numero) {

        escreverNaTela("Parabéns!!! Você acertou, o número pensado foi: " + numero);
        break;

    } else {

        escreverNaTela("Que pena! Você errou!");

    }

    tentativas++;

}
