function saltarLinea() {
  document.write("<br>");
}

function imprimir(frase) {
  document.write(frase);
  saltarLinea();
}

var edad = parseInt(prompt("¿Cuál es tu edad?"));
var tieneLicencia = prompt("¿Tienes licencia? Responde S o N");
var licencia = tieneLicencia.toLowerCase()

if (edad >= 18 && licencia === 's') {
  imprimir("Puedes conducir");
} else if (edad >= 18 && licencia === 'n') {
  imprimir("Saca la licencia, prro!");
} else{
    imprimir('Tas chiavito')
}
