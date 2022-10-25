// Gestion dropdown menu
const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownArrow = document.querySelector('.dropdown-arrow')
const dropdownTrigger = document.querySelector('#dropdown-trigger')

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

// document.onkeydown = function (e) {

//   }
// }