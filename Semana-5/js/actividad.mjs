import Blog from "./blog.mjs"

export function activarNavegacion() {
    let element = event.target
    if (element.tagName == 'SPAN') {
        let link = element.dataset.section
        toggleActive(link)

        // Cargar el contenido del blog
        if (link === 'blog') {
            // cargarContenido()
            // Blog.init()
            // Blog.getPost(1 )
            Blog.getPost(5 )
            Blog.getPost(2 )
            Blog.getPost(2 )
            Blog.getPost(5 )
            Blog.getPost(2 )
        }
    }
}

// Quita las classes 'active' a todas las secciones
function toggleActive(nuevoElemento) {
    let allSections = document.querySelectorAll('main section')
    allSections.forEach((seccion) => seccion.classList.remove('active'))
    // Agregamos la clase al nuevo elemento
    document.querySelector('#' + nuevoElemento).classList.add('active')
}

function cargarContenido() {
    let contenido = []
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then((data)=>{
        let todoElHtml = ''

        data.map((publicacion)=>{
            todoElHtml += htmlPublicacion(publicacion.title, publicacion.body)
        })

        document.querySelector('#blog .blog-content').innerHTML = todoElHtml
    })
}

function htmlPublicacion(titulo, contenido){
    return `<div class="blog-item">
        <img src="https://picsum.photos/500/250" />
        <b>${titulo}</b><br/>
        <p>${contenido}</p>
    </div>`
}
