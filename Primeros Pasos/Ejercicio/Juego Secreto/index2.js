// let secreto = Math.round(Math.random() * 10);
let secretos = sortearNumeros(4);
let input = document.querySelector("input");
let button = document.querySelector("button");
let contador = 1

console.log(secretos)

function aleatorio() {
  secretos.push(Math.round(Math.random() * 10));
}

function(cantidad){
  while(contador<=)
  secretos = []
  numeroAleatorio = aleatorio()
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
