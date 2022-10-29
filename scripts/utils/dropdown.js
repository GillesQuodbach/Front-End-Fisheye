//* Gestion du dropdown menu

const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownArrow = document.querySelector('.dropdown-arrow')
const dropdownTrigger = document.querySelector('#dropdown-trigger')
const main = document.querySelector('#main')

// article.setAttribute('data-likes', `${likes}`)
// Ouverture/fermeture menu
dropdownToggle.addEventListener('mouseover', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'true')
})

dropdownToggle.addEventListener('mouseout', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})
// Ouverture/fermeture liste
dropdownMenu.addEventListener('mouseover', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'true')
})

dropdownMenu.addEventListener('mouseout', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})  

dropdownMenu.addEventListener('blur', function () {
  if ((dropdownBtn.classList.contains('open'))){
    dropdownMenu.classList.remove('show')
    dropdownToggle.classList.remove('open')
}
  })   
// dropdownMenu.addEventListener('focusout', function(e) {
//   dropdownMenu.classList.remove('show')
//   dropdownToggle.classList.remove('open')
//   console.log('Marche 1')
// })

//  * BOUTON TRI date
document.querySelector('.dropdown-date').addEventListener('click', () => {
  sortedByIdDate()
  console.log('Sorted by Date')
})
//  * BOUTON TRI likes
document.querySelector('.dropbtn').addEventListener('click', () => {
  sortedByIdLikes()
  console.log('Sorted by Likes')
})
//  * BOUTON TRI title
document.querySelector('.dropdown-title').addEventListener('click', () => {
  sortedByIdTitle()
  console.log('Sorted by title')
})