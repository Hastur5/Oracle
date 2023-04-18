let secreto = 5;
let input = document.querySelector("input");
let button = document.querySelector("button");

function verificar() {
  if (parseInt(input.value) == secreto) {
    alert("Usted acertó");
  } else {
    alert("Usted erró");
  }
  input.value = "";
  input.focus();
}

button.onclick = verificar;
