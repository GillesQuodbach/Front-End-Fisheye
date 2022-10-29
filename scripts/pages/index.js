// Lien vers le fichier JSON
const jsonUrl = 'data/photographers.json'

async function getPhotographers () {
  const response = await fetch(jsonUrl)
  const data = await response.json()
  const photographersArray = data.photographers // Tableau des donnés des photographes
  const { length } = photographersArray // Longueur du tableau
  for (let i = 0; i < length; i++) {
    return {
      photographers: [...photographersArray]
    }
  }
}
async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer-section')
  photographers.forEach((photographer) => {
    const photographerModel = _photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
  const cardsLinks = document.querySelectorAll('.cards-container')
  cardsLinks.forEach((cardsLink) =>
    cardsLink.addEventListener('click', () => {
      window.location = `photographer.html?id=${cardsLink.id}`
    })
  )
    }
    async function init () {
      const { photographers } = await getPhotographers()
      await displayData(photographers)
         // *Gestion du clavier pour ajouter un like
          function openPhotographGalleryWithEnter () {
          const hearts = document.querySelectorAll('.photograph-profile')
          console.log(hearts)
          console.log('hearts')
          hearts.forEach((heart) => {
            heart.addEventListener('keydown', (e) => {
              if((e.target === document.activeElement) && (e.key === 'Enter')){
                    window.location = `photographer.html?id=${e.target.parentElement.id}`
                    // console.log(e.target.parentElement.id)
            }})
          })
        }
        openPhotographGalleryWithEnter ()
    }
    
    init() 




