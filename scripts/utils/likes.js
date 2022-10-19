// Gestion dropdown menu
const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownArrow = document.querySelector('.dropdown-arrow')
const dropdownLabel = document.querySelector('.dropdown-label')

// Ouverture/fermeture menu
dropdownToggle.addEventListener('mouseover', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
})

dropdownToggle.addEventListener('mouseout', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
})
// Ouverture/fermeture liste
dropdownMenu.addEventListener('mouseover', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
})

dropdownMenu.addEventListener('mouseout', function () {
  dropdownMenu.classList.toggle('show')
  dropdownToggle.classList.toggle('open')
  dropdownArrow.classList.toggle('reverse')
})

// document.onkeydown = function (e) {

//   }
// }
