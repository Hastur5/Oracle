let victorias = parseInt(prompt("Informe la cantidad de victorias: "));
let empates = parseInt(prompt("Informe la cantidad de empates: "));
let puntosTotales = victorias * 3 + empates;
let añoPasado = 28;

function saltoDeLinea() {
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

imprimir("El total de puntos del equipo es: " + puntosTotales);

if (puntosTotales > añoPasado) {
  imprimir("El equipo está mejor que el año pasado");
} else if (puntosTotales === añoPasado) {
  imprimir("El equipo está igual que el año pasado");
} else {
  imprimir("El equipo está peor que el año pasado");
}

