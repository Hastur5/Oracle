var inicioDeSesionRegistrado = "alura";
var contrasenhaRegistrada = "alura321";

for (let i = 1; i <= 3; i++) {
  let contrasenhaIngresada = prompt("Ingrese su contraseña");
  let inicioDeSesionIngresado = prompt("Ingrese su usuario");
  if (
    inicioDeSesionRegistrado == inicioDeSesionIngresado &&
    contrasenhaRegistrada == contrasenhaIngresada
  ) {
    alert("Bienvenido al sistema " + inicioDeSesionIngresado);
  } else {
    alert("inicio de sesión inválido. Favor intente de nuevo");
    if ((i == 3)) {
      alert("Ha excedido el número de intentos");
    }
  }
}
