function escreverNaTela(algumtexto) {
    alert(algumtexto);
}

function geradorDeNumero() {
    return Math.round(Math.random() * 10);
}

function sorteiaNumero(quantidade) {

    var numeros = [];
    var tamanhoLista = 1;

    while(tamanhoLista <= quantidade) {

        var numeroAleatorio = geradorDeNumero();
        var achou = false;

        if(numeroAleatorio !== 0) {
            for(posicao = 0; posicao < numeros.length; posicao++) {

                if(numeros[posicao] == numeroAleatorio) {

                    achou = true;
                    break;

                }
            }

            if(achou == false) {

                numeros.push(numeroAleatorio);
                tamanhoLista++;
            }
        }
    }

    return numeros;
    
}

var segredo = sorteiaNumero(2);
console.log(segredo);

var input = document.querySelector("input");
input.focus();

function vereficarSegredo() {

    var achou = false;
    var acertou = false;

    for(posicao = 0; posicao <= segredo.length; posicao++) {

        if(input.value == segredo[posicao]) {

            escreverNaTela("Parabes!!! Você acertou o número.");
            achou = true;
            acertou = true;
            break;

        }
    }

    if(achou == false) {
        escreverNaTela("Que pena!!! Você errou o número, tente novamente.");
    }

    input.value = "";
    input.focus();

    if(acertou == true) {
        escreverNaTela("Gerando novos números.");

        segredo = sorteiaNumero(2);
        console.log(segredo);
    }
}

var button = document.querySelector("button");

button.onclick = vereficarSegredo;