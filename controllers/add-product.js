import { clientServices } from "../services/client-services.js";

function formatearCategoria(categoria) {
    const palabras = categoria.split('_');
    const categoriaFormateada = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
    return categoriaFormateada;
}

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const imagen = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-tipo='categoria']").value;
    const productName = document.querySelector("[data-tipo='productName']").value;
    const precio = document.querySelector("[data-tipo='precio']").value;
    const descripcion = document.querySelector("[data-tipo='descripcion']").value;

    const categoriaFormateada = formatearCategoria(categoria);

    try {
        const add = await clientServices.createProduct({
            categoria: categoriaFormateada,
            nombre: productName,
            precio: precio,
            imagen: imagen,
            descripcion: descripcion,
        });
        if (add) {
            alert("Producto agregado con éxito. Regrese al Menú Administrador");
        } else {
            throw new Error();
        }
    } catch (error) {
        alert("Hubo un error al agregar el producto");
    }
    });
