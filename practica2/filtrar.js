// -----------------------------------
// Pedro Monfort Caro 15/02/2025 filtrar()
// -----------------------------------


// [S] -> filtrar() -> [S]
function filtrar(lista, condicion) {

    let res = []

    for(palabra in lista){

        

        if(lista[palabra].includes(condicion)){

            res.push(lista[palabra])

        }

    }

    if(res.length == 0){return "No hay palabras que cumplan esa condicion"}else{return res}

}


// -----------------------------------

let lista = ['hola', 'adios', 'amen', "no", "si"]

console.log(filtrar(lista, "s"))


// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------