const Blog = {
    init(){
        console.log('Blog iniciado')
        this.getPost(2)
    },
    createPostItem(title, body){
        const padre = document.querySelector('#blog .blog-content')
        const blogPostContainer = document.createElement('article') // <article>
        const postTitle = document.createElement('h3') // <h3>
        const postText = document.createElement('p') // <p>
        postTitle.textContent = title
        postText.textContent = body
        
        // Agregamos titulo y texto
        blogPostContainer.appendChild(postTitle)
        blogPostContainer.appendChild(postText)
        // Agregamos 'blogPostContainer' a 'padre'
        padre.appendChild(blogPostContainer)
    },
    getPost(id){
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((response)=>response.json())
        .then(data=>{
            console.log('datos blog', data);
            this.createPostItem(data.title, data.body)
        })
    }
}

export default Blog
