const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mainNav = document.getElementById('main-nav');
const menuOverlay = document.getElementById('menu-overlay');

menuOpen.addEventListener('click', () => {
    mainNav.style.display = 'flex';
    menuOverlay.style.display = 'block';
})

menuClose.addEventListener('click', () => {
    mainNav.style.display = 'none';
    menuOverlay.style.display = 'none';
})

menuOverlay.addEventListener('click', () => {
    mainNav.style.display = 'none';
    menuOverlay.style.display = 'none';
})