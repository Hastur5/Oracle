let pesoMau = 80;
let alturaMau = 1.68;
let nombreMau = "Mau";

let pesoLuis = 85;
let alturaLuis = 1.72;
let nombreLuis = "Luis";

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

calcular(pesoMau, alturaMau);
imprimir("El IMC de " + nombreMau + " es: " + imc);

calcular(pesoLuis, alturaLuis);
imprimir("El IMC de " + nombreLuis + " es: " + imc);

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
