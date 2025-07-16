document.addEventListener('DOMContentLoaded', () => {       // Listener = ESPERA CARREGAR A PAGINA
    const botaoComent = document.getElementById('btn-adicionar-comentario');
    const areaComent = document.getElementById('novo-comentario-texto');
    const containerComent = document.getElementById('novos-comentarios-lista');

    if (botaoComent && areaComent && containerComent) {
        
        botaoComent.addEventListener('click', () => {   // Listener = espera pelo click acontecer, e qnd ocorre ativa tudo ali
            const comentText = areaComent.value.trim();

            if (comentText === '') {
                return; 
            }

            const novoComent = document.createElement('div');
            novoComent.className = 'cartao-avaliacao novo-comentario-item'; 
            
            novoComent.innerHTML = `
                <div class="cabecalho-avaliacao">
                    <img src="imagens/avatar.png" alt="Avatar de Usuário">
                    <h4>Você</h4>
                </div>
                <p>${escapeHTML(comentText)}</p> 
            `; //  escapeHTML = transforma inf inserida pelo usuário em outras coisas "seguras para se executar"

            containerComent.appendChild(novoComent);  // appendChild = Vai adicionar o comentario como o ultimo elemento de tudo
            areaComent.value = '';
        });
    }

    function escapeHTML(str) {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(str));
        return p.innerHTML;  //  innerHTML = pode ler ou alterar o conteudo dos elements em questão
    }
});