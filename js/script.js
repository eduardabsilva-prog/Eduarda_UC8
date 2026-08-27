//  Declaração das variáveis de interface
const btnGravador = document.getElementById('btn-gravador');
const statusGravacao = document.getElementById('status-gravacao');
const playerAudio = document.getElementById('player-audio');

// Variáveis para gerenciar o microfone
let mediaRecorder;
let audioChunks = [];

//  Inicializa a permissão do microfone ao carregar a página
async function inicializarMicrofone() {
  //pede solicita permissão ao navegador usar o microfone 
  try {
    // chamado a váriavel stream para o fluxo contínuo de som do microfone
    // e o await espera essa solicitação
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    // mediaRecorder para escutar esse fluxo do som e coverte em dados.
    mediaRecorder = new MediaRecorder(stream);

    // mediaRecorder e ondataavailable Salvam os dados de áudio conforme são capturados
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    // Executa quando o usuário solta o botão
    mediaRecorder.onstop = () => {
      // aqui em audioBlob vai transformar os pedaços da gravação em um audio. no caso o audioChunks são vrs pedaços
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      // endereço temporário para o áudio
      const audioUrl = URL.createObjectURL(audioBlob);
      
    // Envia o áudio para o player HTML e toca automaticamente
      if (playerAudio) { //está sendo executado
      playerAudio.src = audioUrl; //colocando o endereço audioURL
        playerAudio.play(); // o audio
      }

      statusGravacao.textContent = 'Status: Gravação concluída e tocando!';
    };
    // catch executa quando acontece um erro
  } catch (error) {
    //alterar o texto
    statusGravacao.textContent = 'Status: Erro ao acessar o microfone.';
    console.error('Permissão negada ou erro no microfone:', error);
  }
}

//  Função para iniciar a gravação
function iniciarGravacao(e) {
  // se recebeu um vento vai impedir o comportamento
  if (e) e.preventDefault();
  //!mediaRecorder  verifica se o gravador ainda não existe
  // state  vai verificar se ainda está gravando. 
  // return para a função
  if (!mediaRecorder  || mediaRecorder.state === 'recording') return;

  audioChunks = []; // guardar 
  mediaRecorder.start(); // começar gravar 

  // Alterações visuais do botão
  btnGravador.style.backgroundColor = '#e74c3c';
  btnGravador.textContent = 'Gravando... Não Solte!';
  statusGravacao.textContent = 'Status: Capturando áudio...';
}

// Função para parar a gravação
function pararGravacao(e) {
  if (e) e.preventDefault();
  if (!mediaRecorder || mediaRecorder.state !== 'recording') return;

  mediaRecorder.stop();

  // Restaura o visual do botão
  btnGravador.style.backgroundColor = '#3498db';
  btnGravador.textContent = 'Clique e Segure para Gravar';
  statusGravacao.textContent = 'Status: Processando áudio...';
}

// Eventos de clique/toque
btnGravador.addEventListener('pointerdown', iniciarGravacao);
btnGravador.addEventListener('pointerup', pararGravacao);
btnGravador.addEventListener('pointerleave', pararGravacao);

//  Registro do Service Worker uma pwa que ajuda a usar a oágina offline
if ('serviceWorker' in navigator) {
  // registrando o arquivo da pwa
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./pwabuilder-sw.js')
      .then(() => {
        // vai aparecer se der certo!
        console.log('Service Worker registrado com sucesso!');
      })
      // se der errado vai aparecer...
      .catch(error => {
        console.error('Erro ao registrar o Service Worker:', error);
      });
  });
}

// 8. Ativa o microfone assim que a página abre
inicializarMicrofone();

