function escreverNaTela(algumtexto) {

    document.write(algumtexto);
    document.write("<br>");

}

var numero = parseInt(prompt("Por favor, digite um número: "));

for(var multiplicador = 1; multiplicador <= 10; multiplicador++) {

    escreverNaTela(numero * multiplicador);

}
