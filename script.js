const form = document.getElementById('myForm');
const table = document.getElementById('myTable');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('Apellido');
const email = document.getElementById('Email');
const telefono = document.getElementById('Telefono');
const edad = document.getElementById('Edad');

const nombreCelda = document.getElementById('nombreCelda')
const apellidoCelda = document.getElementById('apellidoCelda')
const emailCelda = document.getElementById('emailCelda')
const telefonoCelda = document.getElementById('telefonoCelda')
const edadCelda = document.getElementById('edadCelda')

const telefonoInput = document.getElementById('Telefono');
const borrarButton = document.querySelector('input[type="submit"][value="Borrar"]');

function obtenerMetodoContacto() {
  const radios = document.querySelectorAll('input[type="radio"]');

  radios.forEach(radio => {
    if (radio.checked) {
      console.log("Método de contacto seleccionado:", radio.value);
    }
  });
}

  function obtenerSuscripciones() {
    const suscripcionesSeleccionadas = [];
    const checkboxes = document.querySelectorAll('input[name="suscripcion"]:checked');
  
    checkboxes.forEach(checkbox => {
      suscripcionesSeleccionadas.push(checkbox.value);
    });
  
    console.log("Suscripciones seleccionadas:", suscripcionesSeleccionadas);
  }

borrarButton.addEventListener('click', () => {
  telefonoInput.value = '';
});

nombre.addEventListener('input', () => {
    nombreCelda.textContent = nombre.value;
});

apellido.addEventListener('input', () => {
    apellidoCelda.textContent = apellido.value;
});

email.addEventListener('input', () => {
    emailCelda.textContent = email.value;
});

telefono.addEventListener('input', () => {
    telefonoCelda.textContent = telefono.value;
});

edad.addEventListener('input', () => {
    edadCelda.textContent = edad.value;
});

function validarFormulario() {function validateForm() {
   
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
      return false;
    }
  

   const telefonoRegex = /^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\s\d{3}-\d{4}$/;
    if (!telefonoRegex.test(telefono.value)) {
      alert('Por favor, ingresa un número de teléfono válido.');
      return false;
    }
  
  
    const edadRegex = /^[1-9][0-9]$/;
    if (!edadRegex.test(edad.value)) {
      alert('Por favor, ingresa una edad valida.');
      return false;
    }
    if (edad.value < 16 || edad.value > 120) {
      alert('La edad debe estar entre 16 y 120.');
      return false;
    }
  
    return true;
  }
}