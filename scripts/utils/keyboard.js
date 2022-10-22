  



// const dropdownButton = document.querySelector('.dropdown-button')
// // const dropdsownToggle = document.querySelector('.dropdown-toggle')
// // const dropdownMenu = document.querySelector('.dropdown-menu')

// //Ouverture Dropdown au focus
// dropdownButton.addEventListener('focus', function openDropdown(e) {
//     dropdownMenu.classList.toggle('show')
//     dropdownButton.classList.toggle('open')
//     // dropdownToggle.classList.toggle('open')
//     console.log(e.currentTarget);
// })
// // Fermeture Dropdown au blur
// dropdownButton.addEventListener('blur', function openDropdown(e) {
//     dropdownMenu.classList.toggle('show')
//     // dropdownToggle.classList.toggle('open')

//     console.log(e.currentTarget);
// })

// dropdownButton.onkeydown = function (e) {
//     if ((dropdownButton.toggle("open") === true && (e.keydown == "Esc"))){
//         dropdownMenu.classList.remove('show')
//         dropdownButton.classList.remove('open') 
//     }
// }

// Fonction de désactivation du scroll de la page
// function functiondisable() {
//     // To get the scroll position of current webpage
//     TopScroll = (window.pageYOffset || document.documentElement.scrollTop);
//     LeftScroll = (window.pageXOffset || document.documentElement.scrollLeft);
    
//     // if scroll happens, set it to the previous value
//     window.onscroll = function() {
//     window.scrollTo(LeftScroll, TopScroll)
//             }
//     };
    
// // Fonction de d'activation du scroll de la page
//     function functionenable() {
//     window.onscroll = function() {};
//     };






// *SI dropdown-button est FOCUS => OUVERTURE menu
// *SI dropdown-button est BLUR OU ESC => FERMETURE menu
// *SI dropdown-button est focus ET que la touche ENTRER est pressée => SortedByLikes()
// !SI dropdown-button est focus ET que la touche flecheBas est pressée => selection div après 
// SI dropdown-button est focus ET que la touche flecheHaut est pressée => selection div avant 
// Si entrer => SortedByDate ou Title
