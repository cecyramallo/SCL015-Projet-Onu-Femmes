export const community = () => {
    const divCommunity = document.createElement("div");
    const viewCommunity = `
				<div class="community-arrow">
				<a class="navbar-brand" href="#/channels">
				<img src="./assets/left-arrow.png" id="icon-arrow">
				<p id="text-community">Communauté</p>
				</a>
				
				</div>
				<p id="text-zone">Sélectionnez une zone et communiquez avec plus de femmes comme vous!</p>
				<p><a href="#/north" class="Zones">Zone Nord</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_gladysMuñoz.jpg">
						<img class="user" src="./assets/user_saraGutierrez.jpg">
						</div>
				</div>
				<p><a href="#/north" class="see-all"><strong>Voir toutes</strong></a></p>
				<p><a href="#/center" class="Zones">Zone Centrale</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_catalinaJara.jpg">
						<img class="user" src="./assets/user_natalyGilbert.jpg">
						</div>
				</div>
				<p><a href="#/center" class="see-all"><strong>Voir toutes</strong></a></p>
				<p><a href="#/south" class="Zones">Zone Sud</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_samantaRamirez.jpg">
						<img class="user" src="./assets/user_paulaPerez.jpg">
						</div>
				</div>
				<p><a href="#/south" class="see-all"><strong>Voir toutes</strong></a></p>
    `;
    divCommunity.innerHTML = viewCommunity;
    return divCommunity;
};