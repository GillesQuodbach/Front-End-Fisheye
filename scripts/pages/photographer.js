//! RECUP DONNEES PROFIL PHOTOGRAPHE
//!=================================================
const json_url = "data/photographers.json";

//Récupération des données voulues (Profil des photographes)
async function getPhotographersProfils() {
  //Récupération de l'ID de la page
  const queryString_url_id = window.location.search;
  const urlSearchParams = new URLSearchParams(queryString_url_id);
  const id = urlSearchParams.get("id");
  //Affiche l'id du photographe selectionné (243)

  //Récupération des données du fichier JSON
  const response = await fetch(json_url);
  //Conversion des datas en JSON
  const data = await response.json();
  //Affichage du tableau des photographes
  //Lien vers le fichier JSON
  console.log(data); //Contenu complet du JSON
  const photographersData = data.photographers;

  //Affiche la liste par ID
  const sortedById = {};
  for (let i = 0, len = photographersData.length; i < len; i++) {
    sortedById[photographersData[i].id] = photographersData[i];
  }

  //retourne l'objet (le photographe) avec l'id correspondant au photographe//
  return { photographers: sortedById[id] };
}
//Affichage/positionnement de l'article
//Affichage des données des photographes
async function displayPhotographersProfils(photographer) {
  //Selection de la photograph_header de l'index.html (section entière)
  // const profilePhotograph = document.querySelector(".photograph-header");
  const photographerModel = photographerProfilFactory(photographer);
  const userCardDOM = photographerModel.getProfilCardDOM();
  // profilePhotograph.appendChild(userCardDOM);
}
//?Initialisation des toutes les fonctions
async function initProfils() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographersProfils();
  // const { media } = await getMedia();
  await displayPhotographersProfils(photographers);
  // await displayData(media);
}
initProfils(); //RETOURNE UNE PROMESSE EN ATTENTE

//!====================================================
//!RECUP DONNEES GALLERY
//!====================================================

//? BOUTON POPULARITE

// function openSortedMenu() {
//   document.querySelector("#dropdown").classList.toggle("active");
// }
//! Tri par date
// document
//   .querySelector(".sorted_by_date")
//   .addEventListener("click", function () {
//     sortedByIdDate();
//     console.log("Sorted by Date");
//     // console.log(document.querySelector("#photograph_gallery"));
//   });
// //! Tri par likes
// document.querySelector("#menu").addEventListener("click", function () {
//   openSortedMenu();
//   sortedByIdDate();
//   console.log("Sorted by Likes");
//   // console.log(document.querySelector("#photograph_gallery"));
// });
// //! Tri par title
// document
//   .querySelector(".sorted_by_title")
//   .addEventListener("click", function () {
//     openSortedMenu();
//     sortedByIdTitle();
//     console.log("Sorted by Likes");
//     // console.log(document.querySelector("#photograph_gallery"));
//   });
async function getGalleryItems() {
  //Récupération de l'ID de la page
  const queryString_url_id = window.location.search;
  const urlSearchParams = new URLSearchParams(queryString_url_id);
  const id = urlSearchParams.get("id");
  const response = await fetch(json_url);
  const data = await response.json();
  const mediasArray = data.media;
  let filteredMedia = mediasArray.filter(function (el) {
    return el.photographerId == id;
  }); //! ICI TABLEAU FILTRE DU PHOTOGRAPHE
  let newFilteredMedia = filteredMedia;
  console.log(newFilteredMedia);
  // Filtered by likes
  //============================================
  filteredMedia.sort(function compare(a, b) {
    if (a.likes < b.likes) return -1;
    if (a.likes > b.likes) return 1;
    return 0;
  });
  //============================================
  // Filtered by title
  //============================================
  // filteredMedia.sort(function compare(a, b) {
  //   if (a.title < b.title) return -1;
  //   if (a.title > b.title) return 1;
  //   return 0;
  // });
  //============================================
  for (let i = 0; i < filteredMedia.length; i++) {
    return { media: [...newFilteredMedia] };
  }
}
//Affichage des données des photographes
async function displayGallery(medias) {
  console.log(medias);
  const gallerySection = document.querySelector("#photograph_gallery");
  gallerySection.innerHTML = "";
  medias.forEach((media) => {
    const photographerGallery = galleryFactory(media);
    const galleryCardDOM = photographerGallery.getImageDOM();
    gallerySection.appendChild(galleryCardDOM);
  });
}
async function initGallery() {
  const { media } = await getGalleryItems();
  await displayGallery(media);
  console.log(media);
}
initGallery();

