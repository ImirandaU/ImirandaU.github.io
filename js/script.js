// ==================== SCROLL SUAVE ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== EFECTO NAVBAR AL HACER SCROLL ==================== //
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
});

// ==================== ANIMACIÓN DE FADE IN AL SCROLL ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador a tarjetas de proyectos
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==================== ANIMACIÓN DE SKILLS ==================== //
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
});

// Agregar keyframes de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== ANÁLISIS DE EVENTOS (OPCIONAL) ==================== //
// Rastrear clics en proyectos
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Proyecto visitado:', this.getAttribute('href'));
    });
});

// Rastrear clics en contacto
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Contacto:', this.textContent.trim());
    });
});

console.log('Portfolio cargado exitosamente ✨');