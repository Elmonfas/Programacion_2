// -----------------------------------
// Pedro Monfort Caro 27/02/2025 horarios
// -----------------------------------

// 

let estudiante = {

    horario : {
        lunes: [
            { hora: "8:30", asignatura: "física" },
            { hora: "10:15", asignatura: "matemáticas" },
            { hora: "12:00", asignatura: "inglés" }
        ],
        martes: [
            { hora: "8:30", asignatura: "programación" },
            { hora: "10:15", asignatura: "matemáticas" }
        ],
        miércoles: [
            { hora: "8:30", asignatura: "inglés" },
            { hora: "10:15", asignatura: "física" }
        ],
        jueves: [
            { hora: "8:30", asignatura: "física" },
            { hora: "10:15", asignatura: "matemáticas" },
            { hora: "12:00", asignatura: "inglés" }
        ],
        viernes: [
            { hora: "8:30", asignatura: "programación" },
            { hora: "10:15", asignatura: "matemáticas" }
        ]
    },

    mostrar_horarios : function () {

        let texto = JSON.stringify(this.horario)

        console.log(texto)

        return texto
    
    },

    buscar_asignatura : function (asignatura) {
        let resultado = [];
    
        for (let dia in this.horario) {
            this.horario[dia].forEach(clase => {
                if (clase.asignatura.toLowerCase() === asignatura.toLowerCase()) {
                    resultado.push({ dia, hora: clase.hora });
                }
            });
        }

        console.log(resultado)
    
        return resultado;
    }

}

// -----------------------------------
estudiante.buscar_asignatura("programación")


// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------