export const north = () => {
    const divNorth = document.createElement("div");
    const viewNorth = `
        <div class="community-arrow">
        <a class="navbar-brand" href="#/community">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Communauté</p>
        </a>
        </div>
        <p>Bienvenue à la zone nord!</p>
        <input type="search">
        <p>Zone Nord</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divNorth.innerHTML = viewNorth;
    return divNorth;
};