// -----------------------------------
// Pedro Monfort Caro 06/02/2025 portres()
// -----------------------------------

// n:R -> porTres(x) -> R
function porTres(n) {
    return n * 3; // Directamente devuelve el resultado
}

// Función asincrónica que espera 3s antes de devolver el resultado
function porTresEspera(n, callback) {
    setTimeout(() => {
        const res = n * 3;
        callback(res);
    }, 3000);
}

// -----------------------------------

console.log(porTres(5)); // Imprime 15

porTresEspera(3, (resultado) => {
    console.log(resultado); // Esto imprimirá 9 después de 3 segundos
});

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------