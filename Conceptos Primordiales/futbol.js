let victorias = parseInt(prompt("Informe la cantidad de victorias: "));
let empates = parseInt(prompt("Informe la cantidad de empates: "));
let puntosTotales = (victorias * 3) + empates;

function imprimir(frase) {
  document.write(frase);
}

imprimir("El total de puntos del equipo es: " + puntosTotales);
