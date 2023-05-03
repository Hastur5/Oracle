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
  x = sortearPosicion(600);
  y = sortearPosicion(400);
  diseñarObjetivo(x, y);
}

function disparar(evento) {
  let ejeX = evento.pageX - pantalla.offsetLeft;
  let ejeY = evento.pageY - pantalla.offsetTop;
  if (
    x < ejeX + radio &&
    x > ejeX - radio &&
    y < ejeY + radio &&
    y > ejeY - radio
    ) {
    alert("Acertaste");
  }
}

pantalla.onclick = disparar;
setInterval(actualizarPantalla, 1000);
