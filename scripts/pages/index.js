// Lien vers le fichier JSON
const jsonUrl = 'data/photographers.json'
// Fonction de récupération des données
async function getPhotographers () {
  // Récupération des données du fichier JSON
  const response = await fetch(jsonUrl)
  // Conversion des datas en JSON
  const data = await response.json()
  // Affichage les datas
  console.log(data)
  // Parcourt du tableau de données
  const photographersArray = data.photographers // Tableau des donnés des photographes
  const { length } = photographersArray // Longueur du tableau
  // Boucle dans le tableau
  for (let i = 0; i < length; i++) {
    return {
      photographers: [...photographersArray]
    }
  }
}
// Affichage des données des photographes
async function displayData (photographers) {
  // Selection de la photographer_section de l'index.html (section entière)
  const photographersSection = document.querySelector('.photographer_section')
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
    // userCardDOM = block article avec id
  })
  // Affichage de l'id dans l'url
  const cardsLinks = document.querySelectorAll('.cardsLink')
  cardsLinks.forEach((cardsLink) =>
    cardsLink.addEventListener('click', () => {
      //    window.location = `photographer.html?id=${cardsLink.id}`}));
      window.location = `photographer.html?id=${cardsLink.id}`
    })
  )
  // console.log(window.location)
}
async function init () {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  await displayData(photographers)
}
init() // RETOURNE UNE PROMESSE EN ATTENTE
function photographerFactory (data) {
  const { name, id, portrait, city, country, tagline, price } = data
  const picture = `assets/photographers/${portrait}`
  // Création de la carte de chaque photographe
  function getUserCardDOM () {
    // Cards container
    const article = document.createElement('article')
    article.setAttribute('id', id)
    article.setAttribute('class', 'cardsLink')
    const readerLink = document.createElement('div')
    readerLink.setAttribute('class', 'photograph-profile')
    readerLink.setAttribute('role', 'link')
    readerLink.setAttribute('aria-label', `${name} `)
    readerLink.setAttribute('tabindex', '0')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.className = 'detail_profile_image'
    img.setAttribute('alt', `Photo de ${name}`)
    // Photographer name
    const h2 = document.createElement('h2')
    h2.textContent = name
    h2.className = 'name'
    // Photographers living place
    const profileText = document.createElement('div')
    profileText.setAttribute('class', 'profile-text')
    const livingPlace = document.createElement('p')
    livingPlace.innerHTML = `${city}, ${country}`
    livingPlace.className = 'living-place'
    // Photographers tagline
    const tag = document.createElement('p')
    tag.textContent = tagline
    tag.className = 'tagline'
    // Photographers price
    const cost = document.createElement('p')
    cost.textContent = `${price}€/jour`
    cost.className = 'price'
    // Création de la card
    article.appendChild(readerLink)
    readerLink.appendChild(img)
    readerLink.appendChild(h2)
    article.appendChild(profileText)
    profileText.appendChild(livingPlace)
    profileText.appendChild(tag)
    profileText.appendChild(cost)
    return article // Retourne les infos dans les cards
  }
  return {
    name,
    id,
    portrait,
    city,
    country,
    tagline,
    price,
    getUserCardDOM
  }
}
