window.onload = () => {
 
 // Une fois que la galery est chargée
  const gallery = document.querySelectorAll('.profil_image');
  const totalGallery = gallery.length;
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox_picture');
  const closeButton = document.querySelector('.lightbox_close')
  const prevBtn = document.querySelector('.lightbox_previous');
  const nextBtn = document.querySelector('.lightbox_next');

  for (let i = 0; i < gallery.length; i++) {
      
    let newIndex = i;
    let clickedImgIndex;
    

    gallery[i].onclick = () => {
      

      function preview() {
        let imageUrl = gallery[newIndex].src
        lightboxImg.src = imageUrl;
        console.log(imageUrl)
      }
      preview();
      
      if (newIndex == 0) {
        prevBtn.style.display = 'none';
      }
      if (newIndex >= totalGallery - 1) {
        nextBtn.style.display = 'none';
      }

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
  
      lightbox.classList.add("show");
      
        closeButton.onclick = () => {
          newIndex = clickedImgIndex;
          prevBtn.style.display = 'block';
          nextBtn.style.display = 'block';
          lightbox.classList.remove("show");
        }
}}};
  