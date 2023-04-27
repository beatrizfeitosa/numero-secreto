function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute; //numero inteiro

   if (seChuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h1>FIM DE JOGO</h1>
                <button id="jogarNovamente" class="btn-jogar">Jogar novamente</button>
            `;
            document.body.style = 'background-color: darkred;';

        } else {
            elementoChute.innerHTML += '<div>Valor inválido</div>';
        }
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML +=  `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogarNovamente" class="btn-jogar">Jogar novamente</button>
        `;
    }
}

function seChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload();
    }
})
