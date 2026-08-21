// Função para registrar logs no painel

// onde o java procura no html o elemento que tem "log_painel" para guardar na constante painelLog
const painelLog = document.getElementById('log-painel');

// Function para chamar a funçãoo registrarLog que ela recebe a informação chama mensagem
function registrarLog(mensagem) {

    // Cria um novo elemento html do tipo div para colocar a mensagem de log
    const novaLinha = document.createElement('div');

    // essa linha serve para definir o conteúdo da nova linha
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`; // coloca a mensagem no texto do novo elemento
    //  painelLog.appendChild(novaLinha) ele está colocando um elemento dentro de outro elemento, no caso o painelLog está recebendo a novaLinha que é o novo elemento criado acima
    painelLog.appendChild(novaLinha); // adiciona o novo elemento adicionado acima ao painel
    
};

// Evento de mouse: click
const btnClique = document.getElementById('btn-clique'); // onde ele procura no html o elemento que tem "btn-clique" para guardar na constante btnClique
const areaMouse = document.getElementById('area-mouse'); // onde ele procura no html o elemento que tem "area-mouse" para guardar na constante areaMouse

btnClique.addEventListener('click', function() { // quando o usuário aperta click ele executa a função abaixo
    registrarLog("[CLICK] Evento de mouse: Evento 'click' disparado!"); 
});

// Evento de mouse: mouseenter

areaMouse.addEventListener('mouseenter', function() { // quando o mouse entra na areaMouse ele executa a função abaixo
    areaMouse.textContent = "Mouse entrou na área!"; // altera o texto (texto do div) do elemento
    areaMouse.style.backgroundColor = "#117d11"; // aqui ele  altera a cor do elemento areasMouse
    registrarLog("[MOUSE ENTROU] Evento de mouse: Evento 'mouseenter' disparado!"); // aqui ele chama a função registrarLog
});

// Evento de mouse: mouseleave
areaMouse.addEventListener('mouseleave', function() { 
    // Evento de mouse: mouseleave
   areaMouse.textContent = "Mouse saiu da área!";
   areaMouse.style.backgroundColor = "#751414";
    registrarLog("[MOUSE SAIU] Evento de mouse: Evento 'mouseleave' disparado!");
});

// Evento de teclado: keydown
const campoTeclado = document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function(evento) {
    registrarLog("[TECLA PRESSIONADA] Teclado: Evento 'keydown' disparado!");

});

// Evento de teclado: keyup
campoTeclado.addEventListener('keyup', function(evento) {
    registrarLog("[TECLA LIBERADA] Teclado: Evento 'keyup' disparado!");

});