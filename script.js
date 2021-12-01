//array
let semillas =[]

//constructor
class Genetica {
    constructor (nombre, porcTHC, porcIND, porcSAT, flowering, precio) {
        this.nombre = nombre;
        this.porcTHC = porcTHC;
        this.porcIND = porcIND;
        this.porcSAT = porcSAT;
        this.flowering = flowering;
        this.precio = precio;
    }
}

//cargado de objetos (geneticas)
const genetica1 = new Genetica ("banana crasher", "21%", "50%", "50%", "9 weeks", 15300)
const genetica2 = new Genetica ("bananaslurricane", "24%", "50%", "50%", "8 a 9 weeks", 15300)
const genetica3 = new Genetica ("garlic vibez", "27%", "50%", "50%", "9 weeks", 15300)
const genetica4 = new Genetica ("glukies bx", "24%", "60%", "40%", "9 a 10 weeks", 11900)
const genetica5 = new Genetica ("gorila sherbert", "27%", "60%", "40%", "9 weeks", 9350)
const genetica6 = new Genetica ("haze berry", "27%", "60%", "40%", "8 weeks", 9350)
const genetica7 = new Genetica ("head band bubba", "18%", "60%", "40%", "8 weeks", 9350)
const genetica8 = new Genetica ("la confidencial og", "27%", "70%", "30%", "8 weeks", 9350)
const genetica9 = new Genetica ("orange apricot", "25%", "40%", "60%", "8 a 9 weeks", 15300)
const genetica10 = new Genetica ("orange storm", "24%", "50%", "50%", "8 a 9 weeks", 15300)
const genetica11 = new Genetica ("papaya", "30%", "20%", "80%", "9 weeks", 15300)
const genetica12 = new Genetica ("tropical smoothie", "25%", "50%", "50%", "8 weeks", 11900)
const genetica13 = new Genetica ("chocolate bubba", "25%", "40%", "60%", "9 weeks", 9350)

//push de geneticas al array
semillas.push(genetica1, genetica2, genetica3, genetica4, genetica5, genetica6, genetica7, genetica8, genetica9, genetica10, genetica11, genetica12, genetica13) 

//muestra array en consola
console.log(semillas)

//agregado de geneticas a la seccion semillas 
let div__geneticas = document.getElementById('div__geneticas')

semillas.forEach((genetica, indice) => {
    div__geneticas.innerHTML += `
    <div class="caja" id="genetica${indice + 1}"> 
        <button id="boton${indice + 1}"><img class="foto" src="imagenes/semillas/genetica${indice + 1}.png" alt="${genetica.nombre}"></button>
        <p class="none">${genetica.precio}</p>
    </div>
    `
})

// carrito de semillas 
let carrito = []

let carrito__container = document.getElementById('carrito__container')
semillas.forEach((genetica, indice) => {
    let btnagregar = document.getElementById(`boton${indice + 1}`)

    btnagregar.addEventListener('click', (e) => {
    e.preventDefault()
    carrito.push(genetica)
    console.log (carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    })
})

//ventana carrito
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