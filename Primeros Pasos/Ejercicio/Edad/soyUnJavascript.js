const negro = document.querySelector("#fondo");
const blanco = document.querySelector("#blanco");
addEventListener("submit", (fili) => {
  fili.preventDefault();
  console.log(negro.value);
  console.log(blanco.value);
});