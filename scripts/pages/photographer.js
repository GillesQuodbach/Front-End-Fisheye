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
async function getGalleryItems() {
  //Récupération de l'ID de la page
  const queryString_url_id = window.location.search;
  const urlSearchParams = new URLSearchParams(queryString_url_id);
  const id = urlSearchParams.get("id");

  // Récupération des données du fichier JSON
  const response = await fetch(json_url);
  //Conversion des datas en JSON
  const data = await response.json();
  //Affichage du tableau des photographes
  //Lien vers le fichier JSON
  // console.log(data); //Contenu complet du JSON
  let mediasArray = data.media;
  // console.log(mediasArray);
  //Affiche la partie media ET photographers du JSON
  filteredMedia = mediasArray.filter(function (el) {
    return el.photographerId == id;
  });
  console.log(filteredMedia);
  let currentArray = filteredMedia;
  // TRI DE LA GALLERIE
  //? BOUTON POPULARITE
  document.querySelector("#menu").addEventListener("click", function () {
    // openSortedMenu();

    sortedByLikes();
    console.log("Sorted by Likes");
  });
  function openSortedMenu() {
    document.querySelector("#dropdown").classList.toggle("active");
  }
  //? BOUTON DATE
  document
    .querySelector(".sorted_by_date")
    .addEventListener("click", function () {
      console.log("Sorted by date");
    });
  //? BOUTON DATE
  document
    .querySelector(".sorted_by_title")
    .addEventListener("click", function () {
      console.log("Sorted by title");
    });
  // !Tri par popularités (likes) ==> OK
  function sortedByLikes() {
    filteredMedia.sort(function compare(a, b) {
      if (a.likes < b.likes) return -1;
      if (a.likes > b.likes) return 1;
      return 0;
    });
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...filteredMedia] };
    }
  }
  // return filteredMedia;
  // }
  //! Tri par date ==>
  function sortedByDates() {
    filteredMedia.sort(function compare(a, b) {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...filteredMedia] };
    }
  }
  //! Tri par ordre alphabetique (title) ==> OK
  function sortedByTitles() {
    filteredMedia.sort(function compare(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...filteredMedia] };
    }
    return { media: [...filteredMedia] };
  }
  //Affiche toutes les images correspondants au photographe

  console.log(filteredMedia); //Affiche toutes les images correspondants au photographe

  //! FONCTION DE TRI ICI ??

  // for (let i = 0; i < filteredMedia.length; i++) {
  return { media: [...filteredMedia] };
  // }
  //?PREVIOUS/NEXT LIGHTBOX
}

//Affichage des données des photographes
async function displayGallery(medias) {
  //Selection de la photographer_section de l'index.html (section entière)
  const gallerySection = document.querySelector("#photograph_gallery");
  medias.forEach((media) => {
    const photographerGallery = galleryFactory(media);
    const galleryCardDOM = photographerGallery.getImageDOM();
    gallerySection.appendChild(galleryCardDOM);
    //userCardDOM = block article avec id
  });
}
//A compléter une fois les fonctions du dessus valide
//?Initialisation des toutes les fonctions
async function initGallery() {
  // Récupère les datas des photographes
  const { media } = await getGalleryItems();
  // const { media } = await getMedia();
  await displayGallery(media);
  // await displayData(media);
}
initGallery(); //RETOURNE UNE PROMESSE EN ATTENTE

// !TRI DE LA GALLERIE
// document.querySelector("#menu").addEventListener("click", function () {
//   openSortedMenu();
//   sortedByLikes();
// });

// function openSortedMenu() {
//   document.querySelector("#dropdown").classList.toggle("active");
// }}
