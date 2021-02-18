export const editProfile = () => {
    const divEditProfile = document.createElement("div");
    const viewEditProfile = `
    
        <div class="arrow-img-profile"> 
        <img src="./assets/left-arrow.png" id="arrow-profile">
        <p id="edit-profile">Modifier votre profil</p>
        </div>
        <img src="./assets/profile-img1.png" id="img-profile">
        <input class="ph-edit-profile" type="text" placeholder="Prénom">
        <input class="ph-edit-profile" type="text" placeholder="Nom">
        <input class="ph-edit-profile" type="text" placeholder="Qu'est-ce que je fais?">
        <select class="select-edit-profile"  name="Regions">Zones
        <option class="select-edit-profile" value="0" selected disabled>Zones</option>
        <optgroup label="Zone Nord"></optgroup>
        <option value="Ant">Antofagasta</option>
        <optgroup label="Zone Centrale"></optgroup>
        <option value="Met">Metropolitana</option>
        <optgroup label="Zone Sud"></optgroup>
        <option value="Ara">Araucanía</option>
        </select>
        <input class="ph-edit-profile" type="text" placeholder="Ville">
        <button id="save-changes">Enregistrer</button>
    `;
    divEditProfile.innerHTML = viewEditProfile;
    const loginForm = divEditProfile.querySelector('#save-changes');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divEditProfile;
};