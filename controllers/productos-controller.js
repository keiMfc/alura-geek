import {clientServices} from "../services/client-services.js";

const newProduct = (id, categoria, nombre, precio, imagen) => {
   const card = document.createElement("div");
   const contenido = `<div class="contenedor_card_producto" id="${id}">
       <img src="${imagen}" alt="${nombre}"
           class="contenedor_card_producto_imagen">
       <h4 class="contenedor_card_producto_descripcion">${nombre}</h4>
       <h5 class="contenedor_card_producto_precio">${precio}</h5>
       <button class="contenedor_card_producto_verProducto button-text"><a href="../screens/descripcion-producto.html?id=${id}">Ver producto</a></button>
   </div>`;

   card.innerHTML = contenido;
   card.classList.add("card");
   card.dataset.id = id;

   return card
};

const productStarWars = document.querySelector("[data-star-wars]");
const productConsolas = document.querySelector("[data-consolas]");
const productDiversos = document.querySelector("[data-diversos]");

const loadProduct = async() => {
    const data = await clientServices.listProducts();

    data.forEach((product) => {
        const newCard = newProduct(product.id, product.categoria, product.nombre, product.precio, product.imagen);

        if(product.categoria === "Star Wars") {
            productStarWars.appendChild(newCard);
        }
        if(product.categoria === "Consolas") {
            productConsolas.appendChild(newCard);
        }
        if(product.categoria === "Diversos") {
            productDiversos.appendChild(newCard);
        }
    });
};

loadProduct();


