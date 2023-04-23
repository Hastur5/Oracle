const sumar = (numero1, numero2) => {
  let resultado = numero1 + numero2;
  document.write("Hola, " + resultado);
};

addEventListener("submit", (fili) => {
  fili.preventDefault();
  numero1 = parseInt(document.querySelector("#fondo").value);
  numero2 = parseInt(document.querySelector("#blanco").value);
  sumar(numero1, numero2);
});