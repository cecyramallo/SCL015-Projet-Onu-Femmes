//import { router } from "./lib/router.js";

export const language = () => {
    const divLanguage = document.createElement("div");
    const viewLanguage = `
        <p id="language-settings">Paramètres linguistiques</p>
        <p id="choose-language">Choisissez votre langue préférée.</p>
        <p id="choose-language-again">Vous pourrez la changer après.</p>
        <p class="input-language"><input type="radio">Français</p>
        <p class="input-language"><input type="radio">Español</p>
        <p class="input-language"><input type="radio">English</p>
        <button id="language-button">Continuer</button>
    `;
    divLanguage.innerHTML = viewLanguage;
    const loginForm = divLanguage.querySelector('#language-button');
    loginForm.addEventListener('click', () => {
      window.location.href = 'https://cecyramallo.github.io/SCL015-Project-UN-Women/src/#/channels';
    })
    return divLanguage;
};
//Français manda a English version