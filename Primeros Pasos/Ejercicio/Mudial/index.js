let añoMundial = 1930;
let limite = parseInt(prompt("Ingrese el año límite: "));

function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  let elFili = "Perro Tonto";
  document.write(frase);
  saltoDeLinea();
}

while (añoMundial <= limite) {
  imprimir("Hubo mundial de la FIFA en el año " + añoMundial);
  añoMundial = añoMundial + 4;
}

imprimir("fin");
