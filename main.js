//IMC---------------------------------------------------------

function calculoImc(peso, altura) {

    return peso / (altura * altura);

}

function escreverNaTela(algumTexto) {
    document.write(algumTexto);
    document.write("<br>");
}

var nome = prompt("Informe o seu nome");
var peso = prompt("Informe aqui seu peso");
var altura = prompt("Informe aqui sua altura");

var imc = calculoImc(peso, altura);

escreverNaTela(nome + ", o seu imc é: " + imc);

//FUTEBOL----------------------------------------------------

var vitorias = parseInt(prompt("Quantas vitórias tem seu time?"));
var empates = parseInt(prompt("Quantos empates tem seu time?"));

var pontos = vitorias * 3 + empates

escreverNaTela("Seu time tem: " + pontos + " pontos.");
