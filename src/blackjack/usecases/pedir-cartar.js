/**
 * Esta función retorna una carta de la baraja 
 * @param {Array<String>} deck 
 * @returns {String} retorna una carta del deck
 */

export function pedirCarta(deck) {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  return deck.pop(); // Carta que es eliminada del array y pasa a la "mesa"
}
