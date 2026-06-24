// ======================
// LOGIN
// ======================

const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();

        if (!nome) {
            alert("Digite seu nome!");
            return;
        }

        sessionStorage.setItem("nomeUsuario", nome);
        window.location.href = "inicio.html";
    });
}


// ======================
// PÁGINA INICIAL
// ======================

const nomeUsuario = document.getElementById("nomeUsuario");

if (nomeUsuario) {
    const nomeSalvo = sessionStorage.getItem("nomeUsuario");
    nomeUsuario.textContent = nomeSalvo || "Visitante";
}


// ======================
// BOTÃO COMEÇAR QUIZ
// ======================

function comecarQuiz() {
    window.location.href = "perguntas.html";
}