function escreverNaTela(algumtexto) {
    document.write(algumtexto);
}

var segredo = Math.round(Math.random() * 10);

var input = document.querySelector("input");

input.focus();

function vereficarSegredo() {


    if(input.value == segredo) {

        alert("Parabes!!! Você acertou o número.");

    } else {

        alert("Que pena!!! Você errou o número, tente novamente.");
        input.value = "";
        input.focus();

    }
}

var button = document.querySelector("button");

button.onclick = vereficarSegredo;