(function () {
    'use strict';

    const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';

    const t = {
        ru: {
            close: 'Закрыть',
            gallery: [
                { icon: 'fa-desktop', title: 'Рабочий стол FuturaOS', desc: 'Современный интерфейс с поддержкой виджетов, виртуальных рабочих столов и глобального поиска. Тёмная и светлая темы.' },
                { icon: 'fa-store', title: 'P2P App Store', desc: 'Установка приложений через распределённую сеть IPFS. Пример: magnet-ссылка или прямой CID. Без цензуры и единой точки отказа.' },
                { icon: 'fa-globe', title: 'FuturaWeb (V8)', desc: 'Встроенный браузер на движке V8. Высокая производительность, инструменты разработчика, поддержка WASM, песочница вкладок.' },
                { icon: 'fa-terminal', title: 'Терминал + POSIX', desc: 'Полноценная POSIX-среда: bash, coreutils, GCC, Python, make. Всё работает без дополнительной настройки.' },
                { icon: 'fa-sliders-h', title: 'Центр управления', desc: 'Системные настройки: пакеты, P2P-режимы, параметры сети, мониторинг ресурсов и кастомизация.' },
                { icon: 'fa-gamepad', title: 'Игровой режим', desc: 'Низкая задержка, оптимизация для Vulkan и DirectX через Proton. Наслаждайтесь играми без компромиссов.' },
                { icon: 'fa-wifi', title: 'Mesh Network', desc: 'Встроенная поддержка P2P-сетей, обмен файлами без центральных серверов.' },
                { icon: 'fa-shield-alt', title: 'Безопасность', desc: 'Собственная система безопасности с изоляцией процессов и защитой от эксплойтов.' }
            ],
            p2pModal: {
                title: 'P2P Магазин приложений FuturaOS',
                body: `<p><i class="fas fa-store"></i> <strong>Каталог децентрализованных приложений</strong><br>
                Доступно: <strong>FuturaWriter</strong>, <strong>PeerChat</strong>, <strong>V8 Studio</strong>, <strong>MeshVPN</strong>, <strong>IPFS Desktop</strong>, <strong>MediaCoder</strong> и более 2000 пакетов.</p>
                <p><i class="fas fa-link"></i> Пример magnet-ссылки:<br> <code style="background:#f0f2f5;padding:4px 8px;border-radius:12px;display:inline-block;">magnet:?xt=urn:btih:futura_editor_latest</code></p>
                <p><i class="fas fa-check-circle"></i> Клиент автоматически загружает и верифицирует приложения через P2P-сеть.</p>`
            },
            browserModal: {
                title: 'FuturaWeb Browser (V8 Engine)',
                body: `<p><i class="fab fa-chrome"></i> <strong>Браузер на движке V8 12.5</strong><br>
                ✔️ Производительность: 100% в Speedometer 3.0<br>
                ✔️ WebGPU, WebCodecs, WASM SIMD<br>
                ✔️ Встроенный отладчик и элементы разработчика<br>
                🚀 <em>Скорость загрузки страниц выше Chrome на 18%</em></p>
                <hr style="margin:14px 0;">
                <p><i class="fas fa-bolt"></i> Браузер является неотъемлемой частью FuturaOS.</p>`
            },
            downloadPreparing: (iso) => `<i class="fas fa-spinner fa-pulse"></i> Подготовка образа ${iso}...`,
            downloadStarted: (iso) => `<i class="fas fa-check-circle"></i> Загрузка ${iso} началась. Реальный ISO ~2.8 ГБ.`,
            downloadContent: (iso) => `FuturaOS образ: ${iso}\nПроприетарная ОС · POSIX + P2P магазин + браузер V8.\nКонтрольная сумма: a1f9c8e3d4b2`
        },
        en: {
            close: 'Close',
            gallery: [
                { icon: 'fa-desktop', title: 'FuturaOS Desktop', desc: 'Modern interface with widgets, virtual desktops, and global search. Dark and light themes.' },
                { icon: 'fa-store', title: 'P2P App Store', desc: 'Install apps via the distributed IPFS network. Example: magnet link or direct CID. No censorship or single point of failure.' },
                { icon: 'fa-globe', title: 'FuturaWeb (V8)', desc: 'Built-in V8 browser. High performance, developer tools, WASM support, per-tab sandboxing.' },
                { icon: 'fa-terminal', title: 'Terminal + POSIX', desc: 'Full POSIX environment: bash, coreutils, GCC, Python, make. Everything works out of the box.' },
                { icon: 'fa-sliders-h', title: 'Control Center', desc: 'System settings: packages, P2P modes, network parameters, resource monitoring, and customization.' },
                { icon: 'fa-gamepad', title: 'Gaming Mode', desc: 'Low latency, Vulkan and DirectX optimization via Proton. Enjoy games without compromise.' },
                { icon: 'fa-wifi', title: 'Mesh Network', desc: 'Built-in P2P network support, file sharing without central servers.' },
                { icon: 'fa-shield-alt', title: 'Security', desc: 'Proprietary security system with process isolation and exploit protection.' }
            ],
            p2pModal: {
                title: 'FuturaOS P2P App Store',
                body: `<p><i class="fas fa-store"></i> <strong>Decentralized app catalog</strong><br>
                Available: <strong>FuturaWriter</strong>, <strong>PeerChat</strong>, <strong>V8 Studio</strong>, <strong>MeshVPN</strong>, <strong>IPFS Desktop</strong>, <strong>MediaCoder</strong> and 2000+ packages.</p>
                <p><i class="fas fa-link"></i> Example magnet link:<br> <code style="background:#f0f2f5;padding:4px 8px;border-radius:12px;display:inline-block;">magnet:?xt=urn:btih:futura_editor_latest</code></p>
                <p><i class="fas fa-check-circle"></i> The client automatically downloads and verifies apps via the P2P network.</p>`
            },
            browserModal: {
                title: 'FuturaWeb Browser (V8 Engine)',
                body: `<p><i class="fab fa-chrome"></i> <strong>Browser powered by V8 12.5</strong><br>
                ✔️ Performance: 100% in Speedometer 3.0<br>
                ✔️ WebGPU, WebCodecs, WASM SIMD<br>
                ✔️ Built-in debugger and developer tools<br>
                🚀 <em>Page load speed 18% faster than Chrome</em></p>
                <hr style="margin:14px 0;">
                <p><i class="fas fa-bolt"></i> The browser is an integral part of FuturaOS.</p>`
            },
            downloadPreparing: (iso) => `<i class="fas fa-spinner fa-pulse"></i> Preparing image ${iso}...`,
            downloadStarted: (iso) => `<i class="fas fa-check-circle"></i> Download of ${iso} started. Real ISO ~2.8 GB.`,
            downloadContent: (iso) => `FuturaOS image: ${iso}\nProprietary OS · POSIX + P2P store + V8 browser.\nChecksum: a1f9c8e3d4b2`
        }
    };

    const strings = t[locale];

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

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav) mobileNav.style.display = 'none';
            document.body.style.overflow = '';
            const targetId = link.getAttribute('data-scroll');
            const targetElement = document.getElementById(targetId);
            if (targetElement) smoothScrollTo(targetElement, 700);
        });
    });

    function smoothScrollTo(targetElement, duration = 700) {
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startPosition + distance * ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
    }

    document.querySelectorAll('[data-scroll]').forEach(link => {
        if (!link.classList.contains('mobile-link')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-scroll');
                const targetElement = document.getElementById(targetId);
                if (targetElement) smoothScrollTo(targetElement, 700);
            });
        }
    });

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

        const titleElem = document.createElement('h3');
        titleElem.textContent = title;

        const contentElem = document.createElement('div');
        contentElem.className = 'modal-body';
        contentElem.innerHTML = bodyHtml;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'btn-primary';
        closeBtn.innerHTML = `<i class="fas fa-times"></i> ${strings.close}`;
        closeBtn.onclick = () => overlay.remove();

        card.appendChild(titleElem);
        card.appendChild(contentElem);
        card.appendChild(closeBtn);
        overlay.appendChild(card);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });
    }

    const images = strings.gallery;
    let currentStartIndex = 0;
    const itemsPerPage = 3;
    const totalImages = images.length;
    const galleryGrid = document.getElementById('galleryGrid');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    let autoTimer = null;
    let userInteracted = false;
    const AUTO_INTERVAL = 5000;

    function renderGallery() {
        if (!galleryGrid) return;
        const cards = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const imgIndex = (currentStartIndex + i) % totalImages;
            const img = images[imgIndex];
            cards.push(`
                <div class="gallery-card" data-img="${imgIndex}" role="button" tabindex="0" aria-label="${img.title}">
                    <i class="fas ${img.icon} gallery-icon" aria-hidden="true"></i>
                </div>
            `);
        }
        galleryGrid.innerHTML = cards.join('');
        document.querySelectorAll('.gallery-card').forEach(card => {
            const open = () => {
                const idx = parseInt(card.getAttribute('data-img'), 10);
                const img = images[idx];
                showModal(img.title, `<p>${img.desc}</p><div class="modal-icon-preview"><i class="fas ${img.icon}"></i></div>`);
            };
            card.addEventListener('click', open);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    open();
                }
            });
        });
    }

    function nextPage() {
        currentStartIndex = (currentStartIndex + 1) % totalImages;
        renderGallery();
        resetAutoTimer();
    }

    function prevPage() {
        currentStartIndex = (currentStartIndex - 1 + totalImages) % totalImages;
        renderGallery();
        resetAutoTimer();
    }

    function resetAutoTimer() {
        if (autoTimer) {
            clearInterval(autoTimer);
            autoTimer = null;
        }
        userInteracted = true;
        autoTimer = setInterval(() => {
            if (!userInteracted) nextPage();
            else userInteracted = false;
        }, AUTO_INTERVAL);
    }

    function startAutoTimer() {
        if (autoTimer) clearInterval(autoTimer);
        userInteracted = false;
        autoTimer = setInterval(() => {
            if (!userInteracted) nextPage();
            else userInteracted = false;
        }, AUTO_INTERVAL);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevPage(); userInteracted = true; });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextPage(); userInteracted = true; });

    if (galleryGrid) {
        galleryGrid.addEventListener('wheel', () => { userInteracted = true; resetAutoTimer(); });
        galleryGrid.addEventListener('touchstart', () => { userInteracted = true; resetAutoTimer(); });
    }

    renderGallery();
    startAutoTimer();

    document.getElementById('openP2PModal')?.addEventListener('click', () => {
        showModal(strings.p2pModal.title, strings.p2pModal.body);
    });

    document.getElementById('openBrowserModal')?.addEventListener('click', () => {
        showModal(strings.browserModal.title, strings.browserModal.body);
    });

    const statusDiv = document.getElementById('downloadStatus');
    document.querySelectorAll('.download-iso').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isoName = btn.getAttribute('data-iso');
            if (!isoName) return;
            if (statusDiv) statusDiv.innerHTML = strings.downloadPreparing(isoName);
            const blob = new Blob([strings.downloadContent(isoName)], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = isoName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            if (statusDiv) statusDiv.innerHTML = strings.downloadStarted(isoName);
            setTimeout(() => { if (statusDiv) statusDiv.innerHTML = ''; }, 3500);
        });
    });

    document.getElementById('heroDownload')?.addEventListener('click', () => {
        document.querySelector('.download-iso')?.click();
    });

    document.getElementById('heroP2P')?.addEventListener('click', () => {
        document.getElementById('openP2PModal')?.click();
    });
})();
