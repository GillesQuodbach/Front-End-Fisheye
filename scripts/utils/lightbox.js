const closeLightBoxButton = document.querySelector('.lightbox_close');
const lightBox = document.querySelector('.lightbox');
const galleryArticles = document.querySelectorAll('.profil_image');
closeLightBoxButton.addEventListener('click', closeLightBox);
const lightBoxContainer = document.querySelector('.lightbox_container');
 let currentPhotographMedia = {};
// Cards cliquable après le chargement de la page
window.onload = () => {
  const closeLightBoxButton = document.querySelector('.lightbox_close');
  const galleryArticles = document.querySelectorAll('.gallery_cards');
  closeLightBoxButton.addEventListener('click', closeLightBox);
  console.log(galleryArticles);
  
  for (let galleryArticle of galleryArticles) {
    galleryArticle.addEventListener('click', openLightBox);
  }
}

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
const allData = data;
console.log(allData);//!Affiche la partie media ET photographers du 
let allMediaData = {}
allMediaData = allData.media
console.log(articleId);
console.log({allMediaData});//
let mediaFoundById = (allMediaData.find(el => el.id == articleId));
console.log(mediaFoundById);

let currentPhotographerId = mediaFoundById.photographerId;
console.log(currentPhotographerId);

let currentPhotographMedia = allMediaData.filter(el => el.photographerId == currentPhotographerId);
console.log(currentPhotographMedia);

const lightboxNextButton = document.querySelector('.lightbox_next');
const lightboxPreviousButton = document.querySelector('.lightbox_previous');

lightboxNextButton.addEventListener('click', function next() {
  //Récupération de l'index de la photo actuelle
  console.log('lightboxNextButton clicked');
  let currentPictureIndex = currentPhotographMedia.findIndex(el => el.id == articleId);
  //Index de la photo
  // currentPictureIndex
  console.log(currentPictureIndex); 
  //ID de la photo
  // console.log(articleId); 
  //Longueur liste complete des photos (et video)
  let currentPhotoListLength = currentPhotographMedia.length;
  // console.log(currentPhotoListLength); 

  currentPictureIndex = currentPictureIndex + 1;
  console.log(currentPictureIndex); 
  
  function nextIndex() {
    currentPictureIndex = currentPictureIndex += 1;
  }
  
  //  console.log(IndexOfCurrentPhotographMedia);
});
// lightboxPreviousButton.addEventListener('click', previous());
// function next() {
// let IndexOfCurrentPhotographMedia = currentPhotographMedia.findIndex(el => el.id == articleId);
//   console.log(IndexOfCurrentPhotographMedia);
//   IndexOfCurrentPhotographMedia == currentPhotographMedia.length + 1
// }

// Apparition de la lightbox
lightBox.style.display = 'block';
    await displayLightbox(mediaFoundById);
    // await displayData(media);
}

  async function displayLightbox(lightboxmedia) {
    //Selection de la photograph_header de l'index.html (section entière)
        const lightboxMedia = lightboxFactory(lightboxmedia);
        const lightboxDOM = lightboxMedia.getLightboxDOM();
        
}