let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
let x;
let y;
let radio = 10;
pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

function diseñarCircunferencia(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

function sortearPosicion(maximo) {
  return Math.floor(Math.random() * maximo);
}

function diseñarObjetivo(x, y) {
  diseñarCircunferencia(x, y, radio + 20, "red");
  diseñarCircunferencia(x, y, radio + 10, "white");
  diseñarCircunferencia(x, y, radio, "red");
  console.log(x, y);
}

function actualizarPantalla() {
  limpiarPantalla();
  x = sortearPosicion(570);
  y = sortearPosicion(370);
  diseñarObjetivo(x, y);
}

// setInterval(actualizarPantalla, 1000);