// Función para calcular el precio del presupuesto
function calcularPresupuesto() {
    const producto = document.getElementById('producto').value;
    const seo = document.getElementById('seo').checked;
    const mantenimiento = document.getElementById('mantenimiento').checked;

    let precio = 0;

    // Definir los precios de los productos
    if (producto === 'web_basica') {
        precio = 500;
    } else if (producto === 'web_profesional') {
        precio = 1000;
    } else if (producto === 'tienda_online') {
        precio = 1500;
    }

    // Añadir el precio de los extras
    if (seo) {
        precio += 200;
    }
    if (mantenimiento) {
        precio += 300;
    }

    // Actualizar el precio en el DOM
    document.getElementById('precio').textContent = `${precio.toFixed(2)}€`;
}

// Validar el formulario dinámicamente
function validarFormulario() {
    let valid = true;

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Validación de nombre (solo letras y longitud máxima de 15)
    if (!/^[a-zA-Z\s]{1,15}$/.test(nombre)) {
        document.getElementById('error-nombre').textContent = 'Nombre no válido (máx. 15 caracteres).';
        valid = false;
    } else {
        document.getElementById('error-nombre').textContent = '';
    }

    // Validación de apellidos (solo letras y longitud máxima de 40)
    if (!/^[a-zA-Z\s]{1,40}$/.test(apellidos)) {
        document.getElementById('error-apellidos').textContent = 'Apellidos no válidos (máx. 40 caracteres).';
        valid = false;
    } else {
        document.getElementById('error-apellidos').textContent = '';
    }

    // Validación de teléfono (solo números y longitud exacta de 9)
    if (!/^\d{9}$/.test(telefono)) {
        document.getElementById('error-telefono').textContent = 'Teléfono no válido (9 dígitos).';
        valid = false;
    } else {
        document.getElementById('error-telefono').textContent = '';
    }

    // Validación de correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('error-email').textContent = 'Correo electrónico no válido.';
        valid = false;
    } else {
        document.getElementById('error-email').textContent = '';
    }

    return valid;
}

// Event Listeners para actualizar el presupuesto dinámicamente
document.getElementById('producto').addEventListener('change', calcularPresupuesto);
document.getElementById('seo').addEventListener('change', calcularPresupuesto);
document.getElementById('mantenimiento').addEventListener('change', calcularPresupuesto);

// Validar formulario en cada cambio de entrada
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', validarFormulario);
});
