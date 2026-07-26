"use strict";

// Barra fina no topo da tela que preenche conforme o usuario avanca na leitura da pagina,
// acompanhando a rolagem do .container.scrollable (o mesmo container que o header-blur.js observa).
const progressScrollContainer = document.querySelector<HTMLElement>(".container.scrollable");
const progressBar = document.querySelector<HTMLElement>(".scroll-progress");

if (progressScrollContainer && progressBar) {
    const updateProgress = () => {
        const scrollable = progressScrollContainer.scrollHeight - progressScrollContainer.clientHeight;
        const percent = scrollable > 0 ? (progressScrollContainer.scrollTop / scrollable) * 100 : 0;
        progressBar.style.width = `${percent}%`;
    };

    let progressTicking = false;
    progressScrollContainer.addEventListener(
        "scroll",
        () => {
            if (!progressTicking) {
                progressTicking = true;
                requestAnimationFrame(() => {
                    updateProgress();
                    progressTicking = false;
                });
            }
        },
        { passive: true }
    );

    window.addEventListener("resize", updateProgress);
    updateProgress();
}
