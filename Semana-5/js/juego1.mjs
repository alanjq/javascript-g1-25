// Piedra, papel o tijera
export function iniciarJuego1() {
    console.log('Juego 1 iniciado');

    let botonGuardar = document.getElementById('juego1_guardarNombre')
    botonGuardar.addEventListener('click', function () {
        let txtNombreJ1 = document.getElementById('juego1_nombre_jugador1')
        if (juego.esNombreValido(txtNombreJ1.value)) {
            document.getElementById('juego1_resultado').innerText = 'El nombre es correcto'
        } else {
            document.getElementById('juego1_resultado').innerText = 'El nombre no es válido'
        }
    })

    const botonJugar = document.getElementById('juego1_jugar')
    botonJugar.addEventListener('click', function(){
        juego.imprimirResultado()
    })
}

let pedirNuevoNombre = ''

// Aqui concentramos los IDs de los elementos
const controles = {
    puntos: {
        j1: 'puntos_jugador1',
        j2: 'puntos_jugador2'
    },
    resultado: 'juego1_resultado'
}

function mostrarMensaje(mensaje) {
    document.getElementById('juego1_resultado').innerText += mensaje
}

const juego = {
    getNombreFromInput() {
        return document.getElementById('juego1_nombre_jugador1').value
    },
    setImage(jugador, imagen){
        document.querySelector('#juego1 img.j' + jugador).src = `img/${imagen.toLowerCase()}.jpg` 
    },
    setLabelJ1(message) {
        document.getElementById('juego1_j1').innerText = message
    },
    setLabelJ2(message) {
        document.getElementById('juego1_j2').innerText = message
        document.querySelector('#juego1 img.j2')
    },
    setLabelResult(message) {
        document.getElementById('juego1_resultado').innerText = message
    },
    setPuntosJ1(){
        document.getElementById('juego1_puntos_jugador1').value = this.scores.puntosJ1
    },
    setPuntosJ2(){
        document.getElementById('juego1_puntos_jugador2').value = this.scores.puntosJ2
    },

    opciones: {
        0: "Piedra", 1: "Papel", 2: "Tijera"
    },
    jugadores: {
        jugador1: "Jugador 1",
        jugador2: "Jugador 2"
    },
    scores: {
        puntosJ1: 0,
        puntosJ2: 0
    },
    cambiarNombre() {
        let nuevonombre = this.pedirNombreUsuario()
        if (this.esNombreValido(nuevonombre)) {
            // Si tiene solo letras y números
            this.jugadores.jugador1 = nuevonombre
            alert('Bienvenido' + nuevonombre)
            this.setLabelResult('Bienvenido' + nuevonombre)
        } else {
            // Si tiene caracteres especiales
            this.jugadores.jugador1 = 'Jugador 1'
            this.setLabelResult('Mejor te llamaré Jugador 1')
            alert('Mejor te llamaré Jugador 1')
        }
    },
    esNombreValido(valor) {
        let REGEXP = new RegExp(/[A-Z0-9]\w+/ig)
        return REGEXP.test(valor)
    },
    pedirNombreUsuario() {
        return this.getNombreFromInput()
    },
    aleatorio: () => Math.floor(Math.random() * 3 - 1) + 1,
    imprimirManoAleatoria() {
        return this.opciones[this.aleatorio()]
    },

    imprimirResultado() {
        let manoJ1 = this.imprimirManoAleatoria();
        let manoJ2 = this.imprimirManoAleatoria();

        // Asignamos el mensaje y la imagen
        this.setLabelJ1(`${this.jugadores.jugador1} [${manoJ1}]`)
        this.setImage(1,manoJ1)

        this.setLabelJ2(`${this.jugadores.jugador2} [${manoJ2}]`)
        this.setImage(2,manoJ2)

        console.log(`${this.jugadores.jugador1} [${manoJ1}]`)
        console.log(`${this.jugadores.jugador2} [${manoJ2}]`)

        this.obtenerGanador(manoJ1, manoJ2)
        this.setPuntosJ1()
        this.setPuntosJ2()
    },

    obtenerGanador(j1, j2) {
        // 0: "Piedra", 1: "Papel", 2: "Tijera"
        if (j1 == 'Piedra') {
            if (j2 == 'Papel') {
                console.warn(`${this.jugadores.jugador2} gana`);
                this.setLabelResult(`${this.jugadores.jugador2} gana`)
                this.scores.puntosJ2++
                return;
            }
            if (j2 == 'Tijera') {
                console.warn(`${this.jugadores.jugador1} gana`);
                this.setLabelResult(`${this.jugadores.jugador1} gana`)
                this.scores.puntosJ1++
                return;
            }
            if (j2 == 'Piedra') {
                this.setLabelResult("Empate")
                console.warn(`Empate`);
                return;
            }
        }
        if (j2 == 'Piedra') {
            if (j1 == 'Papel') {
                console.warn(`${this.jugadores.jugador1} gana`);
                this.setLabelResult(`${this.jugadores.jugador1} gana`)
                this.scores.puntosJ1++
                return;
            }
            if (j1 == 'Tijera') {
                console.warn(`${this.jugadores.jugador2} gana`);
                this.setLabelResult(`${this.jugadores.jugador2} gana`)
                this.scores.puntosJ2++
                return;
            }
            if (j1 == 'Piedra') {
                this.setLabelResult("Empate")
                console.warn(`Empate`);
                return;
            }
        }
    }
}
