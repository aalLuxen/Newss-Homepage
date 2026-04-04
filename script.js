const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mainNav = document.getElementById('main-nav');
const menuOverlay = document.getElementById('menu-overlay');

function setMenuOpen(isOpen) {
    if (!mainNav || !menuOverlay) return;

    if (isOpen) {
        mainNav.removeAttribute('hidden');
        mainNav.setAttribute('aria-hidden', 'false');
        menuOverlay.classList.add('menu-overlay--visible');
        menuClose?.focus();
    } else {
        mainNav.setAttribute('hidden', '');
        mainNav.setAttribute('aria-hidden', 'true');
        menuOverlay.classList.remove('menu-overlay--visible');
        menuOpen?.focus();
    }
}

menuOpen?.addEventListener('click', () => setMenuOpen(true));
menuClose?.addEventListener('click', () => setMenuOpen(false));
menuOverlay?.addEventListener('click', () => setMenuOpen(false));