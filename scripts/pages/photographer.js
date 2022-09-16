//Mettre le code JavaScript lié à la page photographer.html
// Récupération de l'id de l'url de la page du photographes

//RECUPERATION/TRAITEMENT DES DONNEES JSON
async function getPhotographers() {
    const json_url = "data/photographers.json"
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
    
    let selectedPhotographer = {};
    for (let i = 0, len = photographersData.length; i < len; i++) {
        selectedPhotographer[photographersData[i].id] = photographersData[i];
    }
    console.log(selectedPhotographer[id]);
    return selectedPhotographer[id];
}
getPhotographers();



