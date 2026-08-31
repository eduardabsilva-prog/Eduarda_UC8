 //cria uma função chamada alterarConteudo que altera o conteúdo do elemento HTML com o id "demo1" 
function alterarConteudo() {
    // Procura no HTML o elemento que possui o id "demo1"
 // e guarda esse elemento dentro da variável "texto"
    const texto = document.getElementById("demo1");

// Troca o conteúdo do elemento "demo1" por esse novo texto
    texto.innerHTML = "Olá, JavaScript! O texto foi trocado!";

}

// Cria uma função para voltar o texto original
function resetarConteudo() {

    // Procura novamente o elemento que possui o id "demo1"
    const texto = document.getElementById("demo1");
// Coloca novamente o texto original dentro do elemento
    texto.innerHTML = "O JavaScript pode alterar o conteúdo de um elemento HTML.";


// Cria uma função para ligar a lâmpada
function ligarLampada() {
    // Procura a imagem/desenho da lâmpada desligada
    const lampadaOff = document.getElementById("lamp-off");
    // Procura a imagem/desenho da lâmpada ligada
    const lampadaOn = document.getElementById("lamp-on");
    // Procura o texto que mostra se a lâmpada está ligada ou desligada
    const status = document.getElementById("lamp-status");

    // Esconde a lâmpada desligada
    lampadaOff.style.display = "none";
    // Mostra a lâmpada ligada
    lampadaOn.style.display = "block";

// Troca o texto do status para "Lâmpada ligada"
    status.innerHTML = "Lâmpada ligada";

}

// Cria uma função para desligar a lâmpada
function desligarLampada() {

    // Procura a lâmpada desligada
    const lampadaOff = document.getElementById("lamp-off");
    // Procura a lâmpada ligada
    const lampadaOn = document.getElementById("lamp-on");
    // Procura o texto que mostra se a lâmpada está ligada ou desligada
    const status = document.getElementById("lamp-status");


    // Mostra a lâmpada desligada
    lampadaOff.style.display = "block";
    // Esconde a lâmpada ligada
    lampadaOn.style.display = "none";

    // Troca o texto do status para "Lâmpada desligada"
    status.innerHTML = "Lâmpada desligada";

}



// Cria uma função para aumentar o tamanho da fonte
function aumentarFonte() {

    // Procura o elemento que possui o id "demo3"
    const texto = document.getElementById("demo3");
    // Muda o tamanho da fonte para 25 pixels
    texto.style.fontSize = "25px";

}

// Cria uma função para mudar a cor do texto
function mudarCor() {

    // Procura o elemento que possui o id "demo3"
    const texto = document.getElementById("demo3");


    texto.style.color = "green";

}

// Cria uma função para deixar o texto em negrito
function aplicarNegrito() {

    const texto = document.getElementById("demo3");

    // Deixa o texto em negrito
    texto.style.fontWeight = "bold";

}

// Cria uma função para colocar um fundo no texto
function aplicarFundo() {

    // Procura o elemento que possui o id "demo3"
    const texto = document.getElementById("demo3");

// Coloca uma cor de fundo no elemento
 // O rgba permite deixar essa cor transparente
    texto.style.backgroundColor = "rgba(108, 99, 255, 0.2)";

}

// Cria uma função para retirar todas as alterações feitas no texto
function resetarDemonstracao() {

    const texto = document.getElementById("demo3");

    texto.style.fontSize = "";
    texto.style.color = "";
    texto.style.fontWeight = "";
    texto.style.backgroundColor = "";

}

// Cria uma função para esconder o elemento
function ocultarElemento() {

    // Procura o elemento que possui o id "demo4"
    const texto = document.getElementById("demo4");

    // "none" significa que ele não será mostrado
    texto.style.display = "none";

}

// Cria uma função para mostrar o elemento novamente
function mostrarElemento() {

    const texto = document.getElementById("demo4");

    // Mostra o elemento novamente
    // "block" faz o elemento aparecer
    texto.style.display = "block";

}




function exibirTexto() {

    const texto = document.getElementById("hidden-text");
    const dica = document.getElementById("demo5-hint");

    texto.style.display = "block";
    dica.style.display = "none";

}


function esconderTexto() {

    const texto = document.getElementById("hidden-text");
    const dica = document.getElementById("demo5-hint");

    texto.style.display = "none";
    dica.style.display = "block";

}




function iniciarAplicacao() {

    
    document.getElementById("botao-alterar-texto")
        .addEventListener("click", alterarConteudo);

    document.getElementById("botao-resetar-demo1")
        .addEventListener("click", resetarConteudo);


    
    document.getElementById("botao-ligar")
        .addEventListener("click", ligarLampada);

    document.getElementById("botao-desligar")
        .addEventListener("click", desligarLampada);


    
    document.getElementById("botao-aumentar-fonte")
        .addEventListener("click", aumentarFonte);

    document.getElementById("botao-mudar-cor")
        .addEventListener("click", mudarCor);

    document.getElementById("botao-negrito")
        .addEventListener("click", aplicarNegrito);

    document.getElementById("botao-fundo")
        .addEventListener("click", aplicarFundo);

    document.getElementById("botao-resetar-demo3")
        .addEventListener("click", resetarDemonstracao);


    
    document.getElementById("botao-ocultar")
        .addEventListener("click", ocultarElemento);

    document.getElementById("botao-mostrar")
        .addEventListener("click", mostrarElemento);


    
    document.getElementById("botao-revelar")
        .addEventListener("click", exibirTexto);

    document.getElementById("botao-esconder")
        .addEventListener("click", esconderTexto);

}

document.addEventListener("DOMContentLoaded", iniciarAplicacao);