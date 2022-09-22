


async function displayModal() {
    
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
        const queryString_url_id = window.location.search;
        const urlSearchParams = new URLSearchParams(queryString_url_id);
        const id = urlSearchParams.get("id");
        console.log(id); //Affiche l'id du photographe selectionné (243)
    
        //!Récupération des données du fichier JSON
        const response = await fetch(json_url);
        //Conversion des datas en JSON
        const data = await response.json();
        //Affichage du tableau des photographes
       //Lien vers le fichier JSON
        console.log(data); //!Contenu complet du JSON
        const photographersData = data.photographers;
        console.log(photographersData); //!Affiche la partie photographers du JSON
    
        //Affiche la liste par ID
        const sortedById = {}; 
        for (let i = 0, len = photographersData.length; i < len; i++) { 
            sortedById[photographersData[i].id] = photographersData[i]; }
            console.log({photographers:sortedById[id]})
    //!retourne l'objet (le photographe) avec l'id correspondant au photographe//

    const photographerName = sortedById[id].name;
    console.log(photographerName);

    // MISE EN FORMe DU DOM
    const modalHeader = document.querySelector(".modal-header");
    const modalTitle = document.querySelector(".modal-title");
    const closeModalCross = document.querySelector(".close-modal-cross");
    const name = document.createElement("p");
    name.innerHTML = `${photographerName}`;
    name.className="photographer-name";
    modalHeader.append(name);
    modalHeader.insertBefore(name, closeModalCross);
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
