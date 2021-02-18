export const inbox = () => {
    const divInbox = document.createElement("div");
    const viewInbox = `
        <p>Messages</p>
        <a href="#/send"><input type="image" id="Logo-TuOportunidad"></a>
        <p><button id="group-button">+</button>Créez un nouveau groupe</p>
    `;
    divInbox.innerHTML = viewInbox;
    const loginForm = divInbox.querySelector('#group-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/group';
    })
    return divInbox;
};