(function () {
    'use strict';

    window.FuturaI18n = {
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
})();
