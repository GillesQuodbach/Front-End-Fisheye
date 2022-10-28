// Ouverture dropdown au focus
const body = document.querySelector('#body')
const dropdownBtn = document.querySelector('#dropdown-trigger')
const dropdownListTitle = document.querySelector('#dropdown-title')
const dropdownListDate = document.querySelector('#dropdown-date')
const dropdownComplet = document.querySelector('#dropdown')

//

//*Ouverture dropdown au focus (TAB)
dropdownBtn.addEventListener('focus', function() {
        dropdownMenu.classList.add('show') //Listbox active
        dropdownToggle.classList.add('open') //Button avec radius 0 OK
})

dropdownListDate.addEventListener('focusin', function(e) {
        dropdownMenu.classList.add('show')
        dropdownToggle.classList.add('open')
        console.log('Marche 1')
})
dropdownListDate.addEventListener('focusout', function(e) {
    dropdownMenu.classList.add('show')
    dropdownToggle.classList.add('open')
    console.log('Marche 2')
})
dropdownListTitle.addEventListener('focusin', function(e) {
    dropdownMenu.classList.add('show')
    dropdownToggle.classList.add('open')
    console.log('Marche 3')
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
    if ((dropdownBtn.classList.contains('open'))&&(e.key == 'Escape')){
        dropdownMenu.classList.remove('show')
        dropdownToggle.classList.remove('open')
    }
}

// *Gestion du clavier pour ajouter un like

function incLikesClicksWithEnter () {
    const hearts = document.querySelectorAll('.likes-heart')
    hearts.forEach((heart) => {
      heart.addEventListener('keydown', (e) => {
        if((e.target === document.activeElement) && (e.key === 'Enter')){
        const thisId = e.target.dataset.id
        console.log(thisId)
        const thisArticle = document.getElementById(`${thisId}`)
        const thisArticleLikes = thisArticle.querySelector('.cards_likes')
        const bottomTotalLikes = document.querySelector('.bottom_likes')
        console.log(bottomTotalLikes.innerHTML)
        // e.target.classList.toggle('cardHeart-no')
        if (e.target.classList.contains('cardHeart-yes')) {
          alert('Vous avez déja liké cette photo')
        } else {
          e.target.classList.toggle('cardHeart-yes')
          thisArticleLikes.innerHTML++
          bottomTotalLikes.innerHTML++
          e.target.classList.add('cardHeart-yes')
          // e.target.classList.remove('cardHeart-no')
        }
      }})
    })
  }

  const closeFormModalCross = document.querySelector('.close-modal-cross')
const formModal = document.querySelector('#contact_modal')

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