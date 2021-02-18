export const welcome = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
        <p>XXXX</p>
        <button>COMMENCER</button>
    `;
    divWelcome.innerHTML = viewWelcome;
    return divWelcome;
};