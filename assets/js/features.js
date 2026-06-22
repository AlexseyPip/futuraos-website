(function () {
    'use strict';

    const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';
    const strings = window.FuturaI18n[locale];

    function showModal(title, bodyHtml) {
        const existing = document.getElementById('futuraModal');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'futuraModal';
        overlay.className = 'modal-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');

        const card = document.createElement('div');
        card.className = 'modal-card';
        card.innerHTML = `
            <h3>${title}</h3>
            <div class="modal-body">${bodyHtml}</div>
            <button class="btn-primary modal-close"><i class="fas fa-times"></i> ${strings.close}</button>
        `;
        overlay.appendChild(card);
        document.body.appendChild(overlay);

        overlay.querySelector('.modal-close').onclick = () => overlay.remove();
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    }

    const images = strings.gallery;
    let currentStartIndex = 0;
    const itemsPerPage = 3;
    const galleryGrid = document.getElementById('galleryGrid');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    let autoTimer = null;
    let userInteracted = false;

    function renderGallery() {
        if (!galleryGrid) return;
        const cards = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const imgIndex = (currentStartIndex + i) % images.length;
            const img = images[imgIndex];
            cards.push(`<div class="gallery-card" data-img="${imgIndex}" role="button" tabindex="0" aria-label="${img.title}"><i class="fas ${img.icon} gallery-icon" aria-hidden="true"></i></div>`);
        }
        galleryGrid.innerHTML = cards.join('');
        galleryGrid.querySelectorAll('.gallery-card').forEach(card => {
            const open = () => {
                const idx = parseInt(card.getAttribute('data-img'), 10);
                const img = images[idx];
                showModal(img.title, `<p>${img.desc}</p><div class="modal-icon-preview"><i class="fas ${img.icon}"></i></div>`);
            };
            card.addEventListener('click', open);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
            });
        });
    }

    function nextPage() { currentStartIndex = (currentStartIndex + 1) % images.length; renderGallery(); resetAutoTimer(); }
    function prevPage() { currentStartIndex = (currentStartIndex - 1 + images.length) % images.length; renderGallery(); resetAutoTimer(); }

    function resetAutoTimer() {
        if (autoTimer) clearInterval(autoTimer);
        userInteracted = true;
        autoTimer = setInterval(() => { if (!userInteracted) nextPage(); else userInteracted = false; }, 5000);
    }

    if (galleryGrid) {
        renderGallery();
        resetAutoTimer();
        if (prevBtn) prevBtn.addEventListener('click', () => { prevPage(); userInteracted = true; });
        if (nextBtn) nextBtn.addEventListener('click', () => { nextPage(); userInteracted = true; });
    }

    document.getElementById('openP2PModal')?.addEventListener('click', () => showModal(strings.p2pModal.title, strings.p2pModal.body));
    document.getElementById('openBrowserModal')?.addEventListener('click', () => showModal(strings.browserModal.title, strings.browserModal.body));
})();
