// -----------------------------------
// Pedro Monfort Caro 15/02/2025 reducir()
// -----------------------------------

// [S] -> reducir() -> [S]
function reducir(lista, inicio) {

    let acumulado = inicio

    for(let i = 0; i < lista.length; i++){

        acumulado+=lista[i]

    }

    return acumulado

}

// -----------------------------------

let lista = [1,2,3,4,5]

console.log(reducir(lista, 0))

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------