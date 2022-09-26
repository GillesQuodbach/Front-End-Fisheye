const closeLightBoxButton = document.querySelector('.lightbox_close');
const lightBox = document.querySelector('.lightbox');
const galleryArticles = document.querySelectorAll('.profil_image');
closeLightBoxButton.addEventListener('click', closeLightBox);
const lightBoxContainer = document.querySelector('.lightbox_container');

// Fermeture lightbox
function closeLightBox() {
    lightBox.style.display = 'none';
}
// Ouverture lightbox
async function openLightBox() {
  // Récupération de l'id de l'article au click
  let articleId = this.getAttribute('id');
  console.log(articleId);
  // !injecter image avec id
// Récupération des données du fichier JSON
const response = await fetch(json_url);
//Conversion des datas en JSON
const data = await response.json();
//Affichage du tableau des photographes
//Lien vers le fichier JSON
// console.log(data); //Contenu complet du JSON
const allData = data;
console.log(allData);//!Affiche la partie media ET photographers du 
let mediaData = []
mediaData = allData.media
console.log(articleId);
console.log({mediaData});//
let mediaFoundById = (mediaData.find(el => el.id == articleId));
console.log(mediaFoundById);

lightBox.style.display = 'block';
return mediaFoundById
  // return articleId;
}


window.onload = () => {
  const closeLightBoxButton = document.querySelector('.lightbox_close');
  const lightBox = document.querySelector('.lightbox');
  const lightBoxContainer = document.querySelector('.lightbox_container');
  const galleryArticles = document.querySelectorAll('.gallery_cards');
  closeLightBoxButton.addEventListener('click', closeLightBox);
  console.log(galleryArticles);
  
  for (let galleryArticle of galleryArticles) {
    galleryArticle.addEventListener('click', openLightBox);

  }


  getMedia();
}