//Mettre le code JavaScript lié à la page photographer.html
//!AFFICHE LA PAGE PHOTOGRAPHER.HTML
//==================================
const json_url = "data/photographers.json"

async function getPhotographers() {
    // Récupération des données du fichier JSON
    const response = await fetch(json_url);
    //Conversion des datas en JSON
    const data = await response.json();
    //Affichage du tableau des photographes
   //Lien vers le fichier JSON
    console.log(data); //Contenu complet du JSON
    const photographersData = data.photographers;
    console.log(photographersData); //Affiche la partie photographers du JSON
    //Récupération de l'ID de la page
    const queryString_url_id = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    const id = urlSearchParams.get("id");
    console.log(id); //Affiche l'id du photographe selectionné (243)
    //Affiche la liste par ID
    const sortedById = {}; 
    for (let i = 0, len = photographersData.length; i < len; i++) { 
        sortedById[photographersData[i].id] = photographersData[i]; }
        console.log(sortedById); 
        console.log(sortedById[id]); //Affiche l'objet avec l'id de la page
let photographersArray = data.photographers; //Tableau des donnés des photographes
let length = photographersArray.length; //Longueur du tableau
//Boucle dans le tableau
    for (let i = 0; i < length; i++){
        //Affichage du tableau de données des photographes
        console.log(photographersArray[i])}
        console.log({photographers:sortedById[id]})
//Retourne le tableau photographers seulement une fois
return ({photographers:sortedById[id]}) //retourne bien l'objet avec l'id correspondant
}
//Affichage des données des photographes
    async function displayData(photographer) {
        //Selection de la photograph_header de l'index.html (section entière)
        const photographersSection = document.querySelector(".photograph-header");
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
    }
async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        await displayData(photographers);
    }
    init(); //RETOURNE UNE PROMESSE EN ATTENTE