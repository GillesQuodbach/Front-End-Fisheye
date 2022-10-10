const loadedGallery = document.querySelector("#photograph_gallery"); // Attente du chargement de la page

let observer = new MutationObserver(modifDomGallery);
observer.observe(loadedGallery, { childList: true });

function modifDomGallery(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === "childList") {
      //Selection des éléments
      //Tous les éléments de la gallery (photos et videos)
      const gallery = document.querySelectorAll(".cards_image");
      //Longueur de la galerie
      const totalGallery = gallery.length;
      //Lightbox
      const lightbox = document.querySelector(".lightbox");
      //Photo de la lightbox
      const lightboxImg = document.querySelector(".lightbox_picture");
      const lightboxVideo = document.querySelector(".lightbox_video");
      //Titre de l'image ou video
      let lightboxTitle = document.querySelector(".lightbox_media_title");
      //Bouton fermeture lightbox
      const closeButton = document.querySelector(".lightbox_close");
      //Bouton retour/suivant de la lightbox
      const prevBtn = document.querySelector(".lightbox_previous");
      const nextBtn = document.querySelector(".lightbox_next");

      for (let i = 0; i < gallery.length; i++) {
        let newIndex = i; // Remplacement de i par newIndex
        let clickedImgIndex = "";
        gallery[i].onclick = () => {
          // si imageUrl fini par mp4
          // img devient video
          function preview() {
            //Source de l'image cliquée
            let imageUrl = gallery[newIndex].src;
            lightboxImg.src = imageUrl;
            //Titre de l'image cliquée
            let extension = imageUrl.split(".").pop();
            console.log(extension); //extension jpg
            console.log(gallery[newIndex].alt);
            //METTRE UNE LIGNE IMG l'autre VIDEO, hid une quand on affiche l'autre !
            if (extension == "mp4") {
              let videoUrl = gallery[newIndex].src;
              lightboxVideo.src = videoUrl;
              //Titre de l'image cliquée
              let videoTitle = gallery[newIndex];
              let videoAlt = videoTitle.getAttribute("alt");
              console.log(videoAlt);
              lightboxTitle.textContent = videoAlt;
              lightboxImg.classList.remove("show");
              lightboxVideo.classList.add("show");
              lightboxVideo.setAttribute("controls", "controls");
            } else if (extension == "jpg") {
              let imageUrl = gallery[newIndex].src;
              lightboxImg.src = imageUrl;
              //Titre de l'image cliquée
              let imageTitle = gallery[newIndex].alt;
              lightboxTitle.textContent = imageTitle;
              lightboxImg.classList.add("show");
              lightboxVideo.classList.remove("show");
            }
          }
          preview();
          //Défilement photos précédentes
          prevBtn.onclick = () => {
            //décrément l'index
            if (newIndex == 0) {
              preview();
              prevBtn.style.display = "block";
            } else {
              newIndex--;
              preview();
              nextBtn.style.display = "block";
            }
          };
          //Défilement photos suivantes
          nextBtn.onclick = () => {
            if (newIndex >= totalGallery - 1) {
              preview();
              nextBtn.style.display = "block";
            } else {
              newIndex++; //décrément l'index
              preview();
              prevBtn.style.display = "block";
            }
          };
          //Apparition lightbox
          lightbox.classList.add("show");
          //Fermeture lightbox + reinitialisation bouton
          closeButton.onclick = () => {
            newIndex = clickedImgIndex;
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
            lightbox.classList.remove("show");
          };
        };
      }
    }
  }
  //! Gestion du total des likes du photographe
  let allPhotographLikesArray = [];
  const allCardLikes = document.querySelectorAll(".cards_likes");
  allCardLikes.forEach((heart) => {
    console.log(heart.dataset.likes);
    allPhotographLikesArray.push(parseInt(heart.dataset.likes));
  });
  console.log(allPhotographLikesArray);
  let sum = 0;
  for (let i = 0; i < allPhotographLikesArray.length; i++) {
    sum += allPhotographLikesArray[i];
  }
  console.log(sum);
  let totalBottomLikes = document.querySelector(".bottom_likes");
  totalBottomLikes.innerHTML = sum;

  let allGalleryHearts = document.querySelectorAll(".likes-heart");

  //! Incrémentation like au clic
  allGalleryHearts.forEach((heart) => {
    heart.addEventListener("click", (e) => {
      const thisId = e.target.dataset.id;
      console.log(thisId);
      const thisArticle = document.getElementById(`${thisId}`);
      const thisArticleLikes = thisArticle.querySelector(".cards_likes");
      const bottomTotalLikes = document.querySelector(".bottom_likes");
      console.log(bottomTotalLikes.innerHTML);
      e.target.classList.toggle("cardHeart-no");

      if (e.target.classList.contains("cardHeart-yes")) {
        alert("Vous avez déja liké cette photo");
      } else {
        e.target.classList.toggle("cardHeart-yes");
        const cardLikesIncrement = thisArticleLikes.innerHTML++;
        const bottomLikesIncrement = bottomTotalLikes.innerHTML++;
        e.target.classList.add("cardHeart-yes");
        e.target.classList.remove("cardHeart-no");
      }
    });
  });
}
