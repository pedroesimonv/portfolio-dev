document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // ⚙️ CONFIGURACIÓN DE MODO EVALUACIÓN (IPE II)
    // ==========================================
    // Cambiar a 'true' para mostrar la sección al profesor.
    // Cambiar a 'false' para ocultarla en portfolio real.
    
    const modoEvaluacionIPE = true; 
    
    const seccionIPE = document.getElementById('ipe-activities');
    
    if (seccionIPE) {
        if (modoEvaluacionIPE) {
            seccionIPE.classList.remove('hidden');
        } else {
            seccionIPE.classList.add('hidden');
        }
    }

    // ==========================================
    // 🎬 ANIMACIONES DE SCROLL (Intersection Observer)
    // ==========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.05, 
        rootMargin: "0px 0px -50px 0px"
    });

    //cerrar el bloque de animaciones
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

// ==========================================
    // 🚀 BOTÓN VOLVER ARRIBA
    // ==========================================
    const btnBackToTop = document.getElementById('btn-back-to-top');

    // Mostrar u ocultar el botón al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) { // Si bajo más de 400px
            btnBackToTop.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
            btnBackToTop.classList.add('opacity-100', 'translate-y-0');
        } else {
            btnBackToTop.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
            btnBackToTop.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    // Acción de click para subir suavemente
    btnBackToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // 🔍 LIGHTBOX PARA IMÁGENES (Google Trends)
    // ==========================================
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementById('close-modal');
    const imagesToEnlarge = document.querySelectorAll('.image-enlarge');

    if (modal && modalImg) {
        // Función para abrir la imagen
        imagesToEnlarge.forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src; // Copia la ruta de la imagen clicada
                modal.classList.remove('hidden');
                
                // Pequeño retraso para que la transición CSS funcione fluidamente
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modalImg.classList.remove('scale-95');
                    modalImg.classList.add('scale-100');
                }, 10);
            });
        });

        // Función para cerrar el modal
        const closeModal = () => {
            modal.classList.add('opacity-0');
            modalImg.classList.remove('scale-100');
            modalImg.classList.add('scale-95');
            
            // Espera a que termine la animación de desvanecimiento para ocultarlo del todo
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300); 
        };

        // Cerrar al hacer click en la "X"
        closeBtn.addEventListener('click', closeModal);
        
        // Cerrar al hacer click en el fondo negro (fuera de la imagen)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { 
                closeModal();
            }
        });

        // Cerrar al pulsar la tecla "Escape" (Buena práctica de UX)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

// ==========================================
    // ✨ FONDO ANIMADO 8-BITS (Particles.js)
    // ==========================================
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 40, // Cantidad de píxeles en pantalla
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": {
                    "value": ["#8A2BE2", "#00FFFF", "#2D3250"] 
                },
                "shape": {
                    "type": "edge", // Forma de píxel cuadrado
                },
                "opacity": {
                    "value": 0.5,
                    "random": true, // Algunos brillan más que otros
                    "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 4, // Tamaño base del píxel
                    "random": true, // Diferentes tamaños
                    "anim": { "enable": false }
                },
                "line_linked": {
                    "enable": false // Desactivamos las líneas, solo queremos píxeles flotando
                },
                "move": {
                    "enable": true,
                    "speed": 1, // Movimiento muy lento y relajante
                    "direction": "top", // Flotan hacia arriba
                    "random": true,
                    "straight": false,
                    "out_mode": "out", // Desaparecen por arriba y reaparecen por abajo
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": false }, // Desactivado para no distraer
                    "onclick": { "enable": false },
                    "resize": true
                }
            },
            "retina_detect": true
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