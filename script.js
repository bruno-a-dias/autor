// Menu mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Smooth scrolling para links internos
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target); // Parar de observar depois de animar
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".section-title, .hero-text, .book-text, .author-text, .buy-options, .social-links, .work-item");
    
    animatedElements.forEach(el => {
        el.classList.add("hidden-element"); // Adiciona classe para esconder inicialmente
        observer.observe(el);
    });
});

// Navbar transparente/opaca baseada no scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Efeito parallax sutil no hero
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const rate = scrolled * -0.3; // Ajustado para um efeito mais sutil
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Adicionar classe active ao link da navegação baseado na seção atual
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


