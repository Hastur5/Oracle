let numero = parseInt(prompt("Ingresa tu número a multiplicar: "));
let limite = parseInt(prompt("¿Hasta qué número quieres multiplicar?"));
let multiplicador = 1;

function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

imprimir("Con While");

while (multiplicador <= limite) {
  imprimir(numero + " * " + multiplicador + " = " + numero * multiplicador);
  multiplicador = multiplicador + 1;
}

imprimir("Con For");

for (let multiplicador = 1; multiplicador <= limite; multiplicador++) {
  imprimir(numero + " * " + multiplicador + " = " + numero * multiplicador);
}
