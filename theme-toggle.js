"use strict";
// Chave usada para persistir o tema escolhido entre páginas/recarregamentos.
const THEME_STORAGE_KEY = "jace-theme";
// Define ou remove o atributo data-theme no <html>, do qual as variáveis CSS dependem.
function applyTheme(theme) {
    if (theme === "night") {
        document.documentElement.setAttribute("data-theme", "night");
    }
    else {
        document.documentElement.removeAttribute("data-theme");
    }
}
const toggleButton = document.getElementById("theme-toggle");
// Ao clicar, alterna entre dia/noite, aplica na hora e guarda a escolha para a próxima vez.
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", () => {
    const isNight = document.documentElement.getAttribute("data-theme") === "night";
    const nextTheme = isNight ? "day" : "night";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
});
