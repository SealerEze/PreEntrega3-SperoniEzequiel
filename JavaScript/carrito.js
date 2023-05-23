const hacerCarrito = () => {
    //para que el carrito empiece siempre vacio al refrescar
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h3 class="modal-header-tittle">Tu Carrito.</h3>
    `;
    modalContainer.append(modalHeader);
    //boton de cerrar el modal
    const modalButton = document.createElement("h2");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"});

    modalHeader.append(modalButton);


    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    <p>Cantidad: ${product.cantidad}</p>
    <p>Total: ${product.cantidad * product.precio}</p>
     `;
     modalContainer.append(carritoContent);



//Boton Eliminar producto del carrito
     let eliminar = document.createElement("span");
     eliminar.innerText = "x";
     eliminar.className = "eliminar-producto";
     carritoContent.append(eliminar);
     eliminar.addEventListener("click", eliminarProducto);

});

//funcion para sumar total de productos
const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
const totalCompra = document.createElement("div");
totalCompra.className = "total-compra";
totalCompra.innerHTML = `TOTAL A ABONAR: ${total} $`;
modalContainer.append(totalCompra);
};
verCarrito.addEventListener("click", hacerCarrito);

//funcion que elimina un producto del carrito
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    contadorCarrito();
    saveLocal();
    hacerCarrito();

};

//Contador del carrito con localstorage
const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

contadorCarrito();
