const inputBuscador = document.querySelector("[data-search]");
const botonBusqueda = document.getElementById("search__action");

botonBusqueda.addEventListener("click", (evento) => {
  evento.preventDefault(); 
  
  
  if (inputBuscador.value.trim() !== "") {
    const textoBuscado = inputBuscador.value;
    window.location.href = `../screens/result-search.html?buscar=${textoBuscado}`;
    inputBuscador.value = "";
  }
});

inputBuscador.addEventListener("keypress", (evento2) => {
  if (evento2.key === "Enter") {
    evento2.preventDefault();
    
    if (inputBuscador.value.trim() !== "") {
      const textoBuscado = inputBuscador.value;
      window.location.href = `../screens/result-search.html?buscar=${textoBuscado}`;
      inputBuscador.value = "";
    }
  }
});