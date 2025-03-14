// Pregunta 1 (2pt)
// 1. Diseña una función que calcule la velocidad a la que ha ido un vehículo en
// diferentes tramos de un trayecto. Para ello, la función recibe un array de
// pares de valores como { s: 7.5 , t: 4 } donde s es la distancia y t el tiempo
// 2. Implementa la función usando mapear() teniendo en cuenta que la velocidad
// en cada uno de los tramos es constante
// 3. Realiza una prueba automática


// -----------------------------------
// Pedro Monfort Caro 14/03/25
// -----------------------------------

// [R] --> calcVelocidad([]) --> [R] 

let calcVelocidad = valores.map(e => {

    return e.s / e.t

})


// -----------------------------------

let valores = [{ s: 7.5 , t: 4 }, { s: 10 , t: 2 }]

console.log("Las velocidades registradas son : ", calcVelocidad)

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------