// -----------------------------------
// Pedro Monfort Caro 27/02/2025 objetos
// -----------------------------------

// 
let pila = {

    lista : ['hello'],

    cima : 0,

    apilar : function(n){

        this.lista.push(n)

        this.cima = n

        return this.lista

    },

    desapilar : function()  {

        this.cima = this.lista.pop()

        return this.lista
    }

    

}
// -----------------------------------


// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------