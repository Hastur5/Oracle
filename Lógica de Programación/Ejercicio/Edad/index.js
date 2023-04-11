const tuEdad = document.getElementById('tuEdad')
const suEdad = document.getElementById('suEdad')
const btn = document.getElementById('btn')
const operacion = document.getElementById('operacion')
const formulario = document.getElementById('formulario')

let mensaje = 'La diferencia de edad entre tu compa y tú es de: '

const restar = (tuEdad, suEdad) => {
    let resta = tuEdad - suEdad
    document.write(mensaje)
    document.write(resta)
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let tuEdad = document.getElementById('tuEdad').value
    let suEdad = document.getElementById('suEdad').value
    restar(tuEdad, suEdad)
})
