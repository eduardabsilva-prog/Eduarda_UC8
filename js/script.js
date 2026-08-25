//Declaração da variável para o botão de gravação e o status da gravação
const btnGravador = document.getElementById('btn-gravador');
const statusGravacao = document.getElementById('status-gravacao');

// Função para iniciar a gravação
function iniciarGravacao() {
// stilizar o botão de gravação
  btnGravador.style.backgroundColor = '#e74c3c';
// alterar o texto do botão de gravação
  btnGravador.textContent = 'Gravando... Não Solte!';
// alterar o texto do status da gravação
  statusGravacao.textContent = 'Status: Capturando áudio...';
}

// Função para parar a gravação
function pararGravacao() {
    // stilizar o botão de gravação
    btnGravador.style.backgroundColor = '#3498db';
    // alterar o texto do botão de gravação
    btnGravador.textContent = 'Clique e Segure para Gravar';
    statusGravacao.textContent = 'Status: Gravação concluída e enviada!';
}

// Adicionar eventos ao botão de gravação
btnGravador.addEventListener('pointerdown', iniciarGravacao);
//pointerdown evento dispara  para o instante que a tela é tocada 
btnGravador.addEventListener('pointerup', pararGravacao);
//pointerup evento dispara  para o instante que a tela é solta

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./pwabuilder-sw.js')
               .then(() => {
                      console.log('Service Worker registrado com sucesso!');
               })
               .catch(error => {
                      console.error('Erro ao registrar o Service Worker:', error);
               });
    });
}


