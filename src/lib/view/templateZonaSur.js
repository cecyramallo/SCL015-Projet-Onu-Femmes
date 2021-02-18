export const south = () => {
    const divSouth = document.createElement("div");
    const viewSouth = `
        <div class="community-arrow">
        <a class="navbar-brand" href="#/community">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Community</p>
        </a>
        </div>
        <p>Bienvenue à la zone sud!</p>
        <input type="search">
        <p>Zone Sud</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divSouth.innerHTML = viewSouth;
    return divSouth;
};