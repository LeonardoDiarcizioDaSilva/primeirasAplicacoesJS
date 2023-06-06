function calculoImc(peso, altura) {

    return peso / (altura * altura);

}

function escreverNaTela(algumTexto) {
    document.write(algumTexto);
}

var nome = prompt("Informe o seu nome");
var peso = prompt("Informe aqui seu peso");
var altura = prompt("Informe aqui sua altura");

var imc = calculoImc(peso, altura);

escreverNaTela(nome + ", o seu imc é: " + imc);
