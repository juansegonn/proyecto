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