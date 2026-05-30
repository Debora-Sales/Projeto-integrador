// ======================================
// NAVBAR DINÂMICA AO ROLAR A PÁGINA
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "5px 0";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";

    }

});


// ======================================
// FECHAR MENU MOBILE AUTOMATICAMENTE
// ======================================

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


// ======================================
// ANIMAÇÃO AO APARECER NA TELA
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".module-card, .team-card, #sobre .col-lg-6, #software .col-lg-5, #software .col-lg-7"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});


// ======================================
// SCROLL SUAVE PARA LINKS INTERNOS
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

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


// ======================================
// ANO AUTOMÁTICO NO RODAPÉ (OPCIONAL)
// ======================================

const footer = document.querySelector("footer");

if (footer) {

    const anoAtual = new Date().getFullYear();

    footer.innerHTML =
        `Projeto desenvolvido em sala de aula - Senac | UC-13 © ${anoAtual}`;

}


// ======================================
// FORMULÁRIO - FEEDBACK VISUAL
// ======================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", () => {

        const botao = form.querySelector("button");

        botao.innerHTML = "Enviando...";
        botao.disabled = true;

    });

}


// ======================================
// EFEITO PARALLAX LEVE NO HERO
// ======================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (hero) {

        let offset = window.pageYOffset;

        hero.style.backgroundPositionY =
            offset * 0.4 + "px";

    }

});


// ======================================
// MENSAGEM NO CONSOLE
// ======================================

console.log(`
==========================================
GET - Gestão Empresarial Tech
Sistema: Xô Sujeira
Projeto Integrador SENAC
==========================================
`);