function escreverNaTela(algumtexto) {

    document.write(algumtexto);
    document.write("<br>");

}

var loginCadastrado = "alura";
var senhaCadastrada = "alura321";

var maximoTentativas = 3;
var tentativaAtual = 1;

while(tentativaAtual <= maximoTentativas) {

    var loginInformado = prompt("Informe seu login");

    if(loginInformado == loginCadastrado) {

        var senhaInformada = prompt("Informe sua senha");

        tentativaAtual = 1;

    } else {

        alert("O login informado esta errado. Por favor insira novamente.");

    }

    if(senhaInformada == senhaCadastrada) {

        escreverNaTela("Login efetuado com sucesso!");

        tentativaAtual = maximoTentativas;

    } else if(senhaInformada != senhaCadastrada && loginInformado == loginCadastrado) {

        alert("A senha informado esta errada. Por favor insira novamente.");

    }

    tentativaAtual = tentativaAtual +1  
}

var idade = parseInt(prompt("Digite sua idade"));

while(isNaN(idade)) {
    idade = parseInt(prompt("Digite sua idade"));    
}

alert(idade);
