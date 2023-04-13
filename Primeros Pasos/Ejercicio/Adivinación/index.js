let numeroPensado = Math.round(Math.random() * 10);
let numeroLanzado = parseInt(prompt("Elige un número entre 0 y 10"));

function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

if (numeroPensado == numeroLanzado) {
  imprimir("Usted acertó");
} else {
  imprimir("Usted erró, el número pensado era: " + numeroPensado);
}
