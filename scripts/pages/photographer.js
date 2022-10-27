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
  // Récupère les datas des photographes
  const { photographers } = await getPhotographersProfils()
  // const { media } = await getMedia();
  await displayPhotographersProfils(photographers)
  // await displayData(media);
  // await incLikesClicks()
   //! ICI !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
function displayGallery (medias) {
  // console.log(medias)
  const gallerySection = document.querySelector('#photograph_gallery')
  gallerySection.innerHTML = ''
  medias.forEach((media) => {
    const photographerGallery = galleryFactory(media)
    const galleryCardDOM = photographerGallery.getImageDOM()
    gallerySection.appendChild(galleryCardDOM)
  })
 
  // incLikesWithEnter()
   //! ICI !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

 
async function initGallery () {
  const { media } = await getGalleryItems()
  displayGallery(media)

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
    // console.log(media)
  }

  initGallery()
}

//  ? FACTORY DE LA GALERIE PHOTOGRAPHER
//  ? ===================================
function galleryFactory (data) {
  async function getTotalLikes () {
    const queryStringUrlId = window.location.search
    const urlSearchParams = new URLSearchParams(queryStringUrlId)
    const id = urlSearchParams.get('id')
    const response = await fetch(jsonUrl)
    const data = await response.json()
    const mediasArray = data.media
    mediasArray.filter((el) => el.photographerId == id) //! ICI TABLEAU FILTRE DU PHOTOGRAPHE

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
  getTotalLikes()

  const videoInList = data.video
  if (videoInList !== undefined) {
    const { date, id, video, likes, photographerId, price, title } = data

    const clip = `assets/images/${video}`
    // Création de la carte de chaque photographe
    function getImageDOM () {
      // Cards container
      const article = document.createElement('article')
      article.setAttribute('id', id)
      article.setAttribute('data-likes', `${likes}`)
      article.setAttribute('data-date', `${date}`)
      article.setAttribute('data-title', `${title}`)
      article.setAttribute('class', 'gallery_cards')
      // Card image
      const vids = document.createElement('video')
      vids.setAttribute('src', clip)
      // vids.setAttribute("controls", "controls");
      vids.setAttribute('muted', 'muted')
      article.setAttribute('class', 'gallery_cards')
      vids.className = 'cards_image'
      vids.setAttribute('alt', `${title} vue détaillée`)
      vids.setAttribute('tabindex', '0')
      // Cards infos container
      const cardInfosContainer = document.createElement('div')
      cardInfosContainer.className = 'cards_infos_container'
      // Photographer name
      const h2 = document.createElement('h2')
      h2.textContent = title
      h2.className = 'cards_title'
      h2.setAttribute('tabindex', '0')
      // Affichage des likes sur chaque card
      const like = document.createElement('p')
      like.textContent = likes
      like.className = 'cards_likes'
      like.setAttribute('data-likes', `${likes}`)
      like.setAttribute('tabindex', '0')
      // Affichage du COEUR sur chaque card
      const heartTag = document.createElement('i')
      heartTag.className = 'fa-sharp fa-solid fa-heart likes-heart'
      heartTag.setAttribute('data-id', `${id}`)
      heartTag.setAttribute('role', 'text')
      heartTag.setAttribute('aria-label', 'likes')
      heartTag.setAttribute('tabindex', '0')
      // ? RAJOUTER PRIX ET CUMUL DES LIKES

      // Création de la card
      article.appendChild(vids)
      article.appendChild(cardInfosContainer)
      cardInfosContainer.appendChild(h2)
      cardInfosContainer.appendChild(like)
      cardInfosContainer.appendChild(heartTag)
      return article // Retourne les infos dans les cards
    }
    return {
      date,
      id,
      video,
      likes,
      photographerId,
      price,
      title,
      getImageDOM
    }
  }
  const { date, id, image, likes, price, title } = data

  const picture = `assets/images/${image}`
  // Création de la carte de chaque photographe
  function getImageDOM () {
    // Cards container
    const article = document.createElement('article')
    article.setAttribute('id', id)
    article.setAttribute('class', 'gallery_cards')
    article.setAttribute('data-likes', `${likes}`)
    article.setAttribute('data-date', `${date}`)
    article.setAttribute('data-title', `${title}`)
    // Card image
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.className = 'cards_image'
    img.setAttribute('alt', `${title} vue détaillée`)
    img.setAttribute('tabindex', '0')
    // Cards infos container
    const cardInfosContainer = document.createElement('div')
    cardInfosContainer.className = 'cards_infos_container'
    // Photographer name
    const h2 = document.createElement('h2')
    h2.textContent = title
    h2.className = 'cards_title'
    h2.setAttribute('tabindex', '0')
    // likesContainer.setAttribute('role', 'text')
    // Affichage des likes sur chaque card
    const like = document.createElement('p')
    like.textContent = likes
    like.className = 'cards_likes'
    like.setAttribute('data-likes', `${likes}`)
    like.setAttribute('tabindex', '0')
    // like.setAttribute('aria-label', 'likes')
    // like.setAttribute(`data-id`, `${id}`);
    // Affichage du COEUR sur chaque card
    // Affichage du COEUR sur chaque card
    document.createElement('span')
    const heartTag = document.createElement('i')
    heartTag.className = 'fa-sharp fa-solid fa-heart likes-heart'
    heartTag.setAttribute('data-id', `${id}`)
    heartTag.setAttribute('role', 'text')
    heartTag.setAttribute('aria-label', 'likes')
    heartTag.setAttribute('tabindex', '0')
  

    // Création de la card
    article.appendChild(img)
    article.appendChild(cardInfosContainer)
    cardInfosContainer.appendChild(h2)
    
    cardInfosContainer.appendChild(like)
    cardInfosContainer.appendChild(heartTag)
    like.setAttribute('tabindex', '0')
    return article // Retourne les infos dans les cards
  }
  // const allArticlesImg = document.getElementsByClassName('cards_image')
  // console.log(allArticlesImg)
  // allArticlesImg.forEach(img =>
  //   img.addEventListener('keydown', (e) =>{
  //   if ((!lightbox.classList.contains('show')) && (e.key === 'Enter')){
  //   }
  //   lightbox.classList.add('show')
  //   alert('OK')
  // }))
  return {
    date,
    id,
    image,
    likes,
    price,
    title,
    getImageDOM
  }
  
}