import { activarNavegacion } from "./actividad.mjs"
import { iniciarJuego1 } from './juego1.mjs'
import { initJuego2 } from "./juego2.mjs"
import Blog from './blog.mjs'


// Cargar y ejecutar los scripts una vez que el contenido está listo para usarse
document.addEventListener('DOMContentLoaded', function () {
    // Activar navegación
    const navBar = document.getElementById('navegacion')
    // Usando call back
    // navBar.addEventListener('click', () => activarNavegacion(iniciarJuego1, initJuego2))
    navBar.addEventListener('click', activarNavegacion)

    // Juego 1
    iniciarJuego1()

    // Juego 2
    initJuego2()

    // Blog.init()

})

