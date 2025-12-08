document.addEventListener('DOMContentLoaded', function() {

    // --- TELİF HAKKI YILINI OTOMATİK GÜNCELLEME İŞLEVİ ---
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyrightYear');

    if (copyrightElement) {
        let yearText = startYear;
        if (currentYear > startYear) {
            // Başlangıç yılı 2025'ten büyükse, aralığı göster
            yearText = `${startYear} - ${currentYear}`;
        }
        
        // Telif hakkı metnini güncelle
        copyrightElement.innerHTML = `&copy; ${yearText} SLOTH TOKEN. ALL RIGHTS RESERVED.`;
    }

    // --- KONTRA ADRESİ KOPYALAMA İŞLEVİ ---
    document.getElementById('copyButton').addEventListener('click', function() {
        const contractAddress = document.getElementById('contractAddress').textContent;
        const copyButton = document.getElementById('copyButton');
        
        navigator.clipboard.writeText(contractAddress).then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = 'COPIED!';
            copyButton.style.backgroundColor = '#4dfff7'; 

            setTimeout(() => {
                copyButton.textContent = originalText;
                copyButton.style.backgroundColor = '#00ffbf'; 
            }, 1500);

        }).catch(err => {
            console.error('Copy failed: ', err);
        });
    });

    // --- FAQ Accordion işlevi ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(i => {
                if (i !== item && i.classList.contains('active')) {
                    i.classList.remove('active');
                    i.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = null;
            }
        });
    });
});
