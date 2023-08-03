const inputs = document.querySelectorAll(".input");

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
    email: validarEmail,
    password: validarPassword,
  };

  
  const mensajeError = {
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch: "Al menos 8 caracteres, máximo 16, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    }
  };


inputs.forEach((input) => {
    input.addEventListener("blur", valid);
});
