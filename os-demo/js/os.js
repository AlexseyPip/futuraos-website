(function () {
    'use strict';

    const ICON = '../../img/os-demo/icons';
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const locale = urlLang === 'en' || document.documentElement.lang === 'en' ? 'en' : 'ru';

    const t = {
        ru: {
            files: 'Файлы', terminal: 'Терминал', calculator: 'Калькулятор',
            settings: 'Настройки', browser: 'FuturaWeb', about: 'О системе',
            welcome: 'Добро пожаловать', user: 'Пользователь',
            back: '← На сайт', shutdown: 'Выход',
            aboutText: 'FuturaOS 2.5 LTS — демо рабочего стола в браузере.',
            browserText: 'FuturaWeb на движке V8. Демо-версия.',
            settingsText: 'Центр управления FuturaOS.\nТема: Тёмная\nСеть: P2P активна',
            filesText: 'Домашняя папка\n├── Документы\n├── Загрузки\n└── Изображения',
            termPrompt: 'user@futuraos:~$ ', termWelcome: 'FuturaOS Terminal 2.5 — bash\nВведите help для справки\n',
            help: 'Доступные команды: help, clear, ls, whoami, date, neofetch'
        },
        en: {
            files: 'Files', terminal: 'Terminal', calculator: 'Calculator',
            settings: 'Settings', browser: 'FuturaWeb', about: 'About',
            welcome: 'Welcome', user: 'User',
            back: '← Back to site', shutdown: 'Shutdown',
            aboutText: 'FuturaOS 2.5 LTS — browser desktop demo.',
            browserText: 'FuturaWeb powered by V8. Demo version.',
            settingsText: 'FuturaOS Control Center.\nTheme: Dark\nNetwork: P2P active',
            filesText: 'Home folder\n├── Documents\n├── Downloads\n└── Images',
            termPrompt: 'user@futuraos:~$ ', termWelcome: 'FuturaOS Terminal 2.5 — bash\nType help for commands\n',
            help: 'Available commands: help, clear, ls, whoami, date, neofetch'
        }
    };

    const s = t[locale];
    let zIndex = 100;
    let focusedWindow = null;
    const windows = new Map();

    const desktop = document.getElementById('desktop');
    const cursor = document.getElementById('cursor');
    const startMenu = document.getElementById('startMenu');
    const startBtn = document.getElementById('startBtn');
    const taskbarApps = document.getElementById('taskbarApps');

    const apps = [
        { id: 'files', title: s.files, icon: `${ICON}/48/folder.png`, type: 'text', content: s.filesText },
        { id: 'terminal', title: s.terminal, icon: `${ICON}/48/utilities-terminal.png`, type: 'terminal' },
        { id: 'calculator', title: s.calculator, icon: `${ICON}/48/calculator.png`, type: 'calculator' },
        { id: 'settings', title: s.settings, icon: `${ICON}/48/gears.png`, type: 'text', content: s.settingsText },
        { id: 'browser', title: s.browser, icon: `${ICON}/48/applications-generic.png`, type: 'text', content: s.browserText },
        { id: 'about', title: s.about, icon: `${ICON}/48/help.png`, type: 'text', content: s.aboutText }
    ];

    function updateClock() {
        const el = document.getElementById('clock');
        if (!el) return;
        const now = new Date();
        el.innerHTML = now.toLocaleTimeString(locale === 'en' ? 'en-US' : 'ru-RU', { hour: '2-digit', minute: '2-digit' })
            + '<br>' + now.toLocaleDateString(locale === 'en' ? 'en-US' : 'ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });
    }

    function focusWindow(win) {
        if (focusedWindow) focusedWindow.classList.remove('focused');
        focusedWindow = win;
        win.classList.add('focused');
        win.style.zIndex = ++zIndex;
        updateTaskbar();
    }

    function updateTaskbar() {
        taskbarApps.innerHTML = '';
        windows.forEach((win, id) => {
            if (win.style.display === 'none') return;
            const app = apps.find(a => a.id === id);
            if (!app) return;
            const btn = document.createElement('div');
            btn.className = 'taskbar-app' + (focusedWindow === win ? ' active' : '');
            btn.innerHTML = `<img src="${app.icon}" alt=""><span>${app.title}</span>`;
            btn.addEventListener('click', () => {
                if (focusedWindow === win && win.style.display !== 'none') {
                    win.style.display = 'none';
                } else {
                    win.style.display = 'flex';
                    focusWindow(win);
                }
                updateTaskbar();
            });
            taskbarApps.appendChild(btn);
        });
    }

    function createWindow(app) {
        if (windows.has(app.id)) {
            const existing = windows.get(app.id);
            existing.style.display = 'flex';
            focusWindow(existing);
            return;
        }

        const win = document.createElement('div');
        win.className = 'os-window focused';
        win.style.left = (80 + Math.random() * 200) + 'px';
        win.style.top = (60 + Math.random() * 120) + 'px';
        win.style.width = app.type === 'calculator' ? '260px' : '420px';
        win.style.height = app.type === 'calculator' ? '340px' : '280px';

        win.innerHTML = `
            <div class="window-titlebar">
                <div class="window-title"><img src="${app.icon}" alt="">${app.title}</div>
                <div class="window-controls">
                    <button class="window-btn minimize" aria-label="Minimize">—</button>
                    <button class="window-btn close" aria-label="Close">✕</button>
                </div>
            </div>
            <div class="window-content ${app.type}"></div>
        `;

        const content = win.querySelector('.window-content');

        if (app.type === 'text') {
            content.style.whiteSpace = 'pre-line';
            content.textContent = app.content;
        } else if (app.type === 'terminal') {
            content.innerHTML = `<div class="term-output">${s.termWelcome}</div><div class="term-input-line"><span class="term-prompt">${s.termPrompt}</span><input class="term-input" autofocus></div>`;
            const input = content.querySelector('.term-input');
            const output = content.querySelector('.term-output');
            input.addEventListener('keydown', (e) => {
                if (e.key !== 'Enter') return;
                const cmd = input.value.trim();
                output.innerHTML += `<div>${s.termPrompt}${cmd}</div>`;
                const lines = {
                    help: s.help,
                    clear: '',
                    ls: 'Documents  Downloads  Images  futuraos.log',
                    whoami: 'user',
                    date: new Date().toString(),
                    neofetch: 'FuturaOS 2.5 LTS x86_64\nKernel: futura-6.1\nShell: bash 5.2\nTerminal: FuturaTerm'
                };
                if (cmd === 'clear') output.innerHTML = '';
                else if (lines[cmd]) output.innerHTML += `<div>${lines[cmd]}</div>`;
                else if (cmd) output.innerHTML += `<div>${locale === 'en' ? 'Command not found' : 'Команда не найдена'}: ${cmd}</div>`;
                input.value = '';
                content.scrollTop = content.scrollHeight;
            });
        } else if (app.type === 'calculator') {
            content.innerHTML = '<div class="calc-display">0</div>';
            const display = content.querySelector('.calc-display');
            let current = '0';
            const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];
            buttons.forEach(b => {
                const btn = document.createElement('button');
                btn.className = 'calc-btn' + (['/','*','-','+'].includes(b) ? ' operator' : '') + (b === '=' ? ' equals' : '');
                btn.textContent = b;
                btn.addEventListener('click', () => {
                    if (b === 'C') { current = '0'; display.textContent = current; return; }
                    if (b === '=') {
                        try { current = String(Function('"use strict";return (' + current + ')')()); }
                        catch { current = 'Error'; }
                        display.textContent = current;
                        return;
                    }
                    current = current === '0' && b !== '.' ? b : current + b;
                    display.textContent = current;
                });
                content.appendChild(btn);
            });
        }

        win.querySelector('.close').addEventListener('click', () => {
            win.remove();
            windows.delete(app.id);
            if (focusedWindow === win) focusedWindow = null;
            updateTaskbar();
        });

        win.querySelector('.minimize').addEventListener('click', () => {
            win.style.display = 'none';
            updateTaskbar();
        });

        const titlebar = win.querySelector('.window-titlebar');
        let dragging = false, ox, oy;
        titlebar.addEventListener('mousedown', (e) => {
            dragging = true;
            focusWindow(win);
            ox = e.clientX - win.offsetLeft;
            oy = e.clientY - win.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (!dragging) return;
            win.style.left = (e.clientX - ox) + 'px';
            win.style.top = (e.clientY - oy) + 'px';
        });

        document.addEventListener('mouseup', () => { dragging = false; });

        win.addEventListener('mousedown', () => focusWindow(win));

        desktop.appendChild(win);
        windows.set(app.id, win);
        focusWindow(win);
        updateTaskbar();
    }

    function renderDesktopIcons() {
        const container = document.getElementById('desktopIcons');
        apps.forEach(app => {
            const el = document.createElement('div');
            el.className = 'desktop-icon';
            el.innerHTML = `<img src="${app.icon}" alt="${app.title}"><span>${app.title}</span>`;
            el.addEventListener('dblclick', () => createWindow(app));
            el.addEventListener('click', () => {
                document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
                el.classList.add('selected');
            });
            container.appendChild(el);
        });
    }

    function renderStartMenu() {
        const items = document.getElementById('startMenuItems');
        apps.forEach(app => {
            const el = document.createElement('div');
            el.className = 'start-menu-item';
            el.innerHTML = `<img src="${app.icon}" alt=""><span>${app.title}</span>`;
            el.addEventListener('click', () => {
                createWindow(app);
                startMenu.classList.remove('open');
                startBtn.classList.remove('active');
            });
            items.appendChild(el);
        });
    }

    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('open');
        startBtn.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
            startMenu.classList.remove('open');
            startBtn.classList.remove('active');
        }
        if (!e.target.closest('.desktop-icon')) {
            document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
        }
    });

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

    renderDesktopIcons();
    renderStartMenu();
    updateClock();
    setInterval(updateClock, 30000);

    const backLink = document.getElementById('backLink');
    if (backLink) {
        backLink.textContent = s.back;
        backLink.href = locale === 'en' ? '/en/' : '/';
    }

    const welcomeText = document.getElementById('welcomeText');
    if (welcomeText) welcomeText.textContent = `${s.welcome}, ${s.user}`;
})();
