//Variaveis Utilizadas

let soma = document.querySelector('#soma') as HTMLInputElement;

const buttonAtualizar = document.querySelector('#atualizar-saldo') as HTMLButtonElement;

let buttonLimpar = document.querySelector('#limpar-saldo') as HTMLButtonElement;

let campoSaldo = document.querySelector('#campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0";


let saldoTotal = 0






// Funções da soma 
function somarAoSaldo ( num : number ) : void {

    saldoTotal += num;

    soma.value = '';

    if ( campoSaldo ) {

        campoSaldo.innerHTML = saldoTotal.toString()
    }
}



function limparSaldo () : void {

    saldoTotal = 0

    if ( campoSaldo ) {

        campoSaldo.innerHTML = saldoTotal.toString();
    }

}

        

//Eventos de click
buttonAtualizar.addEventListener( 'click', () => {
         
    somarAoSaldo( Number( soma.value));

})


buttonLimpar.addEventListener( 'click', () => {

        limparSaldo();

})




/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
