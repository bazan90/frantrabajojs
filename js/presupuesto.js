document.getElementById('presupuestoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar resultados previos

    // Ocultar todos los mensajes de error inicialmente
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.style.display = 'none';
    });

    // Validación del nombre
    const nombre = document.getElementById('nombre').value;
    if (!/^[a-zA-Z\s]{1,15}$/.test(nombre)) {
        document.getElementById('error-nombre').textContent = 'Nombre no válido (máx. 15 caracteres, solo letras).';
        document.getElementById('error-nombre').style.display = 'block';
        valid = false;
    }

    // Validación de los apellidos
    const apellidos = document.getElementById('apellidos').value;
    if (!/^[a-zA-Z\s]{1,40}$/.test(apellidos)) {
        document.getElementById('error-apellidos').textContent = 'Apellidos no válidos (máx. 40 caracteres, solo letras).';
        document.getElementById('error-apellidos').style.display = 'block';
        valid = false;
    }

    // Validación del teléfono
    const telefono = document.getElementById('telefono').value;
    if (!/^\d{9}$/.test(telefono)) {
        document.getElementById('error-telefono').textContent = 'Teléfono no válido (debe tener 9 dígitos).';
        document.getElementById('error-telefono').style.display = 'block';
        valid = false;
    }

    // Validación del email
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('error-email').textContent = 'Correo electrónico no válido.';
        document.getElementById('error-email').style.display = 'block';
        valid = false;
    }

    // Validación de aceptación de condiciones
    if (!document.getElementById('condiciones').checked) {
        document.getElementById('error-condiciones').textContent = 'Debes aceptar las condiciones.';
        document.getElementById('error-condiciones').style.display = 'block';
        valid = false;
    }

    // Si no es válido, detener
    if (!valid) return;

    // Cálculo del presupuesto si el formulario es válido
    const producto = document.getElementById('producto').value;
    const plazo = parseInt(document.getElementById('plazo').value);
    const seo = document.getElementById('seo').checked ? 200 : 0;
    const mantenimiento = document.getElementById('mantenimiento').checked ? 300 : 0;
    let precio = 0;

    if (producto === 'web_basica') {
        precio = 500;
    } else if (producto === 'web_profesional') {
        precio = 1000;
    } else if (producto === 'tienda_online') {
        precio = 1500;
    }

    precio += seo + mantenimiento;

    // Aplicar descuento según el plazo
    if (plazo < 15) {
        precio *= 0.9; // 10% de descuento
    }

    // Mostrar resultado
    resultadoDiv.innerHTML = `El precio estimado es de <strong>${precio.toFixed(2)}€</strong>.`;
});