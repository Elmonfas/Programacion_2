// -----------------------------------
// Pedro Monfort Caro 15/02/2025 mapear()
// -----------------------------------


// [S] -> mapear() -> [S]
function mapear(lista) {

    let res = []

    for(i in lista){

        res.push(lista[i].length)

    }

    return res

}

// -----------------------------------

let lista = ["hola", "salma", "adios", "pedro","si", "ana"]

console.log(mapear(lista))


// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------