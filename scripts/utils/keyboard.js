const dropdownButton = document.querySelector('.dropdown-button')

function openDropdown (e) {
  const dropdownMenu = document.querySelector('.dropdown-menu')
  dropdownMenu.classList.toggle('show')
  console.log(e)
}
dropdownButton.onkeydown = openDropdown
