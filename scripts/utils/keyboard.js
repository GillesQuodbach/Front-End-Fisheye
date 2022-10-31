// Ouverture dropdown au focus
window.onload = () => {
const dropdownTrigger = document.querySelector('#dropdown-trigger')
const dropdownListTitle = document.querySelector('#dropdown-title')
const dropdownListDate = document.querySelector('#dropdown-date')
const dropdownMenu = document.querySelector('.dropdown-menu')
const fixedInfosContainer = document.querySelector('.bottom-fixed-infos')

//*Ouverture dropdown au focus (TAB)
dropdownTrigger.addEventListener('focus', function() {
        dropdownMenu.classList.add('show') //Listbox active
        dropdownTrigger.classList.add('open') //Button avec radius 0 OK
        dropdownTrigger.setAttribute('aria-expanded', 'true')
})

dropdownListDate.addEventListener('focusin', function(e) {
        dropdownMenu.classList.add('show')
        dropdownTrigger.classList.add('open')
        dropdownTrigger.setAttribute('aria-expanded', 'true')
})
dropdownListDate.addEventListener('focusout', function(e) {
    dropdownMenu.classList.add('show')
    dropdownTrigger.classList.add('open')
    dropdownTrigger.setAttribute('aria-expanded', 'true')
})
dropdownListTitle.addEventListener('focusin', function(e) {
    dropdownMenu.classList.add('show')
    dropdownTrigger.classList.add('open')
    dropdownTrigger.setAttribute('aria-expanded', 'true')
})

//* Filtrage de la gallery a l'appui sur d'ENTRER
dropdownListDate.addEventListener('keydown', function(e) { 
    if (e.key == 'Enter') {
        sortedByIdDate()
}})

dropdownListTitle.addEventListener('keydown', function(e) { 
    if (e.key == 'Enter') {
        sortedByIdTitle()
}})

document.onkeydown = function(e) {
    if ((dropdownTrigger.classList.contains('open'))&&(e.key == 'Escape')){
        dropdownMenu.classList.remove('show')
        dropdownTrigger.classList.remove('open')
        dropdownTrigger.setAttribute('aria-expanded', 'false')
    }
}

fixedInfosContainer.addEventListener('focusin', function(e) {
  dropdownMenu.classList.remove('show')
  dropdownTrigger.classList.remove('open')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})
}

// *Gestion du clavier pour ajouter un like

function incLikesClicksWithEnter () {
    const hearts = document.querySelectorAll('.likes-heart')
    hearts.forEach((heart) => {
      heart.addEventListener('keydown', (e) => {
        if((e.target === document.activeElement) && (e.key === 'Enter')){
        const thisId = e.target.dataset.id
        // console.log(thisId)
        const thisArticle = document.getElementById(`${thisId}`)
        const thisArticleLikes = thisArticle.querySelector('.cards-likes')
        const bottomTotalLikes = document.querySelector('.bottom-likes')
        // console.log(bottomTotalLikes.innerHTML)
        // e.target.classList.toggle('cards-heart-no')
        if (e.target.classList.contains('cards-heart-yes')) {
          alert('Vous avez déja liké cette photo')
        } else {
          e.target.classList.toggle('cards-heart-yes')
          thisArticleLikes.innerHTML++
          bottomTotalLikes.innerHTML++
          e.target.classList.add('cards-heart-yes')
          // e.target.classList.remove('cards-heart-no')
        }
      }})
    })
  }

  const closeFormModalCross = document.querySelector('.close-modal-cross')
const formModal = document.querySelector('#contact-modal')

// * Fermeture du formulaire avec Esc

formModal.addEventListener('keydown', function (e) {
  if ((formModal.hasAttributes('ariaHidden', 'false') && ( e.key === 'Escape')))
  closeModal()
})

closeFormModalCross.addEventListener('keydown', function (e) {
  if ((formModal.hasAttributes('ariaHidden', 'false') && ( e.key === 'Enter')))
  closeModal()
})

formModal.addEventListener('keydown', function (e) {
  if ((formModal.hasAttributes('ariaHidden', 'false') && ( e.key === 'Escape')))
  closeModal()
})