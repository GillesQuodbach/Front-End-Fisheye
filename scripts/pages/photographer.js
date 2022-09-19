//Mettre le code JavaScript lié à la page photographer.html
function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    //Création de la carte de chaque photographe
    function getUserCardDOM() {
        // Cards container
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        //Card image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.className = "detail_profile_image";
        img.setAttribute("alt", `Photo de profil de ${name}`);
        // Photographer name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.className = "name";
        // Photographers living place
        const livingPlace = document.createElement('p');
        livingPlace.innerHTML =`${city}, ${country}`;
        livingPlace.className = "living-place";
        // Photographers tagline
        const tag = document.createElement('p');
        tag.textContent = tagline;
        tag.className = "tagline"
        // Photographers price
        const cost = document.createElement('p');
        cost.textContent = `${price}€/jour`;
        cost.className = "price";
        //Création de la card
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(livingPlace);
        article.appendChild(tag);
        article.appendChild(cost);
        return (article); //Retourne les infos dans les cards
    }
    return { name, picture, id, getUserCardDOM}
    }



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