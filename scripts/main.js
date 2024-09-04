// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show'); 
        menuToggle.classList.toggle('active');
    });

    nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            nav.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
});
