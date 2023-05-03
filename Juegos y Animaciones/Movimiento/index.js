let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
let x = 0;
let y = 20;
pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

function diseñarCircunferencia(x, y, radio) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

function actualizarPantalla() {
  limpiarPantalla();
  diseñarCircunferencia(x, y, 10);
  x++;
  if (x == 600) {
    x = 0;
    y += 20;
    if(y == 400){
      y = 0;
    }
  }
  console.log(x, y);
}

setInterval(actualizarPantalla, 1);
