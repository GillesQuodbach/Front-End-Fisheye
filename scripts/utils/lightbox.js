const lightbox = document.querySelector('.lightbox')

const loadedGallery = document.querySelector('#photograph_gallery') // Attente du chargement de la page
const observer = new MutationObserver(modifDomGallery)
observer.observe(loadedGallery, { childList: true })

// Fermeture lightbox au clavier
// Fermeture formulaire de contact au clavier

document.onkeydown = function (e) {
  const modal = document.getElementById('contact_modal')
  const lightbox = document.querySelector('.lightbox')

  if (modal.getAttribute('aria-hidden') == 'false' && e.key == 'Escape') {
    closeModal()
  }
  const mainContent = document.querySelector('#main')
  if (lightbox.getAttribute('aria-hidden') == 'false' && e.key == 'Escape') {
    lightbox.classList.remove('show')
    lightbox.setAttribute('aria-hidden', 'true')
    mainContent.setAttribute('aria-hidden', 'false')
  }
}

function modifDomGallery (mutations) {
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
      const lightboxImg = document.querySelector('.lightbox_picture')
      const lightboxVideo = document.querySelector('.lightbox_video')
      // Titre de l'image ou video
      const lightboxTitle = document.querySelector('.lightbox_media_title')
      // Bouton fermeture lightbox
      const closeButton = document.querySelector('.lightbox_close')
      // Bouton retour/suivant de la lightbox
      const prevBtn = document.querySelector('.lightbox_previous')
      const nextBtn = document.querySelector('.lightbox_next')

      for (let i = 0; i < gallery.length; i++) {
        let newIndex = i // Remplacement de i par newIndex
        const clickedImgIndex = ''
        gallery[i].onclick = () => {
          // si imageUrl fini par mp4
          // img devient video
          function preview () {
            lightbox.setAttribute('aria-hidden', 'false')
            mainContent.setAttribute('aria-hidden', 'true')
            // Source de l'image cliquée
            const imageUrl = gallery[newIndex].src
            lightboxImg.src = imageUrl
            // Titre de l'image cliquée
            const extension = imageUrl.split('.').pop()
            console.log(extension) // extension jpg
            console.log(gallery[newIndex].alt)
            // METTRE UNE LIGNE IMG l'autre VIDEO, hid une quand on affiche l'autre !
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
        }
      }
    }
  }
}
