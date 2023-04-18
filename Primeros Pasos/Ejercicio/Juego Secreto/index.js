let secreto = Math.round(Math.random() * 10);
let input = document.querySelector("input");
let button = document.querySelector("button");

console.log(secreto)

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
