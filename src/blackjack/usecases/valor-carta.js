/**
 * Determinar el valor de la carta
 * @param {String} carta Ejemplo 10S
 * @returns retorna los puntos equivalentes a la carta
 */

export function varlorCarta(carta) {
  if (!carta) {
    throw new Error("Se requiere un valor String")
  }
    
  const valor = carta.substring(0, carta.length - 1);
  let puntos = 0;

  if (isNaN(valor)) {
    puntos = valor === "A" ? 11 : 10;
  } else {
    puntos = Number(valor);
  }

  return puntos;
}
