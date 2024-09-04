// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show'); // Adiciona ou remove a classe 'show'
    });

    // Fechar o menu quando um link for clicado (em dispositivos móveis)
    nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            nav.classList.remove('show');
        }
    });

    // Gerenciar o resize para manter a navegação visível se voltar ao modo desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
        }
    });
});


