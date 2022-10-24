const lightbox = document.querySelector('.lightbox')
const lightboxImg = document.querySelector('.lightbox_picture')
const loadedGallery = document.querySelector('#photograph_gallery') // Attente du chargement de la page
const observer = new MutationObserver(modifDomGallery)
observer.observe(loadedGallery, { childList: true })

// Ouverture lightbox clavier (Entrer)


// Fermeture lightbox au clavier
// Fermeture formulaire de contact au clavier
async function incLikesClicks () {
  const hearts = document.querySelectorAll('.likes-heart')
  // console.log(hearts)
  hearts.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      const thisId = e.target.dataset.id
      console.log(thisId)
      const thisArticle = document.getElementById(`${thisId}`)
      const thisArticleLikes = thisArticle.querySelector('.cards_likes')
      const bottomTotalLikes = document.querySelector('.bottom_likes')
      console.log(bottomTotalLikes.innerHTML)
      // e.target.classList.toggle('cardHeart-no')

      if (e.target.classList.contains('cardHeart-yes')) {
        alert('Vous avez déja liké cette photo')
      } else {
        e.target.classList.toggle('cardHeart-yes')
        thisArticleLikes.innerHTML++
        bottomTotalLikes.innerHTML++
        e.target.classList.add('cardHeart-yes')
        // e.target.classList.remove('cardHeart-no')
      }
    })
  })
}
function modifDomGallery (mutations) {
  incLikesClicks()
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      // Selection des éléments
      // Tous les éléments de la gallery (photos et videos)
      const gallery = document.querySelectorAll('.cards_image')
      // Longueur de la galerie
      const totalGallery = gallery.length
      // Lightbox
      const mainContent = document.querySelector('#main')
      // Photo de la lightbox
      
      const lightboxVideo = document.querySelector('.lightbox_video')
      // Titre de l'image ou video
      const lightboxTitle = document.querySelector('.lightbox_media_title')
      // Bouton fermeture lightbox
      const closeButton = document.querySelector('.lightbox_close')
      // Bouton retour/suivant de la lightbox
      const prevBtn = document.querySelector('.lightbox_previous')
      const nextBtn = document.querySelector('.lightbox_next')

      for (let i = 0; i < gallery.length; i++) {
        // Remplacement de i par newIndex
        let newIndex = i
        const clickedImgIndex = ''
        gallery[i].onclick = () => {
          newIndex = i
          // si imageUrl fini par mp4
          // img devient video
          function preview () {
            lightbox.setAttribute('aria-hidden', 'false')
            mainContent.setAttribute('aria-hidden', 'true')
            // Source de l'image cliquée
            const imageUrl = gallery[newIndex].src
            console.log(gallery[newIndex])
            lightboxImg.src = imageUrl
            // Titre de l'image cliquée
            const extension = imageUrl.split('.').pop()
            console.log(extension) // extension jpg
            console.log(gallery[newIndex].alt)
            // METTRE UNE LIGNE IMG l'autre VIDEO, hid une quand on affiche l'autre !
            //! PARTIE VIDEO
            if (extension == 'mp4') {
              const videoUrl = gallery[newIndex].src
              lightboxVideo.src = videoUrl
              // Titre de l'image cliquée
              const videoTitle = gallery[newIndex]
              const videoAlt = videoTitle.getAttribute('alt')
              // console.log(videoAlt)
              lightboxTitle.textContent = videoAlt
              lightboxImg.classList.remove('show')
              lightboxVideo.classList.add('show')
              // lightboxVideo.setAttribute('controls', 'controls')
              lightboxVideo.setAttribute('alt', videoAlt)
              //! PARTIE PHOTO
            } else if (extension == 'jpg') {
              const imageUrl = gallery[newIndex].src
              lightboxImg.src = imageUrl
              // Titre de l'image cliquée
              const imageTitle = gallery[newIndex].alt
              lightboxTitle.textContent = imageTitle
              lightboxImg.classList.add('show')
              lightboxImg.setAttribute('alt', imageTitle)
              lightboxVideo.classList.remove('show')
            }
          }
          preview()
          // Défilement photos précédentes
          prevBtn.onclick = () => {
            // décrément l'index
            if (newIndex == 0) {
              preview()
              prevBtn.style.display = 'block'
            } else {
              newIndex--
              preview()
              nextBtn.style.display = 'block'
            }
          }
          // Défilement photos suivantes
          nextBtn.onclick = () => {
            if (newIndex >= totalGallery - 1) {
              preview()
              nextBtn.style.display = 'block'
            } else {
              newIndex++ // décrément l'index
              preview()
              prevBtn.style.display = 'block'
            }
          }
          // Apparition lightbox
          lightbox.classList.add('show')
          // Fermeture lightbox + reinitialisation bouton
          closeButton.onclick = () => {
            newIndex = clickedImgIndex
            prevBtn.style.display = 'block'
            nextBtn.style.display = 'block'
            lightbox.classList.remove('show')
            lightbox.setAttribute('aria-hidden', 'true')
            mainContent.setAttribute('aria-hidden', 'false')
          }
          document.onkeydown = function (e) {
            const mainContent = document.querySelector('#main')
            if (
              lightbox.getAttribute('aria-hidden') == 'false' &&
              e.key == 'Escape'
            ) {
              lightbox.classList.remove('show')
              lightbox.setAttribute('aria-hidden', 'true')
              mainContent.setAttribute('aria-hidden', 'false')
            }
            if (
              lightbox.getAttribute('aria-hidden') == 'false' &&
              e.key == 'ArrowLeft'
            ) {
              // décrément l'index
              if (newIndex == 0) {
                preview()
                prevBtn.style.display = 'block'
              } else {
                newIndex--
                preview()
                nextBtn.style.display = 'block'
              }
            }
            if (
              lightbox.getAttribute('aria-hidden') == 'false' &&
              e.key == 'ArrowRight'
            ) {
              if (newIndex >= totalGallery - 1) {
                preview()
                nextBtn.style.display = 'block'
              } else {
                newIndex++ // décrément l'index
                preview()
                prevBtn.style.display = 'block'
              }
            }
            

          }
        }
      }
    }
  }
}