function sortedByIdDate() {
  let removeOldGallery = document.querySelectorAll(".gallery_cards");
  let galleryContainer = document.querySelector("#photograph_gallery");

  // console.log(removeOldGallery);
  async function getGalleryItems() {
    //Récupération de l'ID de la page
    const queryString_url_id = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    const id = urlSearchParams.get("id");
    const response = await fetch(json_url);
    const data = await response.json();
    const mediasArray = data.media;
    let filteredMedia = mediasArray.filter(function (el) {
      return el.photographerId == id;
    }); //! ICI TABLEAU FILTRE DU PHOTOGRAPHE
    let newFilteredMedia = filteredMedia;
    console.log(newFilteredMedia);
    // Filtered by likes
    //============================================
    filteredMedia.sort(function compare(a, b) {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
    //============================================
    // Filtered by title
    //============================================
    // filteredMedia.sort(function compare(a, b) {
    //   if (a.title < b.title) return -1;
    //   if (a.title > b.title) return 1;
    //   return 0;
    // });
    //============================================
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] };
    }
  }
  //Affichage des données des photographes
  async function displayGallery(medias) {
    console.log(medias);
    const gallerySection = document.querySelector("#photograph_gallery");
    gallerySection.innerHTML = "";
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media);
      const galleryCardDOM = photographerGallery.getImageDOM();
      gallerySection.appendChild(galleryCardDOM);
    });
  }
  async function initGallery() {
    const { media } = await getGalleryItems();
    await displayGallery(media);
    console.log(media);
  }
  initGallery();
}

function sortedByIdTitle() {
  let removeOldGallery = document.querySelectorAll(".gallery_cards");
  let galleryContainer = document.querySelector("#photograph_gallery");

  // console.log(removeOldGallery);
  async function getGalleryItems() {
    //Récupération de l'ID de la page
    const queryString_url_id = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    const id = urlSearchParams.get("id");
    const response = await fetch(json_url);
    const data = await response.json();
    const mediasArray = data.media;
    let filteredMedia = mediasArray.filter(function (el) {
      return el.photographerId == id;
    }); //! ICI TABLEAU FILTRE DU PHOTOGRAPHE
    let newFilteredMedia = filteredMedia;
    console.log(newFilteredMedia);
    // Filtered by likes
    //============================================
    // filteredMedia.sort(function compare(a, b) {
    //   if (a.date < b.date) return -1;
    //   if (a.date > b.date) return 1;
    //   return 0;
    // });
    // ============================================
    // Filtered by title
    // ============================================
    filteredMedia.sort(function compare(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    // ============================================
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] };
    }
  }
  //Affichage des données des photographes
  async function displayGallery(medias) {
    console.log(medias);
    const gallerySection = document.querySelector("#photograph_gallery");
    gallerySection.innerHTML = "";
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media);
      const galleryCardDOM = photographerGallery.getImageDOM();
      gallerySection.appendChild(galleryCardDOM);
    });
  }
  async function initGallery() {
    const { media } = await getGalleryItems();
    await displayGallery(media);
    console.log(media);
  }
  initGallery();
}

function sortedByIdLikes() {
  let removeOldGallery = document.querySelectorAll(".gallery_cards");
  let galleryContainer = document.querySelector("#photograph_gallery");

  // console.log(removeOldGallery);
  async function getGalleryItems() {
    //Récupération de l'ID de la page
    const queryString_url_id = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    const id = urlSearchParams.get("id");
    const response = await fetch(json_url);
    const data = await response.json();
    const mediasArray = data.media;
    let filteredMedia = mediasArray.filter(function (el) {
      return el.photographerId == id;
    }); //! ICI TABLEAU FILTRE DU PHOTOGRAPHE
    let newFilteredMedia = filteredMedia;
    console.log(newFilteredMedia);
    // Filtered by likes
    //============================================
    // filteredMedia.sort(function compare(a, b) {
    //   if (a.date < b.date) return -1;
    //   if (a.date > b.date) return 1;
    //   return 0;
    // });
    // ============================================
    // Filtered by title
    // ============================================
    filteredMedia.sort(function compare(a, b) {
      if (a.likes < b.likes) return -1;
      if (a.likes > b.likes) return 1;
      return 0;
    });
    // ============================================
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] };
    }
  }
  //Affichage des données des photographes
  async function displayGallery(medias) {
    console.log(medias);
    const gallerySection = document.querySelector("#photograph_gallery");
    gallerySection.innerHTML = "";
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media);
      const galleryCardDOM = photographerGallery.getImageDOM();
      gallerySection.appendChild(galleryCardDOM);
    });
  }
  async function initGallery() {
    const { media } = await getGalleryItems();
    await displayGallery(media);
    console.log(media);
  }
  initGallery();
}
