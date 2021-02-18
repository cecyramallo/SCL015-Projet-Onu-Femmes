export const tutorial = () => {
    const divTutorial = document.createElement("div");
    const viewTutorial = `
        <h2>TUTORIEL</h2>
        <button>COMMENCER</button>
    `;
    divTutorial.innerHTML = viewTutorial;
    return divTutorial;
};
