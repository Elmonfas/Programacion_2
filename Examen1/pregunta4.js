// Pregunta 4 (3)
// Tenemos un sistema de notas con estas calificaciones “suspenso”, “aprobado”,
// “bien”, “notable” o “sobresaliente”, cuyo equivalente numérico es, respectivamente: 3, 5, 7, 8, 10.
// 1. Diseña una función calcularMedia() que reciba una serie de calificaciones como texto y devuelva la media numérica
// 2. Implementa esta función usando dos de las funciones filtrar(), mapear(), reducir() y ninguna otra función 
// 3. Escribe una prueba automática

// -----------------------------------
// Pedro Monfort Caro 14/03/25
// -----------------------------------

// [S] --> calcularMedia([],[{}]) --> nota:R 

function calcularMedia(calificaciones, plantilla) {

    let numericos = calificaciones.map( e => {

       return plantilla[e]
    
    })

    let nota = numericos.reduce((acc, n) => {

        acc += n

        return acc


    }, 0)

    return nota/numericos.length


}

// -----------------------------------

let calificaciones = ["suspenso", "notable", "sobresaliente", "sobresaliente"]

let plantilla = {suspenso:3,aprobado:5,bien:7,notable:8,sobresaliente:10}

console.log(calcularMedia(calificaciones, plantilla))

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------