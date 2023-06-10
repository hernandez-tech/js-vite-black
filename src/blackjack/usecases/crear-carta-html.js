import { pedirCarta } from "./pedir-cartar";
import { varlorCarta } from "./valor-carta";

/**
 * Crea la carta a mostrarse en el DOM y el valor de la misma
 * @param {Array<String>} deck Barraja actual del deck
 * @returns {Object} retorna elemento HTML y el valor de la carta
 */

export function cartaHTML(deck) {
  const carta = pedirCarta(deck); // Se pide una carta de forma del array aleatoreo

  const valor = varlorCarta(carta); // Se le asigna un valor

  // Scripting de cartas
  const cartaImagen = document.createElement("IMG");

  // Atributos de las cartas
  cartaImagen.classList.add("carta");
  cartaImagen.src = `assets/cartas/${carta}.png`;

  return {cartaImagen, valor};
}
