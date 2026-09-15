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

    // ==========================================
    // 🗂️ FILTRO DE PROYECTOS (Selector de Misiones)
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Quitar estilo activo de todos los botones
                filterBtns.forEach(b => {
                    b.classList.remove('bg-primary/20', 'text-primary', 'border-primary/50', 'shadow-[0_0_10px_rgba(138,43,226,0.2)]', 'active');
                    b.classList.add('bg-[#10101A]', 'text-slate-400', 'border-slate-700');
                });

                // 2. Poner estilo activo al botón clickeado
                btn.classList.remove('bg-[#10101A]', 'text-slate-400', 'border-slate-700');
                btn.classList.add('bg-primary/20', 'text-primary', 'border-primary/50', 'shadow-[0_0_10px_rgba(138,43,226,0.2)]', 'active');

                const filterValue = btn.getAttribute('data-filter');

                // 3. Filtrar con animación de opacidad
                projectCards.forEach(card => {
                    // Primero desvanecemos
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            // Si coincide, lo mostramos
                            card.style.display = 'flex'; 
                            // Pequeño retraso para que el navegador pinte el cambio antes de animar
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            // Si no coincide, se oculta
                            card.style.display = 'none';
                        }
                    }, 300); // 300ms espera a que termine la animación de desvanecimiento
                });
            });
        });
    }
    
});