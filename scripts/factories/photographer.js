function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    //Création de la carte de chaque photographe
    function getUserCardDOM() {
        // Cards container
        const article = document.createElement( 'article' );
        article.setAttribute("id", id);
        article.setAttribute('class', 'cardsLink');

        //Card image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.className = "profil_image";
        img.setAttribute("alt", "FishEye Home page");
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
        // Photographers price
        const cost = document.createElement('p');
        cost.textContent = `${price}€/jour`;
        cost.className = "price";
        //Création de la card
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(livingPlace);
        article.appendChild(tag);
        article.appendChild(cost);

        return (article); //Retourne les infos dans les cards

    }
    let cardsLinks = document.querySelectorAll('article')
    console.log(cardsLinks);


    cardsLinks.forEach((cardsLink)=>
        cardsLink.addEventListener("click", ()=> {
            window.location = `photographer.html?${cardsLink.id}`}));

    // cardsLinks.forEach((cardsLink) => {
    //     cardsLink.addEventListener("click", () => {
    //        window.location = `photographer.html?${cardsLink.id}`
    //     });
    // })
    return { name, picture, getUserCardDOM }
}