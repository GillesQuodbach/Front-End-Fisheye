const json_url3 = "data/photographers.json"

// FONCTION MEDIAFACTORY (recherche des medias via ID)
function mediaFactory(data) {
    const {date, id, image, likes, photographerId, price, title  } = data;
    const picture = `assets/images/${image}`;
    //Création de la carte de chaque photographe
    function getUserCardDOM() {
        // Cards container
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        
        //Création de la card
        // photographHeader.appendChild(img);
        // article.appendChild(cost);
        return (article); //Retourne les infos dans les cards
    }
    return { date, id, image, likes, photographerId, price, title, getUserCardDOM}
    }

    //Mettre le code JavaScript lié à la page photographer.html


async function getMedia() {
    // Récupération des données du fichier JSON
    const response = await fetch(json_url3);
    //Conversion des datas en JSON
    const data = await response.json();
    //Affichage du tableau des photographes
   //Lien vers le fichier JSON
    console.log(data); //Contenu complet du JSON
    const mediaData = data.media;
    console.log(mediaData); //Affiche la partie photographers du JSON
    //Récupération de l'ID de la page
    const queryString_url_id = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    const id = urlSearchParams.get("id");
    console.log(id); //Affiche l'id du photographe selectionné (243)
    //Affiche la liste par ID
    const mediaSortedById = {}; 
    for (let i = 0, len = mediaData.length; i < len; i++) { 
        mediaSortedById[mediaData[i].id] = mediaData[i]; }
        console.log(mediaSortedById); 
        console.log(mediaSortedById[id]); //Affiche l'objet avec l'id de la page
let mediaArray = data.media; //Tableau des donnés des photographes
let length = mediaArray.length; //Longueur du tableau
//Boucle dans le tableau
    for (let i = 0; i < length; i++){
        //Affichage du tableau de données des photographes
        console.log(mediaArray[i])}
        console.log({media:mediaSortedById[id]})
//Retourne le tableau photographers seulement une fois
return ({media:mediaSortedById[id]}) //retourne bien l'objet avec l'id correspondant
}

//Affichage des données des photographes
async function displayData(media) {
    //Selection de la photograph_header de l'index.html (section entière)
    const photographersSection = document.querySelector(".photograph-header");
        const photographerModel = mediaFactory(media);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
}
async function init() {
    // Récupère les datas des photographes
    const  media = await getMedia();
    await displayData(media);
}
init(); //RETOURNE UNE PROMESSE EN ATTENTE
