import { turno } from "./turno-general";
import { defineGanador } from "./definir-ganador";
import { mensajePartida } from "./mensaje-partida";

export function turnoComputador(deck, puntosJugador, puntosComputadora) {
  do {
    const puntos = turno(
      "computador",
      deck,
      1,
      puntosJugador,
      puntosComputadora
    );
    puntosComputadora = puntos.puntosComputadora;

    if (puntosJugador > 21) {
      break;
    }
  } while (puntosComputadora < puntosJugador && puntosComputadora <= 21);
  const mensaje = defineGanador(puntosComputadora, puntosJugador);
  mensajePartida(mensaje);
}
