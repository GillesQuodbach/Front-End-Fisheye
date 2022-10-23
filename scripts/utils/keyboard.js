// Ouverture dropdown au focus
const body = document.querySelector('#body')
const dropdownBtn = document.querySelector('#dropdown-trigger')
const dropdownListTitle = document.querySelector('#dropdown-title')
const dropdownListDate = document.querySelector('#dropdown-date')
const dropdownComplet = document.querySelector('#dropdown')

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

//*Filtrage de la gallery au press d'ENTRER
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