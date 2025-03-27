// Referência aos elementos
const btnAtualizar = document.getElementById("btnAtualizar");
const popupEmail = document.getElementById("popupEmail");
const popupAtualizacao = document.getElementById("popupAtualizacao");
const btnEmailConfirm = document.getElementById("btnEmailConfirm");
const btnCloseEmail = document.getElementById("btnCloseEmail");
const btnSalvarAtualizacao = document.getElementById("btnSalvarAtualizacao");
const btnCloseAtualizacao = document.getElementById("btnCloseAtualizacao");
const listaAtualizacoes = document.getElementById("listaAtualizacoes");

// Exibir o popup de e-mail ao clicar no botão "Atualizar"
btnAtualizar.addEventListener("click", () => {
    popupEmail.style.display = "flex";
});

// Fechar o popup de e-mail
btnCloseEmail.addEventListener("click", () => {
    popupEmail.style.display = "none";
});

// Verificar o e-mail e exibir o popup de atualização
btnEmailConfirm.addEventListener("click", () => {
    const email = document.getElementById("emailInput").value;
    if (email === "AlternativeJewels12@gmail.com") {
        popupEmail.style.display = "none";
        popupAtualizacao.style.display = "flex";
    } else {
        alert("E-mail incorreto!");
    }
});

// Fechar o popup de atualização
btnCloseAtualizacao.addEventListener("click", () => {
    popupAtualizacao.style.display = "none";
});

// Salvar as informações da atualização
btnSalvarAtualizacao.addEventListener("click", () => {
    const nomeAtualizacao = document.getElementById("nomeAtualizacao").value;
    const personagensAdicionados = document.getElementById("personagensAdicionados").value;
    const bannerUrl = document.getElementById("bannerUrl").value;

    // Criar uma nova div com as informações da atualização
    const novaAtualizacao = document.createElement("div");
    novaAtualizacao.classList.add("atualizacao");

    novaAtualizacao.innerHTML = `
        <h4>${nomeAtualizacao}</h4>
        <p><strong>Personagens Adicionados:</strong> ${personagensAdicionados}</p>
        <p><strong>Banner:</strong> <img src="${bannerUrl}" alt="Banner da atualização" style="width: 200px; height: auto;"></p>
    `;

    // Adicionar a nova atualização à lista
    listaAtualizacoes.appendChild(novaAtualizacao);

    // Fechar o popup
    popupAtualizacao.style.display = "none";
});
