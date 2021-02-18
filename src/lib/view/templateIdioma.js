//import { router } from "./lib/router.js";

export const language = () => {
    const divLanguage = document.createElement("div");
    const viewLanguage = `
        <p>Paramètres linguistiques</p>
        <p>Choisissez votre langue préférée.</p>
        <p>Vous pourrez changer la langue après.</p>
        <p><input type="radio">Français</p>
        <p><input type="radio">Español</p>
        <p><input type="radio">English</p>
        <button id="language-button">Continuer</button>
    `;
    divLanguage.innerHTML = viewLanguage;
    const loginForm = divLanguage.querySelector('#language-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLanguage;
};