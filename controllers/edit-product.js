import { clientServices } from "../services/client-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async (id) => {
    const imagen = document.querySelector("[data-img]");
    const categoria = document.querySelector("[data-tipo='categoria']");
    const productName = document.querySelector("[data-tipo='productName']");
    const precio = document.querySelector("[data-tipo='precio']");
    const descripcion = document.querySelector("[data-tipo='descripcion']");

    try {
        const product = await clientServices.productoId(id);

        imagen.value = product.imagen; 
        
        let optionIndex;
    
        if (product.categoria === "Star wars") {
            optionIndex = 1;
        } else if (product.categoria === "Consolas") {
            optionIndex = 2;
        } else {
            optionIndex = 3;
        }
    
        categoria.selectedIndex = optionIndex;

        productName.value = product.nombre;
        precio.value = product.precio;
        descripcion.value = product.descripcion;

    } catch (error) {
        console.error("Error al obtener los datos del producto:", error);
        alert("Hubo un error al obtener los datos del producto: " + error.message);
    }
};

const url = new URL(window.location);
const id = url.searchParams.get("id");
obtenerInfo(id);

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const imagen = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-tipo='categoria']").value;
    const productName = document.querySelector("[data-tipo='productName']").value;
    const precio = document.querySelector("[data-tipo='precio']").value;
    const descripcion = document.querySelector("[data-tipo='descripcion']").value;

    try {
        const actualizar = await clientServices.updateProduct(id, {
            imagen: imagen,
            categoria: categoria,
            nombre: productName,
            precio: precio,
            descripcion: descripcion
        });
        if (actualizar) {
            window.location.href = "../screens/gestor-productos.html";
            alert("Los datos del producto se actualizaron correctamente.");
        } else {
            throw new Error("No se pudo actualizar el producto");
        }
    } catch (error) {
        console.error("Error al guardar los cambios:", error);
        alert("Hubo un error al guardar los cambios: " + error.message);
    }
});