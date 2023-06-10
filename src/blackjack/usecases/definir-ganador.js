/**
 * Define al ganador comparando los puntos finales de ambos jugadores
 * @param {Number} puntosComputadora Puntos obtenidos por la computadora
 * @param {Number} puntosJugador Puntos obtenidos por el usuario
 * @returns {String} Retorna el mensaje anunciando al ganador o empate
 */

export function defineGanador(puntosComputadora, puntosJugador) {
  let mensaje;
  if (puntosComputadora === puntosJugador) {
    mensaje = "Es un empate, genial!!";
  } else if (puntosComputadora > puntosJugador) {
    mensaje = "Acabas de ganar el juego!!";
  } else {
    mensaje = "Pierdes la partida";
  }

  return mensaje;
}
