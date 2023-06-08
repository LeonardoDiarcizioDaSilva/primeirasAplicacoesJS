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

escreverNaTela(nome + ", o seu IMC é: " + imc);

if(imc < 18.5) {

    escreverNaTela("Seu IMC está abaixo do normal.");

}

if(imc > 35) {

    escreverNaTela("Seu IMC está acima do normal.");

}

if(imc >= 18.5 && imc <= 35) {

    escreverNaTela("Seu IMC está muito bom!");

}
