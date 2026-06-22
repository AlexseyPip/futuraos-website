(function () {
    'use strict';

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const mobileNav = document.getElementById('mobileNav');
    const burgerBtn = document.getElementById('burgerBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    if (burgerBtn && mobileNav) {
        burgerBtn.addEventListener('click', () => {
            mobileNav.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenuBtn && mobileNav) {
        closeMenuBtn.addEventListener('click', () => {
            mobileNav.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    document.querySelectorAll('.mobile-nav a[href]').forEach(link => {
        if (link.getAttribute('data-scroll')) return;
        link.addEventListener('click', () => {
            if (mobileNav) mobileNav.style.display = 'none';
            document.body.style.overflow = '';
        });
    });
})();
