let nombre = prompt("¿Cuál es tu nombre?");
let peso = parseInt(prompt("¿Cuál es tu peso?"));
let altura = parseFloat(prompt("¿Cuál es tu altura?"));

function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

function calcular(peso, altura) {
  imc = peso / (altura * altura);
  return imc;
}

calcular(peso, altura);

if (imc <= 18.5) {
  imprimir(nombre + " tu IMC es de: " + imc + ", tienes insuficiencia ponderal");
} else if (imc <= 24.9) {
  imprimir(nombre + " tu IMC es de: " + imc + ", estás en un intervalo normal.");
} else if (imc == 25) {
  imprimir(nombre + " tu IMC es de: " + imc + ", tienes sobrepeso.");
} else if (imc <= 29.9) {
  imprimir(nombre + " tu IMC es de: " + imc + ", tienes preobesidad.");
} else if (imc == 30) {
  imprimir(nombre + " tu IMC es de: " + imc + ", tienes obesidad.");
} else if (imc <= 34.9) {
  imprimir(nombre + " tu IMC es de: " + imc + ", tienes obesidad clase I");
} else if (imc <= 39.9) {
  imprimir(nombre + " tu IMC es de: " + imc + ", tienes obesidad clase II");
} else {
  imprimir(nombre + " tu IMC es de: " + imc + ", tienes obesidad clase III");
}

// let pesoMau = 80;
// let alturaMau = 1.68;
// let nombreMau = "Mau";

// let pesoLuis = 85;
// let alturaLuis = 1.72;
// let nombreLuis = "Luis";

// function saltoDeLinea() {
//   document.write('<br><br><br>')
// }

// function imprimir(frase) {
//   document.write(frase);
//   saltoDeLinea();
// }

// function calcular(nombre, peso, altura) {
//   imc = peso / (altura * altura);
//   imprimir("El IMC de " + nombre + " es: " + imc);
// }

// calcular(nombreMau, pesoMau, alturaMau);

// calcular(nombreLuis, pesoLuis, alturaLuis);
