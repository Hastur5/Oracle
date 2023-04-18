function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

for (let i = 1; i <= 3; i++) {
  for (let columnas = 1; columnas <= 10; columnas++) {
    document.write("*");
  }
  saltoDeLinea();
}

imprimir("Fin");
