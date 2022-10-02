 // Attente du chargement de la page
window.onload = () => {
 
  //Selection des éléments
  //Tous les éléments de la gallery (photos et videos)
  const gallery = document.querySelectorAll('.profil_image');
  //Longueur de la galerie
  const totalGallery = gallery.length;
  //Lightbox
  const lightbox = document.querySelector('.lightbox');
  //Photo de la lightbox
  const lightboxImg = document.querySelector('.lightbox_picture');
  const lightboxVideo = document.querySelector('.lightbox_video');
  //Titre de l'image ou video
  let lightboxTitle = document.querySelector('.lightbox_media_title');
  //Bouton fermeture lightbox
  const closeButton = document.querySelector('.lightbox_close')
  //Bouton retour/suivant de la lightbox
  const prevBtn = document.querySelector('.lightbox_previous');
  const nextBtn = document.querySelector('.lightbox_next');

  for (let i = 0; i < gallery.length; i++) {
    let newIndex = i; // Remplacement de i par newIndex
    let clickedImgIndex = "";
    gallery[i].onclick = () => {
      // si imageUrl fini par mp4
      // img devient video
      function preview() {
        //Source de l'image cliquée
        let imageUrl = gallery[newIndex].src
        lightboxImg.src = imageUrl;
        //Titre de l'image cliquée
        let extension = imageUrl.split('.').pop()
        console.log(extension); //extension jpg
        console.log(gallery[newIndex].alt)
//METTRE UNE LIGNE IMG l'autre VIDEO, hid une quand on affiche l'autre !
        if (extension == "mp4") {
          let videoUrl = gallery[newIndex].src
        lightboxVideo.src = videoUrl;
        //Titre de l'image cliquée
        let videoTitle = gallery[newIndex]
        let videoAlt = videoTitle.getAttribute("alt")
        console.log(videoAlt);
          lightboxTitle.textContent = videoAlt
          lightboxImg.classList.remove("show");
          lightboxVideo.classList.add("show");
          lightboxVideo.setAttribute("controls", "controls");
        } else if (extension == "jpg"){
          let imageUrl = gallery[newIndex].src
          lightboxImg.src = imageUrl;
        //Titre de l'image cliquée
          let imageTitle = gallery[newIndex].alt
          lightboxTitle.textContent = imageTitle
          lightboxImg.classList.add("show");
          lightboxVideo.classList.remove("show");
        }
      }
      preview();
      //Si index 0 bouton prev invisible
      if (newIndex == 0) {
        prevBtn.style.display = 'none';
      }
      //Si index final bouton next invisible
      if (newIndex >= totalGallery - 1) {
        nextBtn.style.display = 'none';
      }
      //Défilement photos précédentes
      prevBtn.onclick = () => {
          newIndex--; //décrément l'index
          if (newIndex == 0) {
            preview();
            prevBtn.style.display = 'none';
          } else {
            preview()
            nextBtn.style.display = 'block';
          }
      }
      //Défilement photos suivantes
      nextBtn.onclick = () => {
          newIndex++; //décrément l'index
          if (newIndex >= totalGallery - 1) {
            preview()
            nextBtn.style.display = 'none';
          } else {
            preview()
            prevBtn.style.display = 'block';
          }
    }
      //Apparition lightbox
      lightbox.classList.add("show");
      //Fermeture lightbox + reinitialisation bouton
        closeButton.onclick = () => {
          newIndex = clickedImgIndex;
          prevBtn.style.display = 'block';
          nextBtn.style.display = 'block';
          lightbox.classList.remove("show");
        }
}}};
  