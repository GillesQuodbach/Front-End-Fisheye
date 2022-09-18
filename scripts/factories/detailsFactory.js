function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    //Création de la carte de chaque photographe
    function getUserCardDOM() {
        // Cards container
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        
        // Photographer name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.className = "name";
        // Photographers living place
        const livingPlace = document.createElement('p');
        livingPlace.innerHTML =`${city}, ${country}`;
        livingPlace.className = "living-place";
        // Photographers tagline
        const tag = document.createElement('p');
        tag.textContent = tagline;
        tag.className = "tagline"
        //Card image
        const photographHeader = document.querySelector('.photograph-header');
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.className = "detail-profile-image";
        img.setAttribute("alt", name);
        // Photographers price
        // const cost = document.createElement('p');
        // cost.textContent = `${price}€/jour`;
        // cost.className = "price";
        //Création de la card
        photographHeader.appendChild(img);
        photographHeader.appendChild(article);
        article.appendChild(h2);
        article.appendChild(tag);
        article.appendChild(livingPlace);
        // article.appendChild(cost);
        return (article); //Retourne les infos dans les cards
    }
    return { name, picture, id, getUserCardDOM}
    }

