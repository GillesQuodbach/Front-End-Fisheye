// function incLikesWithEnter() {

// const galleryImages = document.querySelectorAll('.cards_image')
// console.log(galleryImages)

// //Donne la cible au moment de l'action
// galleryImages.forEach((img) => {
//     img.addEventListener('keydown', (e) => {
//      if((e.target === document.activeElement) && (e.key === 'Enter')) {
//         const thisId = e.target
//         console.log('=======PUTAIN=======')
//         // preview()
//      }
//     })})}



//     const hearts = document.querySelectorAll('.likes-heart')
//   // console.log(hearts)
//   hearts.forEach((heart) => {
//     heart.addEventListener('click', (e) => {
//       const thisId = e.target.dataset.id
//       console.log(thisId)
//       const thisArticle = document.getElementById(`${thisId}`)
//       const thisArticleLikes = thisArticle.querySelector('.cards_likes')
//       const bottomTotalLikes = document.querySelector('.bottom_likes')
//       console.log(bottomTotalLikes.innerHTML)
//       // e.target.classList.toggle('cardHeart-no')

//       if (e.target.classList.contains('cardHeart-yes')) {
//         alert('Vous avez déja liké cette photo')
//       } else {
//         e.target.classList.toggle('cardHeart-yes')
//         thisArticleLikes.innerHTML++
//         bottomTotalLikes.innerHTML++
//         e.target.classList.add('cardHeart-yes')
//         // e.target.classList.remove('cardHeart-no')
//       }
//     })
//   })
// }