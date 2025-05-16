// Juego 2: objetos
const jugador = {
    actualizarInterfaz(){
        const container = document.querySelector('#juego2 .contenedor')
        container.querySelector('.j1 .energia').innerText = this.vida
        container.querySelector('.j1 .energia').style.width = this.vida + '%'
        container.querySelector('.j1 .nombre').innerText = this.nombre
        container.querySelector('.j1 .poder').innerText = this.poder
        container.querySelector('.j1 .vida').innerText = this.totalVida
        container.querySelector('.j1 .personaje').src = "img/ryu_attack.png"
    },
    nombre: "Ryu",
    poder: 10,
    vida: 100,
    totalVida: 100,
    atacar: function () {
        console.log(this.nombre, 'atacó a', enemigo.nombre, 'con', this.poder, 'puntos de poder.')
        enemigo.vida = enemigo.vida - this.poder;
        if (enemigo.vida <= 0) {
            enemigo.vida = 0
            console.error(enemigo.nombre, 'es derrotado.');
        }
        this.actualizarInterfaz()

        // Modificar el HTML donde mostramos los puntos de vida del enemigo
        // document.getElementById('estado_enemigo').innerText = enemigo.vida + '/ PV'
    },
    estado: function () {
        console.log(this.nombre, 'tiene', this.vida, 'puntos de vida.')
    }
}


const enemigo = {
    nombre: 'Ken',
    poder: 25,
    vida: 100,
    totalVida: 200,
    atacar: function () {
        console.log(this.nombre, 'atacó a', jugador.nombre, 'con', this.poder, 'puntos de poder.')
        jugador.vida = jugador.vida - this.poder
        if (jugador.vida <= 0) {
            jugador.vida = 0
            console.error(jugador.nombre, 'pierde');
        }
        // Modificar el HTML donde mostramos los puntos de vida del jugador
        // document.getElementById('estado_jugador').innerText = jugador.vida + '/ PV'
    },
    estado: function () {
        console.log(this.nombre, 'tiene', this.vida, 'puntos de vida.')
    },
}

export function initJuego2(){
    console.log('Iniciar juego 2')

    // Agregamos evento de atacar
    document.querySelector('#juego2 .j1 .atacar').addEventListener('click', function(){
        jugador.atacar()
    })
    // atacar
    // actualizarInterfaz
}
