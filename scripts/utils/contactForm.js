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
      document.getElementById("firstname").focus();
    }
    getFocus();
}

//? FERMETURE FORMULAIRE
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Validation et récupération infos formulaire
const firstName = document.querySelector("#firstname")
const lastName = document.querySelector("#lastname")
const email = document.querySelector("#email")
const message = document.querySelector("#contact-message")
const myForm = document.querySelector("#contact_form")

//Messages erreur
const firstNameErrorMsg = document.querySelector(".firstname-error");
const lastNameErrorMsg = document.querySelector(".lastname-error");
const emailErrorMsg = document.querySelector(".email-error");
const msgErrorMsg = document.querySelector(".contact-message-error");

//Régexp de contrôle du mail
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

myForm.addEventListener("submit", function(e) {
  e.preventDefault();
  if( validate(myForm) === true ) {
    console.log(`
    Prénom: ${firstName.value}
    Nom: ${lastName.value}
    Email: ${email.value}
    Message: ${message.value}
    `)
  }
}
)

function validate() {
//Validation prénom
if (firstName.value === "") {
  firstNameErrorMsg.innerHTML = "Merci d'entrer un prénom valide.";
}
if (lastName.value === "") {
  lastNameErrorMsg.innerHTML = "Merci d'entrer un nom valide.";
}
let testMail = emailRegExp.test(email.value);
if (testMail === false || email.value === "") {
  emailErrorMsg.innerHTML = "Merci d'entrer un email valide.";
} 
if (message.value === "") {
  msgErrorMsg.innerHTML = "Vous avez oublié votre message...";
}
if (!firstName.value ||
      !lastName.value ||
      !testMail ||
      !emailErrorMsg)
      {
  return false;
}
  return true;
};
