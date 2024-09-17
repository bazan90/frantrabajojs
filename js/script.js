
document.addEventListener('DOMContentLoaded', function() {
    const commentButtons = document.querySelectorAll('.submit-comment');

    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postID = this.getAttribute('data-post');
            const commentInput = document.getElementById(`commentInput${postID}`);
            const commentsContainer = document.getElementById(`comments${postID}`);

            const userComment = commentInput.value.trim();

            if (userComment !== "") {
                // Agregar el comentario del usuario
                const userCommentElement = document.createElement('div');
                userCommentElement.classList.add('comment');
                userCommentElement.textContent = `Tú: ${userComment}`;
                commentsContainer.appendChild(userCommentElement);

                // Respuesta automática del bot con valoración realista
                setTimeout(() => {
                    const rating = calculateRealisticRating(userComment);
                    const botCommentElement = document.createElement('div');
                    botCommentElement.classList.add('comment');
                    botCommentElement.textContent = `Gracias por tu comentario!`;
                    commentsContainer.appendChild(botCommentElement);
                }, 1000);

                // Limpiar la caja de texto
                commentInput.value = "";
            }
        });
    });

    function calculateRealisticRating(comment) {
        const positiveKeywords = ["excelente", "bueno", "genial", "me encanta", "fantástico"];
        const negativeKeywords = ["malo", "horrible", "terrible", "no me gusta", "pésimo"];
        let rating = 3; // Comenzamos con una valoración media

        positiveKeywords.forEach(keyword => {
            if (comment.toLowerCase().includes(keyword)) {
                rating += 1;
            }
        });

        negativeKeywords.forEach(keyword => {
            if (comment.toLowerCase().includes(keyword)) {
                rating -= 1;
            }
        });

        if (rating > 5) rating = 5;
        if (rating < 1) rating = 1;

        return rating;
    }
});


// Mapa dinámico en la página de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Coordenadas del negocio (puedes cambiarlo a las coordenadas de tu negocio)
    const businessLocation = [40.416775, -3.703790]; // Madrid, España

    // Inicializar el mapa
    const map = L.map('map').setView(businessLocation, 13); // Establecer el centro del mapa en la ubicación del negocio

    // Cargar las capas de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añadir marcador para el negocio
    const businessMarker = L.marker(businessLocation).addTo(map)
        .bindPopup('Aquí está nuestro negocio.')
        .openPopup();

    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLocation = [position.coords.latitude, position.coords.longitude]; // Coordenadas del usuario

            // Añadir un marcador para la ubicación del usuario
            const userMarker = L.marker(userLocation).addTo(map)
                .bindPopup('Tu ubicación actual.')
                .openPopup();

            // Añadir la ruta desde la ubicación del usuario hasta el negocio usando Leaflet Routing Machine
            L.Routing.control({
                waypoints: [
                    L.latLng(userLocation), // Punto de inicio: ubicación del usuario
                    L.latLng(businessLocation) // Punto de destino: ubicación del negocio
                ],
                routeWhileDragging: true
            }).addTo(map);

            // Centrar el mapa en la ruta
            map.setView(userLocation, 13);
        }, function() {
            alert('No pudimos obtener tu ubicación. Por favor, habilita la geolocalización.');
        });
    } else {
        alert('Geolocalización no soportada por tu navegador.');
    }
});
