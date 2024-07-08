const listaDeItems = document.querySelector(".hero-ul");
const btnAgregarItem = document.querySelector(".btn-agregar-item");
const navForm = document.querySelector(".nav-fomr-productos");
const btnBorrarItem = document.querySelector('.borrar-item')
//// DATOS INPUT///
const productoInput = document.querySelector(".producto-input");
const precioInput = document.querySelector(".importe-input");
const btnBorrarTodo = document.querySelector(".btn-borrar-todo")

let arrayItems = JSON.parse(localStorage.getItem("lista")) || [];

const saveLocalStorage = () => {
    localStorage.setItem("lista", JSON.stringify(arrayItems))
}

const render = () => {
    listaDeItems.innerHTML = arrayItems.map((indice) => {
        return `
        <div class= "contenedor-items">
            <div class= "viñeta-item"></div>
            <li class= "items-productos intems-li">${indice.Producto}</li>
            <li class= "items-precio intems-li">${indice.Monto}</li>
            <i class="fa-solid fa-xmark borrar-item" data-id ="${indice.id}"></i>
        </div>
        `});
};

const btnToggle = () => {
    if(arrayItems.length <= 1){
         btnBorrarTodo.classList.add("hidden")
    } else {
        btnBorrarTodo.classList.remove("hidden")
    }
};

const upDateUi = () => {
    render();
    btnToggle();
    navForm.reset();
    saveLocalStorage();
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
            }];};
    upDateUi()
}

const init = () => {
    document.addEventListener("DOMContentLoaded", render);
    document.addEventListener("DOMContentLoaded", btnToggle);
    navForm.addEventListener("submit", agregarItem)
}

init();