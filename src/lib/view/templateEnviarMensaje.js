//import { router } from "./lib/router.js";

export const message = () => {
    const divMessage = document.createElement("div");
    const viewMessage = `
        <p>Nouveau Message</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button id="send-button">Envoyer</button>
    `;
    divMessage.innerHTML = viewMessage;
    const loginForm = divMessage.querySelector('#send-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/send';
    })
    return divMessage;
};