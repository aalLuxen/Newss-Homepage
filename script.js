const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mainNav = document.getElementById('main-nav');
const menuOverlay = document.getElementById('menu-overlay');

function setMenuOpen(isOpen) {
    if (isOpen) {
        mainNav.removeAttribute('hidden');
        mainNav.setAttribute('aria-hidden', 'false');
        menuOpen.setAttribute('aria-expanded', 'true');
        menuClose.setAttribute('aria-expanded', 'true');
        menuOverlay.style.display = 'block';
    } else {
        mainNav.setAttribute('hidden', '');
        mainNav.setAttribute('aria-hidden', 'true');
        menuOpen.setAttribute('aria-expanded', 'false');
        menuClose.setAttribute('aria-expanded', 'false');
        menuOverlay.style.display = 'none';
    }
}

menuOpen.addEventListener('click', () => setMenuOpen(true));
menuClose.addEventListener('click', () => setMenuOpen(false));
menuOverlay.addEventListener('click', () => setMenuOpen(false));