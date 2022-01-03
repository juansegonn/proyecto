let div__geneticas = document.getElementById('div__geneticas')
let carrito__boton = document.getElementById('carrito__boton') 
let carrito = document.getElementById('carrito')

fetch('geneticas.json')
.then(response => response.json())
.then(dataGeneticas => {
    dataGeneticas.forEach ((geneticaEnArray, indice )=> {
        div__geneticas.innerHTML += `
        <div class="caja" id="genetica${indice}"> 
            <button id="boton${indice}"><img class="foto" src="imagenes/semillas/genetica${indice + 1}.png" alt="${geneticaEnArray.nombre}"></button>
            <p class="none">${geneticaEnArray.precio}</p>
        </div>
        `
    });
    
    dataGeneticas.forEach((geneticaEnArray, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(geneticas.find(producto => producto.nombre == geneticaEnArray.nombre)) {
                let index = geneticas.findIndex(producto => producto.nombre = geneticaEnArray.nombre)
                geneticas[index].cant++
                localStorage.setItem('carrito', JSON.stringify(geneticas))
            } else{
                let nuevoProducto = new Genetica (geneticaEnArray.nombre, geneticaEnArray.porcTHC, geneticaEnArray.porcIND, geneticaEnArray.porcSAT, geneticaEnArray.flowering, geneticaEnArray.precio)
                geneticas.push(nuevoProducto)
                localStorage.setItem('carrito', JSON.stringify(geneticas))
            }
        })
    })
})

carrito__boton.addEventListener('click', () => {
    let productosDelStorage = JSON.parse(localStorage.getItem('carrito'))

    productosDelStorage.forEach(productoCarrito, indice)
    carrito.innerHTML += `
         <div id="producto__carrito${indice}">
            <p>${productoCarrito.nombre}</p>
            <p>${productoCarrito.precio}</p>
            <p>${productoCarrito.cant}</p>
        </div>
    `
})