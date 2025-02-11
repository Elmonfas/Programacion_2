// -----------------------------------
// Pedro Monfort Caro 11/02/2025 integrar()
// -----------------------------------

// f(x) a:R b:R n:R -> integrar(x) -> R
function integrar(f, a, b, n = 1000) {
    let h = (b - a) / n;
    let suma = (f(a) + f(b)) / 2;

    for (let i = 1; i < n; i++) {
        let x = a + i * h;
        suma += f(x);
    }

    return suma * h;
}


// -----------------------------------
function main(){

    let resultado = integrar(x => x * x, 0, 2); // ∫(0 a 2) x^2 dx
    
    console.log("Resultado:", resultado);

}

main()

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------