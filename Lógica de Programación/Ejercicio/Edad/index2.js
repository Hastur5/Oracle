let mau = 30;
let beto = 43;
let toño = 45;
let restaUno = toño - mau;
let restaDos = mau - beto;

function saltoDeLinea() {
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

imprimir("La edad entre tu hermano Toño y tú es de: " + restaUno);
imprimir("La edad entre tú y tu hermano Beto es de: " + restaDos);
