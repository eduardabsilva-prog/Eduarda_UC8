// Função para registrar logs no painel

// onde o java procura no html o elemento que tem "log_painel" para guardar na constante  painelLog
const painelLog = document.getElementById('log-painel');

// Function para chamar a funçãoo registrarLog que ela recebe a informação chama mensagem
function registrarLog(mensagem) {
 // Cria um novo elemento html do tipo div para colocar a mensagem de log
    const novaLinha = document.createElement('div');
    // essa linha  define o conteúdo da nova linha
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;
    painelLog.appendChild(novaLinha);
};

// Evento de mouse: click
const btnClique = document.getElementById('btn-clique'); // onde ele procura no html o elemento que tem "btn-clique" para guardar na constante btnClique
const areaMouse = document.getElementById('area-mouse'); // onde ele procura no html o elemento que tem "area-mouse" para guardar na constante areaMouse


btnClique.addEventListener('click', function() {  // quando o usuário aperta click ele executa a função abaixo
    registrarLog("[CLICK] Evento de mouse: Evento 'click' disparado!"); // aqui ele chama a função registrarLog
});

// Evento de mouse: mouseenter ( um evento de javaScript que é disparado quando o mouse entra em um elemento específico, nesse caso a áreaMouse)
areaMouse.addEventListener('mouseenter', function() {
    // Evento de mouse: mouseenter
    areaMouse.textContent = "Mouse entrou na área!"; // altera o texto (texto do div) do elemento
    areaMouse.style.backgroundColor = "#117d11"; // aqui ele  altera a cor do elemento areasMouse
    registrarLog("[MOUSE ENTROU] Evento de mouse: Evento 'mouseenter' disparado!");
});

// Evento de mouse: mouseleave ( um evento de javaScript que é disparado quando o mouse sai do elemento específico, nesse caso a áreaMouse)

// Aqui ele está usando a função addEventListener para adicionar um evento de mouseleave ao elemento areasMouse
areaMouse.addEventListener('mouseleave', function() {
   areaMouse.textContent = "Mouse saiu da área!";
   areaMouse.style.backgroundColor = "#751414";
    registrarLog("[MOUSE SAIU] Evento de mouse: Evento 'mouseleave' disparado!");
});

// Evento de teclado: keydown (um evento de javaScript que é disparado quando uma tecla é pressionada no teclado)
const campoTeclado = document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function(evento) {
    registrarLog("[TECLA PRESSIONADA] Teclado: Evento 'keydown' disparado!");
});

// Evento de teclado: keyup (um evento de javaScript que é disparado quando uma tecla é liberada no teclado)
campoTeclado.addEventListener('keyup', function(evento) {
    registrarLog("[TECLA LIBERADA] Teclado: Evento 'keyup' disparado!");
});

// Evento de formulário: input
const meuFormulario = document.getElementById('meu-formulario'); // onde ele procura no html o elemento que tem "meu-formulario" para guardar na constante meuFormulario
const campoInput = document.getElementById('campo-input'); // onde ele procura no html o elemento que tem "campo-input" para guardar na constante campoInput

campoInput.addEventListener('input', function() { // quando o usuário digita algo no campoInput ele executa a função abaixo
    registrarLog(`[INPUT] Formulário: Evento 'input' disparado! -> Valor atual: "${campoInput.value}"`);
});

// Evento de formulário: submit (acesso ao evento de envio via id do formulário)
meuFormulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
    registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
});

// Isso vai "funcionar", mas vai capturar apenas o clique no botão de envio, não o envio do formulário em si. Para capturar o envio do formulário, é melhor usar o evento 'submit' no próprio formulário.
// const campoEnvio = document.getElementById('campo-envio');
// campoEnvio.addEventListener('click', function(evento) {
//     evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
//     registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
// });
 






