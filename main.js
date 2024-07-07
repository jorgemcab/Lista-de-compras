const listaDeItems = document.querySelector(".hero-ul");
const btnAgregarItem = document.querySelector(".btn-agregar-item");
const navForm = document.querySelector(".nav-fomr-productos");
//// DATOS INPUT///
const productoInput = document.querySelector(".producto-input");
const precioInput = document.querySelector(".importe-input")

let arrayItems = [productoInput];

// listaDeItems.innerHTML = `
//     <div class= "contenedor-items">
//         <div class= "viñeta-item"></div>
//         <li class= "items-productos"></li>
//         <i class="fa-solid fa-xmark borrar-item"></i>
//     </div>
//     <button class="btn-borrar-todo">Borrar Todo</button>
//     `

const render = () => {
    listaDeItems.innerHTML = arrayItems.map((indice) => {
        return `
        <div class= "contenedor-items">
            <div class= "viñeta-item"></div>
            <li class= "items-productos intems-li">${indice.productoInput}</li>
            <li class= "items-precio intems-li">${indice.precioInput}</li>
            <i class="fa-solid fa-xmark borrar-item" id="${indice.id}"></i>
        </div>
        <button class="btn-borrar-todo">Borrar Todo</button>
        `
    })
}

const agregarItem = (e) => {
    e.preventDefault();
    if(productoInput.value.length == 0){
        return alert("perro")
    } else {
        arrayItems = [...arrayItems,
            {
                Producto: productoInput.value,
                Monto: precioInput.value,
                id: Date.now()
            }
        ]
    }
}
 
const init = () => {
    document.addEventListener("DOMContentLoaded", render);
    navForm.addEventListener("submit", agregarItem)
}

init();