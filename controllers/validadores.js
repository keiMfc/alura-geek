const inputs = document.querySelectorAll(".input");
const textarea = document.querySelectorAll(".text-area");

const valid = (e) => {
    const input = e.target;
    const tipoInput = input.dataset.tipo;
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }
    const span = input.nextElementSibling;
    if (input.validity.valid) {
        ocultarMensajeError(input);
    }

}

function validarCategoria(input) {
  const tipoInput = input.dataset.tipo;
  const valorInput = input.value;

  if (valorInput === '') {
    mostrarMensajeError(tipoInput, 'valueMissing');
  } else {
    ocultarMensajeError(input);
  }
}

function validarEmail(input) {
    const tipoInput = input.dataset.tipo;
    const valorInput = input.value.trim();
  
    if (valorInput === '') {
      mostrarMensajeError(tipoInput, 'valueMissing');
    } else if (!valorInput.match(/^\S+@\S+\.\S+$/)) {
      mostrarMensajeError(tipoInput, 'typeMismatch');
    } else {
      ocultarMensajeError(input);
    }
  }
  
function validarNombre(input) {
    const tipoInput = input.dataset.tipo;
    const valorInput = input.value.trim();
  
    if (valorInput === '') {
      mostrarMensajeError(tipoInput, 'valueMissing');
    } else {
      ocultarMensajeError(input);
    }
  }

  function validarNombreProducto(input) {
    const tipoInput = input.dataset.tipo;
    const valorInput = input.value.trim();
  
    if (valorInput === '') {
      mostrarMensajeError(tipoInput, 'valueMissing');
    } else {
      ocultarMensajeError(input);
    }
  }

  function validarMensaje(input) {
    const tipoInput = input.dataset.tipo;
    const valorInput = input.value.trim();
  
    if (valorInput === '') {
      mostrarMensajeError(tipoInput, 'valueMissing');
    } else {
      ocultarMensajeError(input);
    }
  }

  function validarDescripcion(input) {
    const tipoInput = input.dataset.tipo;
    const valorInput = input.value.trim();
  
    if (valorInput === '') {
      mostrarMensajeError(tipoInput, 'valueMissing');
    } else {
      ocultarMensajeError(input);
    }
  }

  function validarPassword(input) {
    const tipoInput = input.dataset.tipo;
    const valorInput = input.value;
  
    if (valorInput === '') {
      mostrarMensajeError(tipoInput, 'valueMissing');
    } else if (!valorInput.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+\-])[a-zA-Z0-9]{8,16}$/)) {
      mostrarMensajeError(tipoInput, 'patternMismatch');
    } else {
      ocultarMensajeError(input);
    }
  }
  
  function validarPrecio(input) {
    const tipoInput = input.dataset.tipo;
    const valorInput = input.value;
  
    if (valorInput === '') {
      mostrarMensajeError(tipoInput, 'valueMissing');
    } else {
      ocultarMensajeError(input);
    }
  }
    
  function mostrarMensajeError(tipoInput, error) {
    const input = document.querySelector(`[data-tipo="${tipoInput}"]`);
    const span = input.nextElementSibling;
    span.innerText = mensajeError[tipoInput][error];
    span.style.display = 'block';
  }
  
  function ocultarMensajeError(input) {
    const span = input.nextElementSibling;
    span.style.display = 'none';
  }
  
 
  const validadores = {
    categoria: validarCategoria,
    email: validarEmail,
    descripcion: validarDescripcion,
    nombre: validarNombre,
    mensaje: validarMensaje,
    password: validarPassword,
    precio: validarPrecio,
    productName: validarNombreProducto,
  };

  
  const mensajeError = {
    categoria:{
      valueMissing: "Debe escoger una categoría"
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    descripcion: {
      valueMissing: "El campo descripción no puede estar vacío",
    },
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    precio: {
      valueMissing: "El campo de precio no puede estar vacío",
    },
    productName: {
      valueMissing: "El campo nombre del producto no puede estar vacío",
    },
    mensaje: {
      valueMissing: "El campo mensaje no puede estar vacío",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch: "Al menos 8 caracteres, máximo 16, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    }
  };


inputs.forEach((input) => {
    input.addEventListener("blur", valid);
});
