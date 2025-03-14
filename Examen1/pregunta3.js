// Pregunta 3 (2.5pt)
// 1. Diseña una función que reciba como parámetro de entrada una lista de
// palabras y que devuelva una palabra formada por las letras del centro de las
// palabras de tamaño impar (las palabras de tamaño par se ignoran)
// Implementa la función usando en cada uno de sus pasos una de las
// funciones filtrar(), mapear() y reducir(). Recuerda que Math.floor(5/2) = 2 es justo la posición central de una palabra de 5 letras
// Realiza una prueba automática con la siguiente lista de palabras:
// [“coladores”, “brisa”, “cree”, “mes”, “cazar”] y comprueba que el resultado es “diez”

// -----------------------------------
// Pedro Monfort Caro 14/03/25
// -----------------------------------

// [S] --> palabraimpar([]) --> palabra:S 

function palabraImpar(palabras){

    let inpares = palabras.filter(e => e.length%2 != 0)

    let palabra = inpares.reduce((acc, e) => {

        acc += e[Math.floor(e.length/2)]

        console.log(acc)

        return acc


    }, [])

    return palabra

}

// -----------------------------------

let palabras = ["coladores", "brisa", "cree", "mes", "cazar"]

console.log(palabraImpar(palabras))

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------