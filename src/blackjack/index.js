import { crearDeck, turno, turnoComputador, mensajePartida } from "./usecases";

// Seleccionando los elementos
const btnPedir = document.querySelector("#btnPedir");
const btnNuevoJuego = document.querySelector("#btnNuevo");
const btnDetener = document.querySelector("#btnDetener");
const jugardorCartas = document.querySelector("#jugador-cartas");
const computadorCartas = document.querySelector("#computadora-cartas");
const contador = document.querySelectorAll("small");

let auxi = false;
let puntosJugador = 0,
  puntosComputadora = 0;

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

eventListener();

// Eventos
function eventListener() {
  btnNuevoJuego.addEventListener("click", (e) => {
    if (deck.length > 0) {
      resetearJuego();
    }
    deck = crearDeck(tipos, especiales);
    auxi = true;
  });

  btnPedir.addEventListener("click", (e) => {
    if (auxi) {
      const puntos = turno(
        "usuario",
        deck,
        0,
        puntosJugador,
        puntosComputadora
      );

      puntosJugador = puntos.puntosJugador;
      puntosComputadora = puntos.puntosComputadora;

      if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(deck, puntosJugador, puntosComputadora);
      } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(deck, puntosJugador, puntosComputadora);
      }
    } else {
      mensajePartida("Aun no inicia el juego, presione el boton Nuevo Juego");
    }
  });

  btnDetener.addEventListener("click", (e) => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputador(deck, puntosJugador, puntosComputadora);
  });
}

function resetearJuego() {
  puntosJugador = 0;
  puntosComputadora = 0;
  jugardorCartas.textContent = "";
  computadorCartas.textContent = "";
  contador[0].textContent = 0;
  contador[1].textContent = 0;
  btnPedir.disabled = false;
  btnDetener.disabled = false;
}
