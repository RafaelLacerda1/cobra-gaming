document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const barraLateral = document.querySelector('.barra-lateral');
    const overlayMenu = document.querySelector('.overlay-menu');

    menuToggle.addEventListener('click', function() {
        barraLateral.classList.toggle('active');
        overlayMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    overlayMenu.addEventListener('click', function() {
        barraLateral.classList.remove('active');
        overlayMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

