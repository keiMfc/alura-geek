import { clientServices } from "../services/client-services.js";

const newProduct = (id, categoria, nombre, precio, imagen) => {
   const card = document.createElement("div");
   const contenido = `<div class="contenedor_card_producto" id="${id}">
   <div class="contenedor_opciones">
        <button class="btn-delete" href="#" type="button" id="${id}" data-delete></button>
        <button class="btn-edit" href="#" type="button" id="${id}" data-edit></button>
   </div>    
   <img src="${imagen}" alt="${nombre}" class="contenedor_card_producto_imagen">
       
       <h4 class="contenedor_card_producto_descripcion">${nombre}</h4>
       <h5 class="contenedor_card_producto_precio">${precio}</h5>
       <p class="contenedor_card_producto_digitos">${id}</p>
       
   </div>`;

   card.innerHTML = contenido;
   card.classList.add("card");
   card.dataset.id = id;

    const btnDelete = card.querySelector(".btn-delete");
    btnDelete.addEventListener("click", () => {
        const id = btnDelete.id;
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (confirmDelete) {
            console.log("Eliminando producto...");
            try {
                const respuesta = clientServices.deleteProduct(id);
                console.log("Respuesta del servidor:", respuesta);
                location.reload();
            } catch (error) {
                console.log("Ocurrió un error", error);
            }
        }
    })


   return card;
};

const productStarWars = document.querySelector("[data-star-wars]");
const productConsolas = document.querySelector("[data-consolas]");
const productDiversos = document.querySelector("[data-diversos]");
const allProducts = document.querySelector("[data-all-products]");

const loadProduct = async () => {
    const data = await clientServices.listProducts();

    data.forEach((product) => {
        const newCard = newProduct(
            product.id, 
            product.categoria, 
            product.nombre, 
            product.precio, 
            product.imagen
        );

        if (product.categoria === "Star Wars" && productStarWars) {
            productStarWars.appendChild(newCard);
        } else if (product.categoria === "Consolas" && productConsolas) {
            productConsolas.appendChild(newCard);
        } else if (product.categoria === "Diversos" && productDiversos) {
            productDiversos.appendChild(newCard);
        } else if (allProducts) {
            allProducts.appendChild(newCard);
        }
    });
};

loadProduct();