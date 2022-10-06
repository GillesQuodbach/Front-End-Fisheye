// Attente du chargement de la page

window.onload = () => {
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
      //Si index 0 bouton prev invisible
      // if (newIndex == 0) {
      //   prevBtn.style.display = "none";
      // }
      // //Si index final bouton next invisible
      // if (newIndex >= totalGallery - 1) {
      //   nextBtn.style.display = "none";
      // }
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
  //   //! Like au clic sur coeur
  //   const cardHearts = document.querySelectorAll(".likes-heart");
  //   cardHearts.forEach((cardHeart) => {
  //     cardHeart.addEventListener("click", (event) => {
  //       event.target.classList.toggle("cardHeart-no");
  //       event.target.classList.toggle("cardHeart-yes");
  //       if (event.target.classList.contains("cardHeart-yes")) {
  //         alert("COEUR AJOUTE");
  //       } else {
  //         alert("DEJA LIKE");
  //       }
  //     });
  //   });
  // };
  const cardHearts = document.querySelectorAll(".likes-heart");

  cardHearts.forEach((cardHeart) => {
    cardHeart.addEventListener("click", (event) => {
      let dataId = event.target.getAttribute("data-id");
      const thisCardLikes = document.querySelector(`.cards_likes-${dataId}`);
      const bottom_likes = document.querySelector(".bottom_likes");
      event.target.classList.toggle("cardHeart-no");
      let cardLikesContent = Number(thisCardLikes.innerHTML);
      let photographTotalLikes = Number(bottom_likes.innerHTML);
      if (event.target.classList.contains("cardHeart-yes")) {
        alert("Vous avez déja liké cette photo");
      } else {
        console.log(dataId);
        thisCardLikes.innerHTML = cardLikesContent + 1;
        // event.target.classList.toggle("cardHeart-yes");
        bottom_likes.innerHTML = photographTotalLikes + 1;
        event.target.classList.add("cardHeart-yes");
        event.target.classList.remove("cardHeart-no");
      }
    });
  });
};
