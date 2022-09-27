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
    const nameContainer = document.createElement("div");
    const name = document.createElement("h2");
    name.innerHTML = `${photographerName}`;
    modalHeader.appendChild(nameContainer);
    name.className="photographer-name";
    nameContainer.append(name);
    // modalHeader.insertBefore(name, closeModalCross);

    //? Focus 1er inputs
    function getFocus() {
      document.getElementById("firstName").focus();
    }
    getFocus();
}

//? FERMETURE FORMULAIRE
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Validation et récupération infos formulaire
const firstName = document.getElementById("#firstName")
const lastName = document.getElementById("#lastName")
const email = document.getElementById("#email")
const message = document.getElementById("#contact-message")


//Régexp de contrôle du mail
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate(e) {
  e.preventDefault();
  console.log(firstName.value) 
  console.log(lastName.value) 
  console.log(email.value) 
  console.log(message.value)
//   return true;
}
