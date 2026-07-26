"use strict";
// Cards de conteudo (.item-package) surgem com um fade-in sutil conforme entram na tela ao rolar,
// usando IntersectionObserver (mais leve que recalcular a cada evento de scroll). O root precisa
// ser o .container.scrollable, ja que o documento em si nao rola (body tem overflow:hidden).
const revealTargets = document.querySelectorAll(".item-package");
const revealScrollContainer = document.querySelector(".container.scrollable");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (revealTargets.length && revealScrollContainer && !prefersReducedMotion && "IntersectionObserver" in window) {
    revealTargets.forEach((el) => el.classList.add("reveal-pending"));
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { root: revealScrollContainer, threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    revealTargets.forEach((el) => revealObserver.observe(el));
}
