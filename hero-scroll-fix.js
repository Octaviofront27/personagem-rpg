"use strict";
// Os navegadores nao repassam a rolagem do mouse para o container quando o cursor esta
// sobre um elemento "position: fixed" (a hero). Aqui repassamos manualmente a rolagem
// pro container correto sempre que o usuario rolar com o mouse em cima da hero fixa.
const scrollContainer = document.querySelector(".container.scrollable");
const heroElements = document.querySelectorAll(".hero");
if (scrollContainer) {
    heroElements.forEach((hero) => {
        hero.addEventListener("wheel", (event) => {
            scrollContainer.scrollTop += event.deltaY;
            event.preventDefault();
        }, { passive: false });
    });
}
