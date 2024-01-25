
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//--------------------------------------------------------------
function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML  = texto;
    return;
}
//---------------------------------------------------------------
//encapsulamiento
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
//---------------------------------------------------------------
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Felicitaciones!! Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//--------------------------------------------------------
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
//---------------------------------------------------------
function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya has realizado todos los intentos');

    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
    
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log (listaNumerosSorteados);
            return numeroGenerado;
        }
    }    
}
//------------------------------------------------------  
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
//------------------------------------------------------
condicionesIniciales();
