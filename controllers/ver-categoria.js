import { clientServices } from "../services/client-services.js";

const productContainer = document.querySelector(".contenedor_card");

const loadCategory = async (categoria) => {
    const data = await clientServices.listProducts();

    const productsByCategory = data.filter(product => product.categoria === categoria);

    productsByCategory.forEach((product) => {
        const newCard = newProduct(
            product.id,
            product.categoria,
            product.nombre,
            product.precio,
            product.imagen
        );
    
        productContainer.appendChild(newCard);
    });
};

const newProduct = (id, categoria, nombre, precio, imagen) => {
    const card = document.createElement("div");
    const contenido = `<div class="contenedor_card_producto" id="${id}">
        <img src="${imagen}" alt="${nombre}" class="contenedor_card_producto_imagen">
        <h4 class="contenedor_card_producto_descripcion">${nombre}</h4>
        <h5 class="contenedor_card_producto_precio">${precio}</h5>
        <button class="contenedor_card_producto_verProducto button-text"><a href="../screens/descripcion-producto.html?id=${id}">Ver producto</a></button>
    </div>`;
 
    card.innerHTML = contenido;
    card.classList.add("card");
    card.dataset.id = id;
 
    return card;
 };

 const url = new URLSearchParams(window.location.search);
 const categoria = url.get('categoria');
 
 if (categoria) {
     loadCategory(categoria);
 }