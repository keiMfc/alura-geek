import { clientServices } from "../services/client-services.js";

const newProduct = (id, categoria, nombre, precio, imagen) => {
  const card = document.createElement("div");
  const contenido = `<div class="contenedor_card_producto" id="${id}">
      <img src="${imagen}" alt="${nombre}" class="contenedor_card_producto_imagen">
      <h4 class="contenedor_card_producto_descripcion">${nombre}</h4>
      <h5 class="contenedor_card_producto_precio">${precio}</h5>
      <button class="contenedor_card_producto_verProducto button-text"><a href="../screens/descripcion-producto.html?id=${id}">Ver producto</a></button>
  </div>`;

  card.innerHTML = contenido;
  card.classList.add("contenedor_card");
  card.dataset.id = id;

  return card;
};

const resultados = document.querySelector("[data-result]");
const tituloBusqueda = document.querySelector("[data-result]"); 

const loadProduct = async () => {
  try {
    const url = new URL(window.location);
    const textoBuscado = url.searchParams.get("buscar");

    if (textoBuscado === null) {
      console.log("Hubo un error al buscar el producto"); 
      return;
    }

    const textoBuscadoLower = textoBuscado.toLowerCase();
    let cantidadResultados = 0;
    const productosCoincidentes = [];

    const data = await clientServices.listProducts();

    data.forEach(({ id, categoria, nombre, precio, imagen }) => {
      const nombreLower = nombre.toLowerCase();
      const categoriaLower = categoria.toLowerCase();
      const validarNombre = nombreLower.includes(textoBuscadoLower);
      const validarCategoria = categoriaLower.includes(textoBuscadoLower);

      if (validarNombre || validarCategoria) {
        const producto = {
          id,
          categoria,
          nombre,
          precio,
          imagen
        };
        productosCoincidentes.push(producto);
        cantidadResultados++;
      }
    });

    if (cantidadResultados > 0) {
      tituloBusqueda.innerHTML = `<h3 class="contenedor_top_titulo">Resultados de la búsqueda de "${textoBuscado}"</h3>`;
      const contenedorCard = document.createElement("div");
      contenedorCard.classList.add("contenedor_card");
      productosCoincidentes.forEach(({ id, categoria, nombre, precio, imagen }) => {
        const productosBuscados = newProduct(id, categoria, nombre, precio, imagen);
        contenedorCard.appendChild(productosBuscados);
      });
      resultados.appendChild(contenedorCard);
    } else {
      tituloBusqueda.innerHTML = `<h3 class="contenedor_top_titulo">No se encontraron resultados de "${textoBuscado}"</h3>`;
    }
  } catch (e) {
    console.log("Ocurrió un error", e);
  }
};

loadProduct();