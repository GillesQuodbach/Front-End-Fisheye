//! FACTORY DE LA GALERIE PHOTOGRAPHER
//!===================================
function galleryFactory(data) {
    let photographerMediaArray = [];
    let videoInList = data.video;
    if (videoInList !== undefined) {
        console.log("=============VIDEO=============");
        const { date, id, video, likes, photographerId, price, title } = data;
        const picture = `assets/images/${video}`;
        //Création de la carte de chaque photographe
        function getImageDOM() {
            // Cards container
            const article = document.createElement( 'article' );
            article.setAttribute("id", id);
            //Card image
            const img = document.createElement( 'video' );
            img.setAttribute("src", picture)
            img.className = "profil_image";
            img.setAttribute("alt", `${title}`);
            // Photographer name
            const h2 = document.createElement( 'h2' );
            h2.textContent = title;
            h2.className = "name";
            //Création de la card
            article.appendChild(img);
            article.appendChild(h2);
            return (article); //Retourne les infos dans les cards
        }
        return { date, id, video, likes, photographerId, price, title, getImageDOM}
        
    } else { 
        
    const { date, id, image, likes, photographerId, price, title } = data;
    const picture = `assets/images/${image}`;
    //Création de la carte de chaque photographe
    function getImageDOM() {
        // Cards container
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        article.setAttribute("class", 'gallery_cards');
        //Card image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.className = "profil_image";
        img.setAttribute("alt", `${title}`);
        // Photographer name
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        h2.className = "name";
        //Création de la card
        article.appendChild(img);
        article.appendChild(h2);
        return (article); //Retourne les infos dans les cards
    }
    return { 
        date, id, image, likes, photographerId, price, title, getImageDOM
    }
}}

