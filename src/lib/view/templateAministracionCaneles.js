export const  = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
        <div id="welcome">
        <p class="welcome" >Bienvenue</p>
        <img src="./assets/logo.png" class="logo-bienvenida">
        <button id="enter-button">Commencer</button> </div>
    `;
    divWelcome.innerHTML = viewWelcome;
    const loginForm = divWelcome.querySelector('#enter-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divWelcome;
};