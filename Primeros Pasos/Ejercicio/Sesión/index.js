    var inicioDeSesionRegistrado = "alura";
    var contrasenhaRegistrada = "alura321";

    var inicioDeSesionIngresado = prompt("Ingrese su usuario");
    var contrasenhaIngresada = prompt("Ingrese su contraseña");

    if( inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada ) {
        alert("Bienvenido al sistema " + inicioDeSesionIngresado);
    } else {
        alert("inicio de sesión inválido. Favor intente de nuevo");
    }
