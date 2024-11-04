
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const semestre = document.getElementById('semestre').value;

    // Armazena os valores no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('semestre', semestre);

    // Redireciona para a página de carregamento
    window.location.href = "loading.html";
});
