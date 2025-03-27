// Adiciona o evento para o botão de logout
document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("users"); // Limpa o Local Storage
    window.location.href = "index.html"; // Redireciona para a página de login
});
