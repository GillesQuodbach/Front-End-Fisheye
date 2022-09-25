const closeLightBoxButton = document.querySelector('.lightbox_close');
const lightBox = document.querySelector('.lightbox');
const lightBoxContainer = document.querySelector('.lightbox_container');
const galleryArticles = document.querySelectorAll('.profil_image');
closeLightBoxButton.addEventListener('click', closeLightBox);




function closeLightBox() {
    lightBox.style.display = 'none';
}
function openLightBox() {
  // Récupération de l'id de l'article au click
  let articleId = this.getAttribute('id');
  console.log(articleId);

  lightBox.style.display = 'block';
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
}