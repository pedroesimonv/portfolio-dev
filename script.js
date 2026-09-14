document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 🎬 ANIMACIONES DE SCROLL (Intersection Observer)
    // ==========================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15, 
        rootMargin: "0px 0px -100px 0px"
    });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => revealObserver.observe(el));

    // ==========================================
    // 🚀 BOTÓN VOLVER ARRIBA
    // ==========================================
    const heroSection = document.getElementById('hero');
    const backToTopBtn = document.getElementById('btn-back-to-top');

    if (heroSection && backToTopBtn) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
                    backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
                    backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                }
            });
        }, { threshold: 0.1 });

        heroObserver.observe(heroSection);
    }

    // Acción de click para subir suavemente
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // 🚧 NOTIFICACIÓN DE TRABAJO EN PROGRESO (WIP)
    // ==========================================
    const wipLinks = document.querySelectorAll('.wip-link');
    const wipToast = document.getElementById('wip-toast');
    let toastTimeout;

    if (wipLinks.length > 0 && wipToast) {
        wipLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evita que el enlace salte a otra página o arriba del todo

                // Mostrar el toast
                wipToast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
                wipToast.classList.add('translate-y-0', 'opacity-100');

                // Reiniciar el temporizador si el usuario hace clic varias veces
                clearTimeout(toastTimeout);
                
                // Ocultar después de 3 segundos
                toastTimeout = setTimeout(() => {
                    wipToast.classList.remove('translate-y-0', 'opacity-100');
                    wipToast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
                }, 3000);
            });
        });
    }
    
});