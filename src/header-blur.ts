"use strict";

// O cabecalho comeca transparente sobre a foto da hero (fixa) e ganha o fundo escuro/embacado
// aos poucos conforme o usuario rola, ficando 100% embacado exatamente quando o painel de
// conteudo (que desliza por cima da hero) alcanca o topo da tela — a altura da hero-image
// (50vh no desktop, 38vh no mobile, via CSS) e lida em tempo real, entao a mesma logica
// funciona nos dois casos sem precisar duplicar breakpoints aqui.
const headerScrollContainer = document.querySelector<HTMLElement>(".container.scrollable");
const heroImage = document.querySelector<HTMLElement>(".hero.page-hero .hero-image");

if (headerScrollContainer && heroImage) {
    let thresholdPx = heroImage.getBoundingClientRect().height;

    const updateThreshold = () => {
        thresholdPx = heroImage.getBoundingClientRect().height;
    };

    const updateBlur = () => {
        const progress = thresholdPx > 0 ? Math.min(1, headerScrollContainer.scrollTop / thresholdPx) : 1;
        document.documentElement.style.setProperty("--header-blur-progress", progress.toString());
    };

    // requestAnimationFrame evita recalcular a cada pixel rolado (scroll dispara muitos eventos
    // seguidos, principalmente em touch/trackpad), suavizando a transicao sem travar no mobile.
    let ticking = false;
    headerScrollContainer.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    updateBlur();
                    ticking = false;
                });
            }
        },
        { passive: true }
    );

    // A altura em vh da hero muda com a orientacao/redimensionamento da tela (ex: girar o celular).
    window.addEventListener("resize", () => {
        updateThreshold();
        updateBlur();
    });

    updateBlur();
}
