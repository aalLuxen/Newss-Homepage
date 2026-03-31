const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mainNav = document.getElementById('main-nav');
const menuOverlay = document.getElementById('menu-overlay');

menuOpen.addEventListener('click', () => {
    mainNav.style.display = 'flex';
    menuOverlay.style.display = 'block';
    menuOpen.setAttribute('aria-expanded', 'true');
    mainNav.setAttribute('aria-hidden', 'false');
})

menuClose.addEventListener('click', () => {
    mainNav.style.display = 'none';
    menuOverlay.style.display = 'none';
    menuOpen.setAttribute('aria-expanded', 'false');
    mainNav.setAttribute('aria-hidden', 'true');
})

menuOverlay.addEventListener('click', () => {
    mainNav.style.display = 'none';
    menuOverlay.style.display = 'none';
    menuOpen.setAttribute('aria-expanded', 'false');
    mainNav.setAttribute('aria-hidden', 'true');
})