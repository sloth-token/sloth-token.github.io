// 1. Sözleşme Adresi Kopyalama İşlevi
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    const contractAddress = document.getElementById('contractAddress');

    if (copyButton && contractAddress) {
        copyButton.addEventListener('click', () => {
            // Sadece metni kopyala
            navigator.clipboard.writeText(contractAddress.textContent.trim())
                .then(() => {
                    // Buton metnini geçici olarak değiştir
                    const originalText = copyButton.textContent;
                    copyButton.textContent = 'COPIED!';
                    
                    // 1.5 saniye sonra eski haline getir
                    setTimeout(() => {
                        copyButton.textContent = originalText;
                    }, 1500);
                })
                .catch(err => {
                    console.error('Kopyalama başarısız oldu: ', err);
                });
        });
    }
});

// 2. SSS (FAQ) Akordeon İşlevi
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Tıklanan öğe zaten açıksa kapat
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                question.classList.remove('active');
            } else {
                // Önce diğer tüm cevapları kapat
                document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
                    openAnswer.classList.remove('active');
                    openAnswer.previousElementSibling.classList.remove('active');
                });

                // Tıklanan sorunun cevabını aç
                answer.classList.add('active');
                question.classList.add('active');
            }
        });
    });
});

// 3. Dil Seçici Açma/Kapama İşlevi (Yeni Eklendi)
document.addEventListener('DOMContentLoaded', () => {
    const langButton = document.querySelector('.lang-button');
    const langMenu = document.querySelector('.lang-menu');

    if (langButton && langMenu) {
        langButton.addEventListener('click', (event) => {
            // Butona tıklandığında menüyü aç/kapat
            langMenu.classList.toggle('active');
            event.stopPropagation(); // Doküman click olayını hemen tetiklemesini engelle
        });

        // Menü dışına tıklanırsa kapat
        document.addEventListener('click', (event) => {
            if (!langMenu.contains(event.target) && !langButton.contains(event.target)) {
                langMenu.classList.remove('active');
            }
        });
    }
});

// 4. Telif Hakkı Yılı Otomatik Güncelleme
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyrightYear');
    if (copyrightElement) {
        copyrightElement.innerHTML = `&copy; ${currentYear} SLOTH TOKEN. ALL RIGHTS RESERVED.`;
    }
});
