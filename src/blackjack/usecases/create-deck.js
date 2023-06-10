import _ from "underscore";

/**
 * Esta funcion regresa un deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna el deck con las cartas de forma aleatorea
 */

export function crearDeck(tiposDeCarta, tiposEspeciales) {
  if (!tiposDeCarta || tiposDeCarta.length === 0) {
    throw new Error("tiposDeCartas es obligatorio como un arreglo de string");
  }

  if (!tiposEspeciales || tiposEspeciales.length === 0) {
    throw new Error("tiposEspeciales es obligatorio como un arreglo de string");
  }

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    tiposDeCarta.forEach((tipo) => deck.push(i + tipo));
  }

  tiposEspeciales.forEach((especial) => {
    tiposDeCarta.forEach((tipo) => deck.push(especial + tipo));
  });

  return _.shuffle(deck); // Enterga la baraja de forma aleatoria
}
