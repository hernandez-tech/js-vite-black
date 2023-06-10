import { cartaHTML } from "./crear-carta-html";

/**
 * Determina  el turno con forme a los parametros enviados y asigana valores
 * @param {String} tipo Tipo de jugador Ejemplo: usuario
 * @param {Number} posicionPunto Posición del jugador actual
 * @param {Array<String>} deck Baraja del deck en string
 */

export function turno(
  tipo,
  deck,
  posicionPunto,
  puntosJugador,
  puntosComputadora
) {
  const jugardorCartas = document.querySelector("#jugador-cartas");
  const computadorCartas = document.querySelector("#computadora-cartas");
  const contador = document.querySelectorAll("small");

  if (!tipo) {
    throw new Error("Se requiere el tipo del usuario");
  }

  if (posicionPunto === undefined) {
    throw new Error("Se requiere la posición del jugador");
  }

  const { cartaImagen, valor } = cartaHTML(deck);

  if (tipo === "usuario") {
    // Insertando en el HTML y actualziando valor de la baraja
    jugardorCartas.appendChild(cartaImagen);

    // Se realiza la suma del valor de las cartas y se asigna al contador
    puntosJugador += valor;
    contador[posicionPunto].textContent = puntosJugador;
  } else {
    // Insertando en el HTML y actualziando valor de la baraja
    computadorCartas.appendChild(cartaImagen);

    // Se realiza la suma del valor de las cartas y se asigna al contador
    puntosComputadora += valor;
    contador[posicionPunto].textContent = puntosComputadora;
  }

  return { puntosJugador, puntosComputadora };
}
