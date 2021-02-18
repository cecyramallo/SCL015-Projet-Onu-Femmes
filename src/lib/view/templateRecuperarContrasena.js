//import { router } from "./lib/router.js";

export const passwordReset = () => {
    const divPasswordReset = document.createElement("div");
    const viewPasswordReset = `
        <div class="logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/un.women.png">
        </div>
        <p id="reset-password">Réinitialisez le mot de passe</p>
        <p id="text-reset">Nous vous enverrons un message pour
        </br>
        réinitialiser votre mot de passe</p>
        <p id="choose">Choisissez-en un:</p>
        <div class="placeholder-reset"><input type="tel" id="sms-reset" placeholder="SMS"></div>
        <div class="placeholder-reset"><input type="email" id="mail-reset" placeholder="Adresse e-mail"></div>
        <div><button id="password-button">Continuer</button></div>
    `;
    divPasswordReset.innerHTML = viewPasswordReset;
    const loginForm = divPasswordReset.querySelector('#password-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divPasswordReset;
};