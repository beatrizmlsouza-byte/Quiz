// ======================
// LOGIN
// ======================

const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();

        if (nome === "") {
            alert("Digite seu nome!");
            return;
        }

        localStorage.setItem("nomeUsuario", nome);

        window.location.href = "inicio.html";
    });
}

// ======================
// PÁGINA INICIAL
// ======================

const nomeUsuario = document.getElementById("nomeUsuario");

if (nomeUsuario) {

    const nomeSalvo = localStorage.getItem("nomeUsuario");

    if (nomeSalvo) {
        nomeUsuario.textContent = nomeSalvo;
    } else {
        nomeUsuario.textContent = "Visitante";
    }
}

// ======================
// BOTÃO COMEÇAR QUIZ
// ======================

function comecarQuiz() {
    window.location.href = "perguntas.html";
}