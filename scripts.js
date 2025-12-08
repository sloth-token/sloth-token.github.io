/**
 * Dil seçici (dropdown) menüsünü açıp kapatır.
 * @param {Event} event - Tıklama olayı.
 */
function toggleLangMenu(event) {
    const langMenu = document.getElementById('langMenu');
    if (langMenu) {
        langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
    }
    event.stopPropagation();
}

// Dropdown menüsünün dışına tıklandığında menüyü kapatır.
document.addEventListener('click', function (event) {
    const langMenu = document.getElementById('langMenu');
    const langButton = document.querySelector('.lang-button');
    
    if (langMenu && langButton && !langButton.contains(event.target) && !langMenu.contains(event.target)) {
        langMenu.style.display = 'none';
    }
});

// Sözleşme adresi kopyalama işlevi
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    const contractAddressElement = document.getElementById('contractAddress');

    if (copyButton && contractAddressElement) {
        const contractAddress = contractAddressElement.textContent.trim();

        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(contractAddress).then(function() {
                // Başarı geri bildirimi
                copyButton.textContent = 'COPIED!';
                setTimeout(() => {
                    copyButton.textContent = 'COPY';
                }, 1500);
            }, function(err) {
                // Hata geri bildirimi
                console.error('Could not copy text: ', err);
                copyButton.textContent = 'ERROR!';
                setTimeout(() => {
                    copyButton.textContent = 'COPY';
                }, 1500);
            });
        });
    }
});
