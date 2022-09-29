window.onload = () => { // Une fois que la galery est chargée
  const gallery = document.querySelectorAll('.profil_image');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox_picture');
  const closeButton = document.querySelector('.lightbox_close')
  
  for (let i = 0; i < gallery.length; i++) {
    console.log(i);
    gallery[i].onclick = () => {
      console.log(i)

      function preview() {
        let selectedImgUrl = gallery[i].src
        lightboxImg.src = selectedImgUrl;
        console.log(selectedImgUrl);
      }

      const prevBtn = document.querySelector('.lightbox_previous');
      const nextBtn = document.querySelector('.lightbox_next');

    prevBtn.onclick = () => {
      i--; //décrément l'index
      preview() // Rapelle de la fonction pour rafraichir l'image
    }
    
      preview();
      lightbox.classList.add("show");
      
        closeButton.onclick = () => {
          lightbox.classList.remove("show");
        }
  }}};
  