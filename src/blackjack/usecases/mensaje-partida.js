/**
 * Imprime mensaje informando al jugador el estado de la partida
 * @param {String} mensaje Mensaje del estado de la partida 
 */
export function mensajePartida(mensaje = "Bienvenido jugador al Blackjack") {
  const pagina = document.querySelector("body");

  // Scripting del mensaje
  const texto = document.createElement("P");

  // Agregando clases
  texto.classList.add("textoMensaje");
  texto.textContent = mensaje;

  // Insertando en el HTML
  pagina.appendChild(texto);

  // Eliminando mensaje despues de 3 segundos
  setTimeout(() => {
    texto.remove();
  }, 5000);
}
