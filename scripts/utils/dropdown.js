//* Gestion du dropdown menu

const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownArrow = document.querySelector('.dropdown-arrow')
const dropdownTrigger = document.querySelector('#dropdown-trigger')
const contactButtons = document.querySelectorAll('.contact-button')

// // Ouverture/fermeture menu
dropdownTrigger.addEventListener('mouseover', function (e) {
  dropdownMenu.classList.add('show')
  dropdownTrigger.classList.add('open')
  dropdownArrow.classList.add('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'true')
  e.stopPropagation()
  
})

dropdownTrigger.addEventListener('mouseout', function (e) {
  dropdownMenu.classList.remove('show')
  dropdownTrigger.classList.remove('open')
  dropdownArrow.classList.remove('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
  e.stopPropagation()
})
// Ouverture/fermeture liste
dropdownMenu.addEventListener('mouseover', function (e) {
  dropdownMenu.classList.add('show')
  dropdownTrigger.classList.add('open')
  dropdownArrow.classList.add('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'true')
  e.stopPropagation()
})

dropdownMenu.addEventListener('mouseout', function (e) {
  dropdownMenu.classList.remove('show')
  dropdownTrigger.classList.remove('open')
  dropdownArrow.classList.remove('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
  e.stopPropagation()
})  

dropdownMenu.addEventListener('blur', function () {
  if ((dropdownTrigger.classList.contains('open'))){
    dropdownTrigger.classList.remove('open')
    dropdownMenu.classList.remove('show')
}
  })   

//  * BOUTON TRI date
document.querySelector('.dropdown-date').addEventListener('click', (e) => {
  sortedByIdDate()
  // console.log('Sorted by Date')
  // dropdownMenu.classList.remove('show')
  // dropdownTrigger.classList.remove('open')
  // dropdownTrigger.setAttribute('aria-expanded', 'false')

})
//  * BOUTON TRI likes
document.querySelector('.dropbtn').addEventListener('click', (e) => {
  sortedByIdLikes()
  // console.log('Sorted by Likes')
  // dropdownMenu.classList.remove('show')
  // dropdownTrigger.classList.remove('open')
  // dropdownTrigger.setAttribute('aria-expanded', 'false')

})
//  * BOUTON TRI title
document.querySelector('.dropdown-title').addEventListener('click', (e) => {
  sortedByIdTitle()
  // console.log('Sorted by title')
  // dropdownMenu.classList.remove('show')
  // dropdownTrigger.classList.remove('open')
  // dropdownTrigger.setAttribute('aria-expanded', 'false')
})