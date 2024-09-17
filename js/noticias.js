// noticias
fetch('ultimasnoticias.json') // Ruta relativa desde la raíz
    .then(response => response.json())
    .then(noticias => {
        const contenedorNoticias = document.getElementById('contenedor-noticias');

        // Recorrer las noticias y mostrarlas en el contenedor
        noticias.forEach(noticia => {
            const noticiaElemento = document.createElement('div');
            noticiaElemento.classList.add('noticia-item');

            noticiaElemento.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p>Fecha: ${noticia.fecha}</p>
                <p>${noticia.descripcion}</p>
                <a href="${noticia.enlace}" target="_blank">Leer más</a>
            `;

            contenedorNoticias.appendChild(noticiaElemento);
        });
    })
    .catch(error => console.error('Error al cargar las noticias:', error));


