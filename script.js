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



/*
//agregar una genetica
function agregarGenetica(){
    let nombreNuevo = prompt("Ingrese el nombre de la genetica")
    let porcTHCnuevo = prompt("Indique la cantidad de thc que contiene")
    let porcINDnuevo = prompt("Indique que porcentaje de indica es la genetica")
    let porcSATnuevo = prompt("Indique que porcentaje de sativa es la genetica")
    let floweringNuevo = prompt("Señale en cuantas semanas florece")
    const geneticaNueva = new Genetica (nombreNuevo, porcTHCnuevo, porcINDnuevo, porcSATnuevo, floweringNuevo)
    semillas.push(geneticaNueva) 
}

//pregunta para agregar genetica
function consulta(){
    let pregunta = prompt ("¿Deseas cargar una nueva genetica? (si/no)")
    if(pregunta.toLocaleLowerCase()=="si"){
        agregarGenetica()
        consulta()
    }else{
        alert("La lista de geneticas se encuentra en la consola")
    }
}
consulta()
*/



//muestra array en consola
console.log(semillas)

//agregado de geneticas a la seccion semillas 
let div__geneticas = document.getElementById('div__geneticas')

semillas.forEach((genetica, indice) => {
    div__geneticas.innerHTML += `
    <div class="caja" id="genetica${indice + 1}"> 
        <button id="boton"><img class="foto" src="imagenes/semillas/genetica${indice + 1}.png" alt="${genetica.nombre}"></button>
        <p class="none">${genetica.precio}</p>
    </div>
    `
})

// carrito de semillas 
let total = 0
let carrito = []

function suma(){
    genetica.precio + total
}

function agregadoCarrito(){
    carrito.push ()
}

const eventoMultiple = document.getElementById('boton')
eventoMultiple.addEventListener('click', suma, agregadoCarrito)

console.log(total)
console.log(carrito)