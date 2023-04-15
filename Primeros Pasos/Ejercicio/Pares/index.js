let numeros = 0;
let pares = numeros + 2;

function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

while (numeros <= 100) {
  imprimir("Este es el número a imprimir: " + numeros);
  numeros = numeros + pares;
}

imprimir('FIN :)')