// Con prompt.

let nombre = prompt("¿Cuál es tu nombre?");
let peso = prompt(nombre + ", informa tu peso.");
let altura = prompt(nombre + ", informa tu altura.");

function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

function calcular(nombre, peso, altura) {
  imc = peso / (altura * altura);
  imprimir(nombre + ", tu IMC calculado es:  " + imc);
}

calcular(nombre, peso, altura);

console.log(imc);
