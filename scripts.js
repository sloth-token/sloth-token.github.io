document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Kontrat Adresi Kopyalama İşlevi
    const copyButton = document.getElementById('copyButton');
    const contractAddressElement = document.getElementById('contractAddress');
    
    // Butonun ve adresin varlığını kontrol et
    if (copyButton && contractAddressElement) {
        const contractAddress = contractAddressElement.textContent;
        
        copyButton.addEventListener('click', function() {
            // Adresi panoya kopyala
            navigator.clipboard.writeText(contractAddress).then(function() {
                // Kopyalandı bilgisini göster (Dilden bağımsız, kısa bir kelime kullandık)
                const originalText = copyButton.textContent;
                copyButton.textContent = 'OK!';
                
                // 1.5 saniye sonra metni geri yükle
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 1500);
            }).catch(err => {
                console.error('Metin kopyalanamadı: ', err);
            });
        });
    }

    // 2. SSS/FAQ Akordeon İşlevi
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Tıklanan öğeye 'active' sınıfını ekle/kaldır (CSS geçişlerini tetikler)
            item.classList.toggle('active');

            // Akordeonun yüksekliğini ayarla
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                // İçeriğin kaydırma yüksekliğini max-height olarak ayarla
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                // Kapat
                answer.style.maxHeight = "0";
            }
        });
    });

    // 3. Telif Hakkı Yılını Otomatik Güncelleme (isteğe bağlı, ekledim)
    const copyrightYearElement = document.getElementById('copyrightYear');
    if (copyrightYearElement) {
        const currentYear = new Date().getFullYear();
        copyrightYearElement.textContent = `© ${currentYear} SLOTH TOKEN. ALL RIGHTS RESERVED.`;
    }
});
