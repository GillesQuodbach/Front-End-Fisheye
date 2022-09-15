
        //Lien vers le fichier JSON
        const json_url = "data/photographers.json"

        //Fonction de récupération des données
async function getPhotographers() {

        // Récupération des données du fichier JSON
        const response = await fetch(json_url);
        //Conversion des datas en JSON
        const data = await response.json();
        //Affichage les datas
        console.log(data);


        //Parcourt du tableau de données
        let photographersArray = data.photographers; //Tableau des donnés des photographes
        let length = photographersArray.length; //Longueur du tableau

        //Boucle dans le tableau
            for (let i = 0; i < length; i++){
                //Affichage du tableau de données des photographes
                console.log(photographersArray[i])}
                

        //Retourne le tableau photographers seulement une fois
        return ({
            photographers: [...photographersArray]})
    }

    //Affichage des données des photographes
    async function displayData(photographers) {

        //Selection de la photographer_section de l'index.html (section entière)
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });

        // Affichage de l'id dans l'url
        let cardsLinks = document.querySelectorAll('.cardsLink')
            console.log(cardsLinks);
    
        cardsLinks.forEach((cardsLink)=>
        cardsLink.addEventListener("click", ()=> {
           window.location = `photographer.html?id=${cardsLink.id}`}));
            console.log(window.location);

        //Récupération de l'id dans l'url
        
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        await displayData(photographers);
    }
    init() //RETOURNE UNE PROMESSE EN ATTENTE








