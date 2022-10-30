const lightbox = document.querySelector('.lightbox')
const lightboxImg = document.querySelector('.lightbox-picture')
const loadedGallery = document.querySelector('#photograph-gallery') // Attente du chargement de la page
const observer = new MutationObserver(modifDomGallery)
observer.observe(loadedGallery, { childList: true })

function incLikesClicks () {
  const hearts = document.querySelectorAll('.likes-heart')
  hearts.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      const thisId = e.target.dataset.id
      // console.log(thisId)
      const thisArticle = document.getElementById(`${thisId}`)
      const thisArticleLikes = thisArticle.querySelector('.cards-likes')
      const bottomTotalLikes = document.querySelector('.bottom-likes')
      // console.log(bottomTotalLikes.innerHTML)
      if (e.target.classList.contains('cards-heart-yes')) {
        // console.log('Vous avez déja liké cette photo')
      } else {
        e.target.classList.toggle('cards-heart-yes')
        thisArticleLikes.innerHTML++
        bottomTotalLikes.innerHTML++
        e.target.classList.add('cards-heart-yes')
      }
    })
  })
}

function modifDomGallery (mutations) {
  incLikesClicks()
  incLikesClicksWithEnter ()

  const completePhotographGallery = document.querySelector('#photograph-gallery')
  completePhotographGallery.querySelector('.gallery-cards').addEventListener('focusin', function() {
      dropdownMenu.classList.remove('show')
      dropdownToggle.classList.remove('open')
      // console.log('Marche Sortie')
  })
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      const gallery = document.querySelectorAll('.cards-image')
      const totalGallery = gallery.length
      const mainContent = document.querySelector('#main')
      const lightboxVideo = document.querySelector('.lightbox-video')
      const lightboxTitle = document.querySelector('.lightbox-media-title')
      const closeButton = document.querySelector('.lightbox-close')
      const prevBtn = document.querySelector('.lightbox-previous')
      const nextBtn = document.querySelector('.lightbox-next')
      for (let i = 0; i < gallery.length; i++) {
        let newIndex = i
        const clickedImgIndex = ''
        gallery[i].onclick = () => {
          newIndex = i
          function preview () {
            lightbox.setAttribute('aria-hidden', 'false')
            mainContent.setAttribute('aria-hidden', 'true')
            const imageUrl = gallery[newIndex].src
            // console.log(gallery[newIndex])
            lightboxImg.src = imageUrl
            const extension = imageUrl.split('.').pop()
            //? PARTIE VIDEO
            if (extension == 'mp4') {
              const videoUrl = gallery[newIndex].src
              lightboxVideo.src = videoUrl
              const videoTitle = gallery[newIndex]
              const videoAlt = videoTitle.getAttribute('alt')
              lightboxTitle.textContent = videoAlt
              lightboxImg.classList.remove('show')
              lightboxVideo.classList.add('show')
              lightboxVideo.setAttribute('alt', videoAlt)
              //? PARTIE PHOTO
            } else if (extension == 'jpg') {
              const imageUrl = gallery[newIndex].src
              lightboxImg.src = imageUrl
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
            } else {
              newIndex--
              preview()
            }
          }
          nextBtn.onclick = () => {
            if (newIndex >= totalGallery - 1) {
              preview()
            } else {
              newIndex++
              preview()
            }
          }
          lightbox.classList.add('show')
          closeButton.onclick = () => {
            newIndex = clickedImgIndex
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
              } else {
                newIndex--
                preview()
              }
            }
            if (
              lightbox.getAttribute('aria-hidden') == 'false' &&
              e.key == 'ArrowRight'
            ) {
              if (newIndex >= totalGallery - 1) {
                preview()
              } else {
                newIndex++
                preview()
              }
            }
            

          }
        }
      }

      //* Ouverture lightbox au cliavier

      function openLightBoxWithEnter () {
      const galleryImages = document.querySelectorAll('.cards-image')
      // console.log(galleryImages)
      galleryImages.forEach((img) => {
          img.addEventListener('keydown', (e) => {
           if((e.target === document.activeElement) && (e.key === 'Enter')) {
              preview()
           }
          })})
      }

      const galleryImages = document.querySelectorAll('.cards-image')
      for (let i = 0; i < galleryImages.length; i++) {
        let newIndex = i
        const clickedImgIndex = ''
        galleryImages[i].addEventListener('keydown', (e) => {
          if((e.target === document.activeElement) && (e.key === 'Enter')) {
          newIndex = i
          function preview () {
            lightbox.setAttribute('aria-hidden', 'false')
            mainContent.setAttribute('aria-hidden', 'true')
            const imageUrl = gallery[newIndex].src
            // console.log(gallery[newIndex])
            lightboxImg.src = imageUrl
            // Titre de l'image cliquée
            const extension = imageUrl.split('.').pop()
            // console.log(extension) // extension jpg
            // console.log(gallery[newIndex].alt)
            //? PARTIE VIDEO
            if (extension == 'mp4') {
              const videoUrl = gallery[newIndex].src
              lightboxVideo.src = videoUrl
              const videoTitle = gallery[newIndex]
              const videoAlt = videoTitle.getAttribute('alt')
              lightboxTitle.textContent = videoAlt
              lightboxImg.classList.remove('show')
              lightboxVideo.classList.add('show')
              lightboxVideo.setAttribute('alt', videoAlt)
              //? PARTIE PHOTO
            } else if (extension == 'jpg') {
              const imageUrl = gallery[newIndex].src
              lightboxImg.src = imageUrl
              const imageTitle = gallery[newIndex].alt
              lightboxTitle.textContent = imageTitle
              lightboxImg.classList.add('show')
              lightboxImg.setAttribute('alt', imageTitle)
              lightboxVideo.classList.remove('show')
            }
          }
          preview()
          prevBtn.onclick = () => {
            if (newIndex == 0) {
              preview()
            } else {
              newIndex--
              preview()
            }
          }
          nextBtn.onclick = () => {
            if (newIndex >= totalGallery - 1) {
              preview()
            } else {
              newIndex++
              preview()
            }
          }
          lightbox.classList.add('show')
          closeButton.onclick = () => {
            newIndex = clickedImgIndex
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
              if (newIndex == 0) {
                preview()
              } else {
                newIndex--
                preview()
              }
            }
            if (
              lightbox.getAttribute('aria-hidden') == 'false' &&
              e.key == 'ArrowRight'
            ) {
              if (newIndex >= totalGallery - 1) {
                preview()
              } else {
                newIndex++
                preview()
              }
            }
            

          }
        }
      })}
    }
  }
}