//! Incrémentation like au clic
document.addEventListener('DOMContentLoaded', ready)

function ready () {
  const heart = document.querySelectorAll('.likes-heart')
  //   console.log(heart)
  // allGalleryHearts.forEach((heart) => {
  //   heart.addEventListener('click', (e) => {
  //     const thisId = e.target.dataset.id
  //     console.log(thisId)
  //     const thisArticle = document.getElementById(`${thisId}`)
  //     const thisArticleLikes = thisArticle.querySelector('.cards_likes')
  //     const bottomTotalLikes = document.querySelector('.bottom_likes')
  //     console.log(bottomTotalLikes.innerHTML)
  //     e.target.classList.toggle('cardHeart-no')

  //     if (e.target.classList.contains('cardHeart-yes')) {
  //       alert('Vous avez déja liké cette photo')
  //     } else {
  //       e.target.classList.toggle('cardHeart-yes')
  //       const cardLikesIncrement = thisArticleLikes.innerHTML++
  //       const bottomLikesIncrement = bottomTotalLikes.innerHTML++
  //       e.target.classList.add('cardHeart-yes')
  //       e.target.classList.remove('cardHeart-no')
  //     }
  //   })
  // })
}
