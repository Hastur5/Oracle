// let secreto = Math.round(Math.random() * 10);
let secretos = [3, 5, 7, 9];
let input = document.querySelector("input");
let button = document.querySelector("button");

function verificar() {
  let encontrado = false;
  for (let i = 0; i < secretos.length; i++) {
    if (parseInt(input.value) == secretos[i]) {
      alert("Usted acertó");
      encontrado = true;
      break
    }
  }
  if (encontrado == false) {
    alert("Usted erró");
  }
  input.value = "";
  input.focus();
}

button.onclick = verificar;
