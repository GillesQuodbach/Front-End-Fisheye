//Mettre le code JavaScript lié à la page photographer.html

// Récupération de l'id de l'url de la page du photographes
const urlIdValues = window.location.search;
const urlParams = new URLSearchParams(urlIdValues);
const urlId = urlParams.get('id');

console.log(urlId);

