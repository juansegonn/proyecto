
//animacion de la ventana del carrito
let cerrar = document.querySelectorAll(".close")[0]
let abrir = document.querySelectorAll(".carrito__boton")[0]
let carritoAbrir = document.querySelectorAll(".carrito")[0]
let carritoCerrar = document.querySelectorAll(".carrito__container")[0]

abrir.addEventListener("click", function(e){
    e.preventDefault();
    carritoCerrar.style.opacity = "1"
    carritoCerrar.style.visibility = "visible"
    carritoAbrir.classList.toggle("carrito__close")
})

cerrar.addEventListener("click", function(){
    carritoAbrir.classList.toggle("carrito__close")
    setTimeout(function(){
        carritoCerrar.style.opacity = "0"
        carritoCerrar.style.visibility = "hidden"
    },850)
})

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == carritoCerrar){
        carritoAbrir.classList.toggle("carrito__close")

        setTimeout(function(){
            carritoCerrar.style.opacity = "0"
            carritoCerrar.style.visibility = "hidden"
        },850)
    }
})

// carrito de semillas 
let carrito = []

let carrito__container = document.getElementById('carrito__container')
semillas.forEach((genetica, indice) => {
    let btnagregar = document.getElementById(`boton${indice}`)

    btnagregar.addEventListener('click', (e) => {
    e.preventDefault()
    carrito.push(genetica)
    console.log (carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    })
})

//agregado de geneticas al carrito
let carrito__geneticas = document.getElementById('carrito__geneticas')

document.getElementById('carrito__boton').addEventListener('click', () => {
    let geneticasCarrito = JSON.parse(localStorage.getItem('carrito'))

    geneticasCarrito.forEach((genetica, indice) => {
        carrito__geneticas += `
        <div class="carrito__div" id="genetica${indice + 1}">
            <p class="genetica__nombre">${genetica.nombre}</p>
            <p class="genetica__precio">${genetica.precio}</p>
            <button type="button" id="boton${indice + 1}"> x
        </div>
        `
    })
})