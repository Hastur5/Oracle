// let secreto = Math.round(Math.random() * 10);
let secretos = [];
secretos.push(aleatorio());
secretos.push(aleatorio());
secretos.push(aleatorio());
secretos.push(aleatorio());
let input = document.querySelector("input");
let button = document.querySelector("button");

function aleatorio() {
  secretos.push(Math.round(Math.random() * 10));
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

button.onclick = verificar;
