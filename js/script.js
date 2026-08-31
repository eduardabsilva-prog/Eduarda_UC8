const apiUrl = 'https://api.disneyapi.dev/character';

const limite = 50;

let paginaAtual = 1;

let totalPersonagens = 0;

const container = document.getElementById('container');

const botaoCarregar = document.getElementById('botaoCarregar');

const mensagem = document.getElementById('mensagem');

const pagina = document.getElementById('pagina');




// FUNÇÃO PARA CARREGAR OS PERSONAGENS

function carregarPersonagens() {

botaoCarregar.disabled = true;

mensagem.textContent = 'Carregando personagens...';


let url = `${apiUrl}?page=${paginaAtual}&pageSize=${limite}`;


// FAZ A REQUISIÇÃO PARA A API

fetch(url)

    .then(function (resposta) {

        return resposta.json();

    })


    .then(function (resultado) {

        // MOSTRA OS DADOS RECEBIDOS NO CONSOLE

        console.log(resultado);


        // PERCORRE OS PERSONAGENS RECEBIDOS

        resultado.data.forEach(function (personagem) {

            const card = criarCard(personagem);


            // ADICIONA O CARD NA PÁGINA

            container.appendChild(card);


            totalPersonagens++;

        });


        // ATUALIZA A QUANTIDADE DE PERSONAGENS

        mensagem.textContent =
            `${totalPersonagens} personagens carregados`;


        // ATUALIZA O NÚMERO DA PÁGINA

        pagina.textContent =
            `Página ${paginaAtual}`;


        // LIBERA O BOTÃO NOVAMENTE

        botaoCarregar.disabled = false;

    })


    .catch(function (erro) {

        console.log(erro);

        mensagem.textContent =
            'Erro ao carregar os personagens.';

        botaoCarregar.disabled = false;

    });

}




// FUNÇÃO PARA CRIAR O CARD DE CADA PERSONAGEM

function criarCard(personagem) {

const card = document.createElement('div');


card.classList.add('card');


card.innerHTML = `
    <img
        src="${personagem.imageUrl}"
        alt="${personagem.name}"
    >

    <h2>${personagem.name}</h2>
`;


return card;

}




// EVENTO DE CLIQUE NO BOTÃO

botaoCarregar.addEventListener('click', function () {

paginaAtual++;

carregarPersonagens();

});




// CARREGA A PRIMEIRA PÁGINA

carregarPersonagens();