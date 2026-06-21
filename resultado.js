const resultados = {
    fig1: {
        nome: "Justin com flores",
        imagem: "img/fig1.webp",
        descricao: "Você é essa figurinha pois é romântico na medida, sabe? Tipo quem chega entregando flor mas com uma cara de “se não gostou, azar o seu”."
    },
    fig2: {
        nome: "Velinho rabugento",
        imagem: "img/fig2.webp",
        descricao: "Você é essa figurinha pois é bravo sim, e com orgulho! Vive com cara de julgamento permanente do universo."
    },
    fig3: {
        nome: "Cachorrinho feliz",
        imagem: "img/fig3.webp",
        descricao: "Você é essa figurinha pois é feliz, inocente e transmite uma paz absurda."
    },
    fig4: {
        nome: "Gatinho chorando",
        imagem: "img/fig4.webp",
        descricao: "Você é essa figurinha pois é dramático, sensível e emocionalmente cansado (coitado)."
    }
};

/* ======================
   PEGAR PONTUAÇÃO
====================== */

const pontuacoes = {
    fig1: Number(localStorage.getItem("fig1")) || 0,
    fig2: Number(localStorage.getItem("fig2")) || 0,
    fig3: Number(localStorage.getItem("fig3")) || 0,
    fig4: Number(localStorage.getItem("fig4")) || 0
};

/* ======================
   DEFINIR VENCEDOR
====================== */

const vencedor = Object.keys(pontuacoes).reduce((a, b) => {
    return pontuacoes[a] > pontuacoes[b] ? a : b;
});

/* ======================
   EXIBIR RESULTADO
====================== */

const resultado = resultados[vencedor];

if (resultado) {
    document.getElementById("fotoResultado").src = resultado.imagem;
    document.getElementById("tituloResultado").textContent = resultado.nome;
    document.getElementById("descricaoResultado").textContent = resultado.descricao;
}

/* ======================
   GRÁFICO
====================== */

new Chart(document.getElementById("grafico"), {
    type: "pie",
    data: {
        labels: ["Fig 1", "Fig 2", "Fig 3", "Fig 4"],
        datasets: [{
            data: [
                pontuacoes.fig1,
                pontuacoes.fig2,
                pontuacoes.fig3,
                pontuacoes.fig4
            ]
        }]
    }
});