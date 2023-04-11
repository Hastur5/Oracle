// let numero1 = 50
// let numero2 = 30

// let nombre = 'Fili'
// let apellido = 'Negro'

// document.write('<h1>Esto es Rojo</h1>')
// document.write(numero1 + numero2)
// document.write('<br>')
// document.write(nombre + ' ' + apellido)
// document.write('<br>')
// document.write((20+25+15)/3)
// document.write('<br>')
// document.write(20+25+15)

var año = 2025
var edadPaola = 22
var edadJimena = 11
var edadLaura = 28
var nombre = "Jimena"
var nombre1 = "Paola"
var nombre2 = "Laura"
var promedio = Math.round((edadJimena + edadLaura + edadPaola)/3)
let saltoLinea = '<br> <br> <br>'

año = 2050

año = 2020

function saltoDeLinea () {
    document.write('<br>')
    document.write('<br>')
    document.write('<br>')
}

function imprimir (frase) {
    document.write(frase)
    saltoDeLinea()
}

imprimir('Juan tiene: ' + (año-2000) + ' años')
//document.write(saltoLinea)
imprimir('Pedro tiene: ' + (año-1995) + ' años')
//document.write(saltoLinea)
imprimir('Carlos tiene: ' + (año-2005) + ' años')
//document.write(saltoLinea)
imprimir('Jimena tiene: ' + (año-2009) + ' años')
//document.write(saltoLinea)
imprimir('Paola tiene: ' + (año-1998) + ' años')
//document.write(saltoLinea)
imprimir('Laura tiene: ' + (año-1992) + ' años')
//document.write(saltoLinea)
imprimir('El promedio de las edades de: ' + nombre + ', ' + nombre1 + ' y ' + nombre2  + ' es: ' + promedio)

