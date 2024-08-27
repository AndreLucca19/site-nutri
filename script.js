document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do formulário de contato
    const form = document.getElementById('contato-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (nome && email && mensagem) {
            alert('Obrigado pelo contato, ' + nome + '! Sua mensagem foi enviada.');
            form.reset(); // Limpa o formulário após envio
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Funcionalidade de scroll suave para links de navegação
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidade do pop-up de boas-vindas
    const welcomeButton = document.getElementById('welcome-button');
    const popup = document.getElementById('welcome-popup');
    const closeButton = document.querySelector('.close-button');

    welcomeButton.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Fecha o pop-up se o usuário clicar fora da área de conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
