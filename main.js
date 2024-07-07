const listaDeItems = document.querySelector(".hero-ul");

let arrayItems = []

listaDeItems.innerHTML = `
    <div class= "contenedor-items">
        <div class= "viñeta-item"></div>
        <li class= "items-productos"></li>
        <i class="fa-solid fa-xmark borrar-item"></i>
    </div>
    <button class="btn-borrar-todo">Borrar Todo</button>
    `
