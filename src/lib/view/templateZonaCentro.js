export const center = () => {
    const divCenter = document.createElement("div");
    const viewCenter = `
        <div class="community-arrow">
        <a class="navbar-brand" href="#/community">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Communauté</p>
        </a>
        </div>
        <p>Bienvenue à la zone centrale!</p>
        <input type="search">
        <p>Zone Centrale</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divCenter.innerHTML = viewCenter;
    return divCenter;
};