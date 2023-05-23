const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("visualizarCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");
//carrito con o sin cosas en el localstorage
let carrito = JSON.parse(localStorage.getItem("CoderStore")) || [];


//Creamos cada tarjeta de producto con DOM
productos.forEach((product) => {
    let content = document.createElement("div");
    
    content.className = "tarjeta-producto"
    content.innerHTML = `
    <img src="${product.imagen}" class="img-producto">
    <h3 class="nombre-producto">${product.nombre}</h3>
    <p class="precio-producto">${product.precio} $</p>
    `;
    shopContent.append(content);

    //boton comprar
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "boton-comprar";
    content.append(comprar);


    comprar.addEventListener("click", () => {
    //buscamos que los elementos del carrito sumen en cantidad
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
if(repeat === true){
    carrito.map((prod) => {
        if(prod.id === product.id){
            prod.cantidad++;
        };
    });
}else {


//ponemos cosas en el carrito
        carrito.push({
            id: product.id,
            imagen: product.imagen,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });}
        contadorCarrito();
        guardarEnLocal();
    });
});



//Local Storage
//set item
const guardarEnLocal = () => {
    localStorage.setItem("CoderStore", JSON.stringify(carrito));
};








