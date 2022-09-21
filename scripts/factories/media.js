//! FACTORY DE LA GALERIE PHOTOGRAPHER
//!===================================
function mediaFactory(data) {
    const { date, id, image, likes, photographerId, price, title } = data;
    const picture = `assets/images/${image}`;
    //Création de la carte de chaque photographe
    function getImageDOM() {
        // Cards container
        const article = document.createElement( 'section' );
        article.setAttribute("id", id);
        //Card image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.className = "profil_image";
        img.setAttribute("alt", `${title}`);
        // Photographer name
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        h2.className = "name";
        // Photographers living place
        // const livingPlace = document.createElement('p');
        // livingPlace.innerHTML =`${city}, ${country}`;
        // livingPlace.className = "living-place";
        // Photographers tagline
        // const tag = document.createElement('p');
        // tag.textContent = tagline;
        // tag.className = "tagline"
        // Photographers price
        // const cost = document.createElement('p');
        // cost.textContent = `${price}€/jour`;
        // cost.className = "price";
        //Création de la card
        article.appendChild(img);
        article.appendChild(h2);
        // article.appendChild(livingPlace);
        // article.appendChild(tag);
        // article.appendChild(cost);
        return (article); //Retourne les infos dans les cards
    }
    return { date, id, image, likes, photographerId, price, title, getImageDOM}
    }

    //!Récupération des données voulues (Profil des photographes)

async function getMedias() {
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
let mediasArray = data.media;
// console.log(mediasArray);
let length = mediasArray.length;
//!Affiche la partie media ET photographers du JSON

let filteredMedia = mediasArray.filter( function(el) {
return el.photographerId == id;
});
 console.log ({filteredMedia}); //Affiche toutes les images correspondants au photographe
//  return ({filteredMedia}); //Affiche toutes les images correspondants au photographe

for (let i = 0; i < filteredMedia.length; i++) {
return ({media: [...filteredMedia]})
}}

//Affichage des données des photographes
async function displayMedias(medias) {
    //Selection de la photographer_section de l'index.html (section entière)
    const galerySection = document.querySelector("#main");
    medias.forEach((media) => {
        const photographerMedia = mediaFactory(media);
        const mediaCardDOM = photographerMedia.getImageDOM();
        galerySection.appendChild(mediaCardDOM);
        //userCardDOM = block article avec id
    });
}

//!A compléter une fois les fonctions du dessus valide
//?Initialisation des toutes les fonctions
async function init2() {
    // Récupère les datas des photographes
    const { media } = await getMedias();
    // const { media } = await getMedia();
    await displayMedias(media);
    // await displayData(media);
}
init2(); //RETOURNE UNE PROMESSE EN ATTENTE