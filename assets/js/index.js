// Função para exibir o popup de cadastro
document.getElementById("register-btn").addEventListener("click", function() {
    document.getElementById("register-popup").style.display = "block";
});

// Função para fechar o popup
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("register-popup").style.display = "none";
});

// Funcionalidade do formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Obtém os usuários cadastrados no Local Storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(u => u.user === username && u.pass === password);

    if (validUser) {
        window.location.href = "home.html"; // Redireciona para a página inicial
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});

// Funcionalidade do formulário de cadastro
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const successMessage = document.getElementById("success-message");

    // Obtém os usuários cadastrados no Local Storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica se o usuário já existe
    const userExists = users.some(u => u.user === newUsername);

    if (userExists) {
        successMessage.textContent = "Usuário já existe!";
        successMessage.style.color = "red";
    } else {
        users.push({ user: newUsername, pass: newPassword });
        localStorage.setItem("users", JSON.stringify(users));

        successMessage.textContent = "Cadastro realizado com sucesso!";
        successMessage.style.color = "green";

        // Fecha o popup após o cadastro
        setTimeout(() => {
            document.getElementById("register-popup").style.display = "none";
            document.getElementById("error-message").textContent = "Cadastro realizado com sucesso!";
        }, 2000);
    }
});
