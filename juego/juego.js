let puntacionJugador = 0;
let puntacionComputadora = 0;

function jugar(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera']
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
    let resultado = ''

    if (opcionUsuario === opcionComputadora) {
        resultado = `Empate, ambos eligieron ${opcionUsuario}.`;
    } else if (
        (opcionUsuario === 'piedra' && opcionComputadora === 'tijera') ||
        (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
        (opcionUsuario === 'tijera' && opcionComputadora === 'papel')
    ) {
        resultado = `Ganaste, ${opcionUsuario} gana a ${opcionComputadora}.` ;
        puntacionJugador++;
    } else {
        resultado = `Perdiste, ${opcionComputadora} gana a ${opcionUsuario}.`;
        puntacionComputadora++;
    }

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('puntacion').textContent = `Jugador: ${puntacionJugador} | Computadora: ${puntacionComputadora}`;

    if (puntacionJugador === 3 || puntacionComputadora === 3) {
        finJuego();
    }
}

function finJuego() {
    const resultado = puntacionJugador === 3 ? '¡Felicidades, has ganado la partida!' : '¡Lo siento, perdiste esta partida.!';
    document.getElementById('resultado').textContent = resultado;

    document.getElementById('btnPiedra').disabled = true;
    document.getElementById('btnPapel').disabled = true;
    document.getElementById('btnTijera').disabled = true;
    
}