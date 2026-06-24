const paginas = document.querySelectorAll(".pagina");

let paginaAtual = 0;

const respostas = {};

const pontos = {
    fig1: 0,
    fig2: 0,
    fig3: 0,
    fig4: 0
};

/* =========================
   SELEÇÃO GENÉRICA
========================= */

function selecionarBase(pergunta, resultado, elemento, seletor) {
    const grupo = elemento.parentElement;

    grupo.querySelectorAll(seletor).forEach(el => {
        el.classList.remove("selecionado");
    });

    if (respostas[pergunta]) {
        pontos[respostas[pergunta]]--;
    }

    respostas[pergunta] = resultado;
    pontos[resultado]++;

    elemento.classList.add("selecionado");

    verificarPagina();
}

/* BOTÕES */
function selecionar(p, r, el) {
    selecionarBase(p, r, el, "button");
}

/* IMAGENS */
function selecionarImagem(p, r, el) {
    selecionarBase(p, r, el, "img");
}

/* TEXTO */
function selecionarTexto(p, r, el) {
    selecionarBase(p, r, el, ".opcao-texto");
}

/* =========================
   VALIDAÇÃO DA PÁGINA
========================= */

function verificarPagina() {
    const pagina = paginas[paginaAtual];
    const perguntas = pagina.querySelectorAll(".grupo-pergunta");

    let respondidas = 0;

    perguntas.forEach(pergunta => {
        if (respostas[pergunta.dataset.id]) {
            respondidas++;
        }
    });

    const botao = pagina.querySelector(".avancar");

    if (botao) {
        botao.disabled = respondidas !== perguntas.length;
    }
}

/* =========================
   NAVEGAÇÃO
========================= */

function trocarPagina(indice) {
    paginas[paginaAtual].classList.remove("ativa");

    paginaAtual = indice;

    paginas[paginaAtual].classList.add("ativa");

    atualizarProgresso();
    verificarPagina();
}

/* PROGRESSO */
function atualizarProgresso() {
    const barra = document.getElementById("progresso");
    const texto = document.getElementById("paginaTexto");

    const porcentagens = [33, 66, 100];

    barra.style.width = porcentagens[paginaAtual] + "%";
    texto.innerText = `Página ${paginaAtual + 1} de 3`;
}

atualizarProgresso();

/* =========================
   RESULTADO
========================= */

function mostrarResultado() {
    sessionStorage.setItem("fig1", pontos.fig1);
    sessionStorage.setItem("fig2", pontos.fig2);
    sessionStorage.setItem("fig3", pontos.fig3);
    sessionStorage.setItem("fig4", pontos.fig4);

    window.location.href = "resultado.html";
}

function inicio() {
    window.location.href = "inicio.html";
}