// pincel.fillStyle = "lightgrey";
// pincel.fillRect(10, 0, 600, 400);

// pincel.fillStyle = "green";
// pincel.fillRect(0, 0, 200, 400);

// pincel.fillStyle = "red";
// pincel.fillRect(400, 0, 200, 400);

// pincel.fillStyle = " yellow";
// pincel.beginPath();
// pincel.moveTo(300,200);
// pincel.lineTo(200,400)
// pincel.lineTo(400,400)
// pincel.fill()

// pincel.fillStyle = " blue";
// pincel.beginPath();
// pincel.arc(300,200, 50, 0, 2*3.14);
// pincel.fill()

//iteraciones

// function dibujarCuadrado(x, y, color) {
//   let pantalla = document.querySelector("canvas");
//   let pincel = pantalla.getContext("2d");
//   pincel.fillStyle = color;
//   pincel.fillRect(x, y, 50, 50);
//   pincel.strokeStyle = "black";
//   pincel.strokeRect(x, y, 50, 50);
// }

// // while (x < 600) {
// //   dibujarCuadrado(x, 0, "red");
// //   dibujarCuadrado(x, 50, "yellow");
// //   dibujarCuadrado(x, 100, "green");
// //   x = x + 50;
// // }

// for (let x = 0; x < 600; x = x + 50) {
//   dibujarCuadrado(x, 0, "red");
//   dibujarCuadrado(x, 50, "yellow");
//   dibujarCuadrado(x, 100, "green");
// }

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * 3.14);
  pincel.fill();
}

// dibujarCirculo(300, 200, 20, "red");

for (let x = 0; x < 600; x = x + 50) {
  dibujarCirculo(300, 200, 25, "red");
  dibujarCirculo(300, 150, 25, "yellow");
  dibujarCirculo(350, 200, 25, "black");
  dibujarCirculo(300, 250, 25, "blue");
  dibujarCirculo(250, 200, 25, "orange");
}
