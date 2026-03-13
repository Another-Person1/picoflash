// Copyright (C) 2025 Piers Finlayson <piers@piers.rocks>
//
// MIT License

const footerContainer = document.getElementById('footer');

const footerFallback = `
<footer class="site-footer">
    <p class="footer-brand">
        <span class="footer-title">pico⚡flash desktop</span><br>
        Lightning fast Pico flashing from your desktop
    </p>
    <p class="footer-meta">
        Based on <a href="https://github.com/piersfinlayson/picoflash" target="_blank" rel="noopener noreferrer">pico⚡flash</a><br>
        <a href="https://piers.rocks" target="_blank" rel="noopener noreferrer">piers.rocks</a>
    </p>
</footer>`;

if (footerContainer) {
    fetch('html/site/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Footer request failed: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data.trim() || footerFallback;
        })
        .catch(() => {
            footerContainer.innerHTML = footerFallback;
        });
}
