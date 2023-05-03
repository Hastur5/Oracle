let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
let colores = ["blue", "red", "green"];
let colorActual = 0;

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

// function exhibirAlerta(evento) {
//   let x = evento.pageX - pantalla.offsetLeft;
//   let y = evento.pageY - pantalla.offsetTop;
//   console.log(evento);
//   alert(x + " y " + y);
// }

function dibujarCirculo(evento) {
  let x = evento.pageX - pantalla.offsetLeft;
  let y = evento.pageY - pantalla.offsetTop;
  pincel.fillStyle = colores[colorActual];
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);
  pincel.fill();
  console.log(x + " y " + y);
}

pantalla.onclick = dibujarCirculo;

function alterarColor() {
  colorActual++;
  if (colorActual == 3) {
    colorActual = 0;
  }
  return false;
}

pantalla.oncontextmenu = alterarColor;
