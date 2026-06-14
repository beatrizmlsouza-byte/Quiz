const paginas = document.querySelectorAll(".pagina");

let paginaAtual = 0;

const respostas = {};

let pontos = {
    fig1: 0,
    fig2: 0,
    fig3: 0,
    fig4: 0
};

// Selecionar respostas de botão
function selecionar(pergunta, resultado, elemento){

    const grupo = elemento.parentElement;

    grupo.querySelectorAll("button").forEach(btn=>{
        btn.classList.remove("selecionado");
    });

    if(respostas[pergunta]){
        pontos[respostas[pergunta]]--;
    }

    respostas[pergunta] = resultado;
    pontos[resultado]++;

    elemento.classList.add("selecionado");

    verificarPagina();
}

// Selecionar respostas de imagem
function selecionarImagem(pergunta, resultado, elemento){

    const grupo = elemento.parentElement;

    grupo.querySelectorAll("img").forEach(img=>{
        img.classList.remove("selecionado");
    });

    if(respostas[pergunta]){
        pontos[respostas[pergunta]]--;
    }

    respostas[pergunta] = resultado;
    pontos[resultado]++;

    elemento.classList.add("selecionado");

    verificarPagina();
}

// Verifica se todas perguntas da página foram respondidas
function verificarPagina(){

    const pagina = paginas[paginaAtual];

    const perguntas =
        pagina.querySelectorAll(".grupo-pergunta");

    let respondidas = 0;

    perguntas.forEach(pergunta=>{

        const id = pergunta.dataset.id;

        if(respostas[id]){
            respondidas++;
        }

    });

    const botao =
        pagina.querySelector(".avancar");

    if(botao){

        botao.disabled =
            respondidas !== perguntas.length;

    }
}

// Troca de página
function trocarPagina(indice){

    paginas[paginaAtual]
        .classList.remove("ativa");

    paginaAtual = indice;

    paginas[paginaAtual]
        .classList.add("ativa");

    atualizarProgresso();

    verificarPagina();
}

// Barra de progresso
function atualizarProgresso(){

    const barra =
        document.getElementById("progresso");

    const texto =
        document.getElementById("paginaTexto");

    const porcentagens = [33, 66, 100];

    barra.style.width =
        porcentagens[paginaAtual] + "%";

    texto.innerText =
        `Página ${paginaAtual + 1} de 3`;
}


// Inicializa barra
atualizarProgresso();

function mostrarResultado(){
    window.location.href = "resultado.html";
}


function inicio(){
    window.location.href = "inicio.html";
}