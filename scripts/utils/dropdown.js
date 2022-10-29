//* Gestion du dropdown menu

const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownArrow = document.querySelector('.dropdown-arrow')
const dropdownTrigger = document.querySelector('#dropdown-trigger')
const main = document.querySelector('#main')

// article.setAttribute('data-likes', `${likes}`)
// Ouverture/fermeture menu
dropdownToggle.addEventListener('mouseover', function () {
  dropdownMenu.classList.add('show')
  dropdownToggle.classList.add('open')
  dropdownArrow.classList.add('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'true')
})

dropdownToggle.addEventListener('mouseout', function () {
  dropdownMenu.classList.remove('show')
  dropdownToggle.classList.remove('open')
  dropdownArrow.classList.remove('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})
// Ouverture/fermeture liste
dropdownMenu.addEventListener('mouseover', function () {
  dropdownMenu.classList.add('show')
  dropdownToggle.classList.add('open')
  dropdownArrow.classList.add('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'true')
})

dropdownMenu.addEventListener('mouseout', function () {
  dropdownMenu.classList.remove('show')
  dropdownToggle.classList.remove('open')
  dropdownArrow.classList.remove('reverse')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})  

dropdownMenu.addEventListener('blur', function () {
  if ((dropdownTrigger.classList.contains('open'))){
    dropdownToggle.classList.remove('open')
    dropdownMenu.classList.remove('show')
}
  })   

//  * BOUTON TRI date
document.querySelector('.dropdown-date').addEventListener('click', () => {
  sortedByIdDate()
  console.log('Sorted by Date')
  main.focus()
  dropdownToggle.classList.remove('open')
  dropdownMenu.classList.remove('show')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})
//  * BOUTON TRI likes
document.querySelector('.dropbtn').addEventListener('click', () => {
  sortedByIdLikes()
  console.log('Sorted by Likes')
  main.focus()
  dropdownToggle.classList.remove('open')
  dropdownMenu.classList.remove('show')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})
//  * BOUTON TRI title
document.querySelector('.dropdown-title').addEventListener('click', () => {
  sortedByIdTitle()
  console.log('Sorted by title')
  main.focus()
  dropdownToggle.classList.remove('open')
  dropdownMenu.classList.remove('show')
  dropdownTrigger.setAttribute('aria-expanded', 'false')
})