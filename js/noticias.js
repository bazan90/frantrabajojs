// noticias
document.addEventListener('DOMContentLoaded', function() {
    // Usamos fetch para cargar el archivo ultimasnoticias.json
    fetch('../ultimasnoticias.json')
        .then(response => response.json()) // Convertimos la respuesta en JSON
        .then(noticias => {
            const contenedorNoticias = document.getElementById('contenedor-noticias');

            // Recorrer las noticias y mostrarlas en el contenedor
            noticias.forEach(noticia => {
                const noticiaElemento = document.createElement('div');
                noticiaElemento.classList.add('noticia-item');

                // Crear el contenido de cada noticia
                noticiaElemento.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>Fecha: ${noticia.fecha}</p>
                    <p>${noticia.descripcion}</p>
                    <a href="${noticia.enlace}" target="_blank">Leer más</a>
                `;

                // Añadir el elemento al contenedor
                contenedorNoticias.appendChild(noticiaElemento);
            });
        })
        .catch(error => console.error('Error al cargar las noticias:', error));
});

