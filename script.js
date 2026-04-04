const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mainNav = document.getElementById('main-nav');
const menuOverlay = document.getElementById('menu-overlay');

function getFocusableElements() {
    if (!mainNav) return [];
    return Array.from(mainNav.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    ));
}

function trapFocus(e) {
    const focusable = getFocusableElements();

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    if (e.key === 'Escape') {
        setMenuOpen(false);
    }
}

function setMenuOpen(isOpen) {
    if (!mainNav || !menuOverlay) return;

    if (isOpen) {
        mainNav.removeAttribute('hidden');
        mainNav.setAttribute('aria-hidden', 'false');
        menuOverlay.classList.add('menu-overlay--visible');
        menuClose?.focus();
        document.addEventListener('keydown', trapFocus);
    } else {
        mainNav.setAttribute('hidden', '');
        mainNav.setAttribute('aria-hidden', 'true');
        menuOverlay.classList.remove('menu-overlay--visible');
        menuOpen?.focus();
        document.removeEventListener('keydown', trapFocus);
    }
}

menuOpen?.addEventListener('click', () => setMenuOpen(true));
menuClose?.addEventListener('click', () => setMenuOpen(false));
menuOverlay?.addEventListener('click', () => setMenuOpen(false));