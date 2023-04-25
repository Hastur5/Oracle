let input = document.querySelector("input");
let button = document.querySelector("button");
let secretos;
secretos = sortearNumeros(4);

function sortearNumeros(cantidad) {
  secretos = [];
  while (secretos.length < cantidad) {
    let numeroAleatorio = Math.floor(Math.random() * 10);
    if (!secretos.includes(numeroAleatorio)) {
      secretos.push(numeroAleatorio);
    }
  }
  console.log(secretos);
  return secretos;
}

function verificar() {
  let encontrado = false;
  for (let i = 0; i < secretos.length; i++) {
    if (parseInt(input.value) == secretos[i]) {
      alert("Usted acertó");
      encontrado = true;
      break;
    }
  }
  if (encontrado == false) {
    alert("Usted erró");
  }
  input.value = "";
  input.focus();
}

addEventListener("submit", (fili) => {
  fili.preventDefault();
  console.log("click");
  verificar();
});
