//barra lateral

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const barraLateral = document.querySelector('.barra-lateral'); /* quesele = SELECIONA ESPECIFICAMENTE OS NÓS DE .barra-lateral DO CSS */
    const overlayMenu = document.querySelector('.overlay-menu');

    menuToggle.addEventListener('click', function() {  // Listener = espera pelo click acontecer, e qnd ocorre ativa tudo ali
        barraLateral.classList.toggle('active');
        overlayMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    overlayMenu.addEventListener('click', function() {   // Listener = espera pelo click acontecer, e qnd ocorre ativa tudo ali
        barraLateral.classList.remove('active');
        overlayMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// fale conosco (vai ser usado para relator problemas no site)

const contatoForm = document.querySelector('.formulario-contato');
  if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
      e.preventDefault();  //prevDef = Previne o que aconteceria normalmente (neste caso, antes de "enviar" aparece a mensagem do alert)
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      contatoForm.reset();
    });
  }

//  Saldo da carteira do usuário

const saldoEl = document.querySelector('.saldo-carteira strong');
  const btnAddCredito = document.querySelector('.botao-add-credito');
  const tabelaHistorico = document.querySelector('.historico-carteira tbody');

  if (btnAddCredito && saldoEl) {
    btnAddCredito.addEventListener('click', () => {
      const valor = parseFloat(prompt('Digite o valor para adicionar:', '50')); //parse = Vai transformar o texto (vai tentar enontrar um numero) em um numero float
      if (!isNaN(valor) && valor > 0) {  // ISANAN = verifica se o valor é NAN(not a number) ou nao. Se sim True e nao False
        const saldoAtual = parseFloat(saldoEl.textContent.replace('R$', '').replace(',', '.'));
        const novoSaldo = saldoAtual + valor;
        saldoEl.textContent = `R$ ${novoSaldo.toFixed(2).replace('.', ',')}`;

        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
          <td data-label="Data">${new Date().toLocaleDateString()}</td>
          <td data-label="Descrição">Crédito Manual</td>
          <td data-label="Valor" class="credito">+ R$ ${valor.toFixed(2).replace('.', ',')}</td>
          <td data-label="Status">Concluído</td>
        `;
        tabelaHistorico.prepend(novaLinha);  // prepend = cria/adiciona um novo elemento, neste caso novaLinha
      } else {
        alert('Valor inválido.');
      }
    });
  }

  // remove itens da lista de Desejos ou manda para o carrinho (ainda não verdadeiramente envia ao carrinho)

  document.querySelectorAll('.botao-add-carrinho').forEach(botao => {
    botao.addEventListener('click', () => {
      const jogo = botao.closest('.cartao-lista-desejos').querySelector('h3').textContent;
      alert(`${jogo} foi adicionado ao carrinho.`);
      botao.closest('.cartao-lista-desejos').remove();
    });
  });

    document.querySelectorAll('.botao-remover').forEach(botao => {
    botao.addEventListener('click', () => {  //  Tem alguma coisa errada, qnd tento retirar do carrinho, aparece esta msgn
      if (confirm('Tem certeza que deseja remover este item da lista de desejos?')) {  
        botao.closest('.cartao-lista-desejos').remove();
      }
    });
  });