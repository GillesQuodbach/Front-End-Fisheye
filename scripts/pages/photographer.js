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

// ! ICI RECUP CARDS OK !!!!!!!!!!!!!!!!!!!!!!

function photographerProfilFactory (data) {
  const { name, id, portrait, city, country, tagline, price, likes } = data
  const picture = `assets/photographers/${portrait}`
  // Création de la carte de chaque photographe
  function getProfilCardDOM () {
    // Profile photographe
    const profileHeader = document.querySelector('.photograph-header')
    // Div profileInfos
    const profileInfos = document.createElement('div')
    profileInfos.setAttribute('class', 'photograph_profile_infos')
    profileInfos.setAttribute('role', 'text')

    profileInfos.setAttribute('aria-label', `${name}`)
    // Card image
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.className = 'photograph_profile_photo'
    img.setAttribute('alt', `${name}`)
    // img.setAttribute('role', 'img')
    img.setAttribute('tabindex', '0')
    // img.setAttribute('tabindex', '0')

    // Photographer name
    const h2 = document.createElement('h1')
    h2.textContent = name
    h2.className = 'photograph_profile_name'
    h2.setAttribute('tabindex', '0')
    // h2.setAttribute('role', 'text')
    // Photographers living place
    const profileInfosBox = document.createElement('div')
    profileInfosBox.className = 'profile-infos-box'
    // profileInfosBox.setAttribute('role', 'text')
    profileInfosBox.setAttribute('tabindex', '0')
    profileInfosBox.setAttribute('role', 'text')

    const livingPlace = document.createElement('p')
    livingPlace.innerHTML = `${city}, ${country}`
    livingPlace.className = 'photograph_profile_living_place'
    // Photographers tagline
    const tag = document.createElement('p')
    tag.textContent = tagline
    tag.className = 'photograph_profile_tagline'
    // Photographers likes
    const totalLikes = document.querySelector('.fixed_likes')
    totalLikes.textContent = `${likes}`
    totalLikes.className = 'bottom_likes'
    // totalLikes.setAttribute('tabindex', '0')
    // totalLikes.setAttribute('role', 'text')
    // Photographers price
    const cost = document.querySelector('.fixed_price')
    cost.textContent = `${price}€ / jour`
    cost.className = 'bottom_price'
    // cost.setAttribute('tabindex', '0')
    // cost.setAttribute('role', 'text')
    profileHeader.insertAdjacentElement('afterbegin', profileInfos)
    profileHeader.insertAdjacentElement('beforeend', img)
    profileInfos.appendChild(profileInfosBox)
    profileInfos.insertAdjacentElement('afterbegin', h2)
    profileInfosBox.appendChild(livingPlace)
    profileInfosBox.appendChild(tag)
  }
  return {
    name,
    id,
    portrait,
    city,
    country,
    tagline,
    price,
    likes,
    getProfilCardDOM
  }
}
async function displayPhotographersProfils (photographer) {
  const photographerModel = photographerProfilFactory(photographer)
  photographerModel.getProfilCardDOM()
}
async function initProfils () {
  const { photographers } = await getPhotographersProfils()
  await displayPhotographersProfils(photographers)
   const photographProfilePhoto = document.querySelector('.photograph_profile_photo')
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
    displayGallery(media)
  }
  initGallery()
}

