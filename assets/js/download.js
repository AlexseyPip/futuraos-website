(function () {
    'use strict';

    const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';
    const strings = window.FuturaI18n[locale];
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
})();
