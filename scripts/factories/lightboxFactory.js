function lightboxFactory(data) {
    const { id,  title, image } = data;
    const picture = `assets/images/${image}`;
    //Création de la carte de chaque photographe
    function getLightboxDOM() {
        //Card image
        const img = document.querySelector('.lightbox_picture');
        img.setAttribute("src", picture)
        img.setAttribute("alt", title);
        // Photographer name
        const h2 = document.querySelector('.lightbox_picture_title');
        h2.textContent = title;
    //Retourne les infos dans les cards
    }
    return { id, title, image, getLightboxDOM}
    }