//! RECUPERATION DONNEES POUR LE PROFILE DES PHOTOGRAPHES
//! HEADER DE LA GALLERIE

//! =================================================
const jsonUrl = 'data/photographers.json'
// Récupération des données voulues (Profil des photographes)
async function getPhotographersProfils () {
  // Récupération de l'ID de la page

  const queryStringUrlId = window.location.search
  const urlSearchParams = new URLSearchParams(queryStringUrlId)
  const id = urlSearchParams.get('id')
  const response = await fetch(jsonUrl)
  const data = await response.json()
  const photographersData = data.photographers
  const sortedById = {}
  for (let i = 0, len = photographersData.length; i < len; i++) {
    sortedById[photographersData[i].id] = photographersData[i]
  }
  return { photographers: sortedById[id] }
}
async function displayPhotographersProfils (photographer) {
  const photographerModel = photographerProfilFactory(photographer)
  photographerModel.getProfilCardDOM()
}
async function initProfils () {
  const { photographers } = await getPhotographersProfils()
  await displayPhotographersProfils(photographers)
   const photographProfilePhoto = document.querySelector('.photograph-profile-photo')
   photographProfilePhoto.addEventListener('focusin', function() {
       dropdownMenu.classList.remove('show')
       dropdownToggle.classList.remove('open')
       console.log('Marche Sortie')
   })
}
initProfils()


//  ! ====================================================
//  ! GESTION DE LA GALERIE DE CHAQUE PHOTOGRAPHE
//  ! ====================================================


async function getGalleryItems () {
  const queryStringUrlId = window.location.search
  const urlSearchParams = new URLSearchParams(queryStringUrlId)
  const id = urlSearchParams.get('id')
  const response = await fetch(jsonUrl)
  const data = await response.json()
  const mediasArray = data.media
  const filteredMedia = mediasArray.filter((el) => el.photographerId == id)
  const newFilteredMedia = filteredMedia
  filteredMedia.sort((a, b) => {
    if (a.likes < b.likes) return -1
    if (a.likes > b.likes) return 1
    return 0
  })
  for (let i = 0; i < filteredMedia.length; i++) {
    return { media: [...newFilteredMedia] }
  }
}
function displayGallery (medias) {
  // console.log(medias)
  const gallerySection = document.querySelector('#photograph-gallery')
  gallerySection.innerHTML = ''
  medias.forEach((media) => {
    const photographerGallery = galleryFactory(media)
    const galleryCardDOM = photographerGallery.getImageDOM()
    gallerySection.appendChild(galleryCardDOM)
  })
}
async function initGallery () {
  const { media } = await getGalleryItems()
  displayGallery(media)
}
initGallery()

//  ?TRI PAR DATES =====================================
function sortedByIdDate () {
  async function getGalleryItems () {
    // Récupération de l'ID de la page
    const queryStringUrlId = window.location.search
    const urlSearchParams = new URLSearchParams(queryStringUrlId)
    const id = urlSearchParams.get('id')
    const response = await fetch(jsonUrl)
    const data = await response.json()
    const mediasArray = data.media
    const filteredMedia = mediasArray.filter((el) => el.photographerId == id) 
    const newFilteredMedia = filteredMedia
    // console.log(newFilteredMedia)
    filteredMedia.sort((a, b) => {
      if (a.date < b.date) return -1
      if (a.date > b.date) return 1
      return 0
    })
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] }
    }
  }
  // Affichage des données des photographes
  function displayGallery (medias) {
    // console.log(medias)
    const gallerySection = document.querySelector('#photograph-gallery')
    gallerySection.innerHTML = ''
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media)
      const galleryCardDOM = photographerGallery.getImageDOM()
      gallerySection.appendChild(galleryCardDOM)
    })
  }
  async function initGallery () {
    const { media } = await getGalleryItems()
    displayGallery(media)
  }
  initGallery()
  
}
// ?TRI PAR TITLE =====================================
function sortedByIdTitle () {
  async function getGalleryItems () {
    const queryStringUrlId = window.location.search
    const urlSearchParams = new URLSearchParams(queryStringUrlId)
    const id = urlSearchParams.get('id')
    const response = await fetch(jsonUrl)
    const data = await response.json()
    const mediasArray = data.media
    const filteredMedia = mediasArray.filter((el) => el.photographerId == id)
    const newFilteredMedia = filteredMedia
    filteredMedia.sort((a, b) => {
      if (a.title < b.title) return -1
      if (a.title > b.title) return 1
      return 0
    })
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] }
    }
  }
  function displayGallery (medias) {
    const gallerySection = document.querySelector('#photograph-gallery')
    gallerySection.innerHTML = ''
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media)
      const galleryCardDOM = photographerGallery.getImageDOM()
      gallerySection.appendChild(galleryCardDOM)
    })
  }
  async function initGallery () {
    const { media } = await getGalleryItems()
    displayGallery(media)
  }

  initGallery()
}
// * TRI PAR LIKES =====================================

function sortedByIdLikes () {
  async function getGalleryItems () {
    // Récupération de l'ID de la page
    const queryStringUrlId = window.location.search
    const urlSearchParams = new URLSearchParams(queryStringUrlId)
    const id = urlSearchParams.get('id')
    const response = await fetch(jsonUrl)
    const data = await response.json()
    const mediasArray = data.media
    const filteredMedia = mediasArray.filter((el) => el.photographerId == id) //! ICI TABLEAU FILTRE DU PHOTOGRAPHE
    const newFilteredMedia = filteredMedia
    filteredMedia.sort((a, b) => {
      if (a.likes < b.likes) return -1
      if (a.likes > b.likes) return 1
      return 0
    })
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] }
    }
  }
  function displayGallery (medias) {
    // console.log(medias)
    const gallerySection = document.querySelector('#photograph-gallery')
    gallerySection.innerHTML = ''
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media)
      galleryFactory(media)
      const galleryCardDOM = photographerGallery.getImageDOM()
      gallerySection.appendChild(galleryCardDOM)
    })
  }
  async function initGallery () {
    const { media } = await getGalleryItems()
    displayGallery(media)
  }
  initGallery()
}

