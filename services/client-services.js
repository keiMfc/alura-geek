//Leer Admins

const listAdmins = () => fetch("http://localhost:3000/admin").then(respuesta => respuesta.json());

//Leer Productos

const listProducts = () => {
  return fetch("http://localhost:3000/producto")
  .then(respuesta => respuesta.json())
  .catch(error => console.log(error))
};

//Crear Producto

const createProduct = async (product) => {
  const response = await fetch(`http://localhost:3000/producto`, {
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
  const response = await fetch(`http://localhost:3000/producto${id}`, {
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
  const response = await fetch(`http://localhost:3000/producto${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const clientServices = {
  listAdmins,
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};