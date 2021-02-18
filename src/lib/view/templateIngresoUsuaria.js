export const logIn = () => {
    const divLogIn = document.createElement("div");
    const viewLogIn = `
        <div class="logos"> 
          <img  id="oportunidad-logo" src="./assets/logo.png"> 
          <img  id="onu-logo"  src="./assets/un.women.png">
        </div>
        <p id="inicio-sesion" font="Bold" >Acceder à votre compte</p>
        <div><input type="email" placeholder="Adresse e-mail" id="e-mail"></div>
        <div><input type="password" placeholder="Mot de passe" id="password"></div>
        <div id="text-reset-password">
        <a class="text-reset-password" href="#/resetpassword">Mot de passe oublié?</a>
        </div>
        <button id="login-button">Connexion</button>
        <p id="not-account"><strong>Pas de compte? <a href="#/signup">Inscrivez-vous</strong></a></p>
    `;
    divLogIn.innerHTML = viewLogIn;
    const loginForm = divLogIn.querySelector('#login-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLogIn;
};
