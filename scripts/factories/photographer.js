function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    //Création de la carte de chaque photographe
    function getUserCardDOM() {
        // Cards container
        const article = document.createElement( 'article' );
        //Card image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        // Photographer name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const living = document.createElement('p');
        living.innerHTML = `${city}, ${country}`;
        const tag = document.createElement('p');
        tag.textContent = tagline;
        const cost = document.createElement('p');
        cost.textContent = `${price}€/jour`;

        //Création de la card
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(living);
        article.appendChild(tag);
        article.appendChild(cost);
        return (article); //Retourne les infos dans les cards
    }
    return { name, picture, getUserCardDOM }
}