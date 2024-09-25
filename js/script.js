
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