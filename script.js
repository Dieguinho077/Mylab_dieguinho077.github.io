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
