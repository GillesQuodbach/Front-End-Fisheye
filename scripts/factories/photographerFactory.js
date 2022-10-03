// !FACTORY DE CHAQUE PHOTOGRAPHE PAGE INDEX
//!===================================
function photographerFactory(data) {
  const { name, id, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;
  //Création de la carte de chaque photographe
  function getUserCardDOM() {
    // Cards container
    const article = document.createElement("article");
    article.setAttribute("id", id);
    article.setAttribute("class", "cardsLink");
    //Card image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "detail_profile_image";
    img.setAttribute("alt", `Photo de profil de ${name}`);
    // Photographer name
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.className = "name";
    // Photographers living place
    const livingPlace = document.createElement("p");
    livingPlace.innerHTML = `${city}, ${country}`;
    livingPlace.className = "living-place";
    // Photographers tagline
    const tag = document.createElement("p");
    tag.textContent = tagline;
    tag.className = "tagline";
    // Photographers price
    const cost = document.createElement("p");
    cost.textContent = `${price}€/jour`;
    cost.className = "price";
    //Création de la card
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(livingPlace);
    article.appendChild(tag);
    article.appendChild(cost);
    return article; //Retourne les infos dans les cards
  }
  return { name, picture, id, getUserCardDOM };
}

// !FACTORY DU PROFIL DE CHAQUE PHOTOGRAPHE PAGE PHOTOGRAPHER
//!===================================
function photographerProfilFactory(data) {
  const { name, id, portrait, city, country, tagline, price, likes } = data;
  const picture = `assets/photographers/${portrait}`;
  //Création de la carte de chaque photographe
  function getProfilCardDOM() {
    // Cards container
    const article = document.createElement("article");
    article.setAttribute("id", id);
    article.setAttribute("class", "cardsLink");
    //Card image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "detail_profile_image";
    img.setAttribute("alt", `Photo de profil de ${name}`);
    // Photographer name
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.className = "name";
    // Photographers living place
    const livingPlace = document.createElement("p");
    livingPlace.innerHTML = `${city}, ${country}`;
    livingPlace.className = "living-place";
    // Photographers tagline
    const tag = document.createElement("p");
    tag.textContent = tagline;
    tag.className = "tagline";
    // Photographers likes
    const totalLikes = document.querySelector(".fixed_likes");
    totalLikes.textContent = `${likes}`;
    totalLikes.className = "bottom_likes";
    // Photographers price
    const cost = document.querySelector(".fixed_price");
    cost.textContent = `${price}€/jour`;
    cost.className = "bottom_price";
    //Création de la card
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(livingPlace);
    article.appendChild(tag);
    // article.appendChild(cost);
    return article; //Retourne les infos dans les cards
  }
  return { name, picture, id, likes, getProfilCardDOM };
}
