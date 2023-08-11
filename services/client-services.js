//Leer Admins

const listAdmins = () => fetch("https://db-json-alura-geek.vercel.app/admin").then(respuesta => respuesta.json());

//Leer Productos

const listProducts = () => {
  return fetch("https://db-json-alura-geek.vercel.app/producto")
  .then(respuesta => respuesta.json())
  .catch(error => console.log(error))
};

//Leer Producto por id 

const productoId = async (id) => {
  try {
      const response = await fetch(`https://db-json-alura-geek.vercel.app/producto/${id}`);
      if (!response.ok) {
          throw new Error("No se pudo obtener el producto");
      }
      const product = await response.json();
      return product;
  } catch (error) {
      console.error(error);
      throw error;
  }
};

export { listProducts };

//Crear Producto

const createProduct = async (product) => {
  const response = await fetch(`https://db-json-alura-geek.vercel.app/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};
  
//Actualizar Producto

const updateProduct = async (id, product) => {
  const response = await fetch(`https://db-json-alura-geek.vercel.app/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};
  
//Borrar Producto

const deleteProduct = async (id) => {
    console.log("Enviando solicitud DELETE...");
    const response = await fetch(`https://db-json-alura-geek.vercel.app/producto/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
};

export const clientServices = {
  listAdmins,
  listProducts,
  productoId,
  createProduct,
  updateProduct,
  deleteProduct,
};
