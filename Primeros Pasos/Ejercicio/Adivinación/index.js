let numeroPensado = Math.round(Math.random() * 10);
let i = 0;
let limite = 3;

console.log(numeroPensado);

function imprimir(frase) {
  document.write(frase);
}

while (i < limite) {
  numeroLanzado = parseInt(prompt("Elige un número entre 0 y 10"));
  console.log(numeroLanzado);
  if (numeroPensado == numeroLanzado) {
    break;
  } else {
    i = i + 1;
  }
}

if (numeroPensado == numeroLanzado) {
  imprimir("Usted acertó, el número pensado fue: " + numeroPensado);
} else {
  imprimir("Usted erró, el número pensado era: " + numeroPensado);
}
