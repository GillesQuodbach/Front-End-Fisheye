//Mettre le code JavaScript lié à la page photographer.html
//!AFFICHE LA PAGE PHOTOGRAPHER.HTML
//==================================
const json_url = "data/photographers.json"

//!Récupération des données voulues (Profil des photographes)

async function getPhotographers() {
    //!Récupération de l'ID de la page
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
return ({photographers:sortedById[id]}) 
}

//!Affichage/positionnement de l'article
//Affichage des données des photographes
    async function displayData(photographer) {
        //Selection de la photograph_header de l'index.html (section entière)
        const photographersSection = document.querySelector(".photograph-header");
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
    }


//!Récupération des données voulues (Profil des photographes)

async function getMedia() {

        //Récupération de l'ID de la page
        const queryString_url_id = window.location.search;
        const urlSearchParams = new URLSearchParams(queryString_url_id);
        const id = urlSearchParams.get("id");
        console.log(id); //Affiche l'id du photographe selectionné (243)
    // Récupération des données du fichier JSON
    const response = await fetch(json_url);
    //Conversion des datas en JSON
    const data = await response.json();
    //Affichage du tableau des photographes
   //Lien vers le fichier JSON
    // console.log(data); //Contenu complet du JSON
    const allData = data;
    console.log(allData); //!Affiche la partie media ET photographers du JSON
let filteredMedia = {};
filteredMedia = allData.media.filter( function(el) {
    return el.photographerId == id;
});
console.log({media : filteredMedia}); //Affiche toutes les images correspondants au photographe

}


//!A compléter une fois les fonctions du dessus valide
//?Initialisation des toutes les fonctions
async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        // const { media } = await getMedia();
        await displayData(photographers);
        // await displayData(media);
    }
    init(); //RETOURNE UNE PROMESSE EN ATTENTE

    getMedia();