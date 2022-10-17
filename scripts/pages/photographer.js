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
  // retourne l'objet (le photographe) avec l'id correspondant au photographe//
  return { photographers: sortedById[id] }
}
async function displayPhotographersProfils (photographer) {
  const photographerModel = photographerProfilFactory(photographer)
  photographerModel.getProfilCardDOM()
}
async function initProfils () {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographersProfils()
  // const { media } = await getMedia();
  await displayPhotographersProfils(photographers)
  // await displayData(media);
  //! Gestion du total des likes du photographe
  const allPhotographLikesArray = []
  const allCardLikes = document.querySelectorAll('.cards_likes')
  allCardLikes.forEach((heart) => {
    // console.log(heart.dataset.likes)
    allPhotographLikesArray.push(parseInt(heart.dataset.likes))
  })
  // console.log(allPhotographLikesArray)
  let sum = 0
  for (let i = 0; i < allPhotographLikesArray.length; i++) {
    sum += allPhotographLikesArray[i]
  }
  // console.log(sum)
  const totalBottomLikes = document.querySelector('.bottom_likes')
  totalBottomLikes.innerHTML = sum
}

initProfils()

//  ! ====================================================
//  ! GESTION DE LA GALERIE DE CHAQUE PHOTOGRAPHE
//  ! ====================================================

//  ? BOUTON TRI date
document.querySelector('.dropdown-date').addEventListener('click', () => {
  sortedByIdDate()
  console.log('Sorted by Date')
  // console.log(document.querySelector("#photograph_gallery"));
})
//  ? BOUTON TRI likes
document.querySelector('.dropbtn').addEventListener('click', () => {
  sortedByIdLikes()
  console.log('Sorted by Likes')
  // console.log(document.querySelector("#photograph_gallery"));
})
//  ? BOUTON TRI title
document.querySelector('.dropdown-title').addEventListener('click', () => {
  sortedByIdTitle()
  console.log('Sorted by title')
  // console.log(document.querySelector("#photograph_gallery"));
})
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
    if (a.likes < b.likes) return -1
    if (a.likes > b.likes) return 1
    return 0
  })
  for (let i = 0; i < filteredMedia.length; i++) {
    return { media: [...newFilteredMedia] }
  }
}
// Affichage des données des photographes
async function displayGallery (medias) {
  // console.log(medias)
  const gallerySection = document.querySelector('#photograph_gallery')
  gallerySection.innerHTML = ''
  medias.forEach((media) => {
    const photographerGallery = galleryFactory(media)
    const galleryCardDOM = photographerGallery.getImageDOM()
    gallerySection.appendChild(galleryCardDOM)
  })
}
async function initGallery () {
  const { media } = await getGalleryItems()
  await displayGallery(media)
  // console.log(media)
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
    const filteredMedia = mediasArray.filter((el) => el.photographerId == id) //! ICI TABLEAU FILTRE DU PHOTOGRAPHE
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
  async function displayGallery (medias) {
    // console.log(medias)
    const gallerySection = document.querySelector('#photograph_gallery')
    gallerySection.innerHTML = ''
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media)
      const galleryCardDOM = photographerGallery.getImageDOM()
      gallerySection.appendChild(galleryCardDOM)
    })
  }
  async function initGallery () {
    const { media } = await getGalleryItems()
    await displayGallery(media)
  }
  initGallery()
}

// ?TRI PAR TITLE =====================================
function sortedByIdTitle () {
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
    filteredMedia.sort((a, b) => {
      if (a.title < b.title) return -1
      if (a.title > b.title) return 1
      return 0
    })
    // ============================================
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] }
    }
  }
  // Affichage des données des photographes
  async function displayGallery (medias) {
    // console.log(medias)
    const gallerySection = document.querySelector('#photograph_gallery')
    gallerySection.innerHTML = ''
    medias.forEach((media) => {
      const photographerGallery = galleryFactory(media)
      const galleryCardDOM = photographerGallery.getImageDOM()
      gallerySection.appendChild(galleryCardDOM)
    })
  }
  async function initGallery () {
    const { media } = await getGalleryItems()
    await displayGallery(media)
  }
  initGallery()
}
// ? TRI PAR LIKES =====================================
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
    // console.log(newFilteredMedia)
    filteredMedia.sort((a, b) => {
      if (a.likes < b.likes) return -1
      if (a.likes > b.likes) return 1
      return 0
    })
    // ============================================
    for (let i = 0; i < filteredMedia.length; i++) {
      return { media: [...newFilteredMedia] }
    }
  }

  // Affichage des données des photographes
  async function displayGallery (medias) {
    // console.log(medias)
    const gallerySection = document.querySelector('#photograph_gallery')
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
    await displayGallery(media)
    // console.log(media)
  }
  initGallery()
}
