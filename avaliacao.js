document.addEventListener('DOMContentLoaded', () => {
    const commentButton = document.getElementById('btn-adicionar-comentario');
    const commentTextarea = document.getElementById('novo-comentario-texto');
    const commentsContainer = document.getElementById('novos-comentarios-lista');

    if (commentButton && commentTextarea && commentsContainer) {
        
        commentButton.addEventListener('click', () => {
            const commentText = commentTextarea.value.trim();

            if (commentText === '') {
                return; 
            }

            const newComment = document.createElement('div');
            newComment.className = 'cartao-avaliacao novo-comentario-item'; 
            
            newComment.innerHTML = `
                <div class="cabecalho-avaliacao">
                    <img src="imagens/avatar.png" alt="Avatar de Usuário">
                    <h4>Você</h4>
                </div>
                <p>${escapeHTML(commentText)}</p>
            `;

            commentsContainer.appendChild(newComment);
            commentTextarea.value = '';
        });
    }

    function escapeHTML(str) {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(str));
        return p.innerHTML;
    }
});