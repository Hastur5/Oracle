let familia = parseInt(
  prompt(
    "Ingresa el número de familiares de los que querrías calcular la edad promedio: "
  )
);
let inicio = 1;
let edadTotal = 0;
let mediaEdad;

console.log(familia)

function saltoDeLinea() {
  document.write("<br><br><br>");
}

function imprimir(frase) {
  document.write(frase);
  saltoDeLinea();
}

// Este estaba mal

// while (inicio <= familia) {
//   let edades = parseInt(prompt("Ingresa las edades: "));
//   if (inicio !== familia) {
//       edadTotal += edades;
//       console.log(edadTotal)
//     }
//     inicio = inicio + 1;
// }

// while (inicio <= familia) {
//   let edades = parseInt(prompt("Ingresa las edades: "));
//   edadTotal += edades;
//   inicio = inicio + 1;
// }

for (let i = 1; i <= familia; i++) {
  let edades = prompt("Ingresa las edades: ");
  edadTotal += parseInt(edades);
  mediaEdad = edadTotal / familia;
}
imprimir("La edad promedio de los miembros que ingresaste es de: " + mediaEdad);
