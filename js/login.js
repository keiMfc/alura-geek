import { clientServices } from "../services/client-services.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const validarInicioSesion = async () => { 
    
    const email = emailInput.value;
    const password = passwordInput.value;
  
    const admins = await clientServices.listAdmins();
  
    const adminEncontrado = admins.find(admin => admin.email === email && admin.password === password);
  
    if (adminEncontrado) {

      window.location.href = "../screens/gestor-productos.html";
    } else {
      alert("Correo electrónico o contraseña incorrectos");
    }
  };
  
  const loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", validarInicioSesion);
