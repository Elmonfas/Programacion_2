// Pregunta 2 (2.5pt)
// 1. Diseña una función calcularAreasCirculos() que reciba una lista de objetos
// como { x: 0.5 , r: 4 }. x define el centro de un círculo sobre el eje X (Y=0) y r
// es el radio. La función debe devolver una lista con las áreas de los círculos 2 definidos en la lista 
// de entrada (Recuerda que el área es π * 𝑟2 y  π =  3.14159)
// 2. Implementa la función usando reducir(). No puede usarse la biblioteca Math
// 3. Escribe una prueba automática

let valores = [{ x: 0.5 , r: 4 },{ x: 0.6 , r: 2.4 }]

let calcularAreasCirculos = valores.reduce((acc, element) => {

    let pi = 3.14159

    acc.push(pi * element.r**2)

    return acc

}, [])

console.log("Las areas de de los circulos son : ",calcularAreasCirculos)