// -----------------------------------
// Pedro Monfort Caro 15/02/2025 allTogetherNow
// -----------------------------------

let palabras = ["es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "dia"]


// obtenga una nueva lista con cada palabra escrita del revés

let palabras_reverse = palabras.map(palabra => palabra.split("").reverse().join(""))

console.log(palabras_reverse)

//calcule el total de caracteres de la frase completa

let totalCaracteres = palabras.reduce((total, palabra) => total + palabra.length, 0) + (palabras.length - 1)

console.log(totalCaracteres)

// calcule cuántas palabras tienen más de 5 letras

let palabrasLargas = palabras.filter(palabra => palabra.length > 5).length

console.log(palabrasLargas)


// obtenta una palabra que sea la concatenación de aquéllas con 3 letras o menos

let resultado = palabras
    .filter(palabra => palabra.length <= 3)
    .reduce((acumulador, palabra) => acumulador + palabra, "")

console.log(resultado)
