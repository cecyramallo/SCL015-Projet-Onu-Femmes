export const tutorial = () => {
    const divTutorial = document.createElement("div");
    const viewTutorial = `
        <h2>TUTORIAL</h2>
        <button>START</button>
    `;
    divTutorial.innerHTML = viewTutorial;
    return divTutorial;
};
