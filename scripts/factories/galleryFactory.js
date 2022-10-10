//! FACTORY DE LA GALERIE PHOTOGRAPHER
//! ===================================
const likesArray = [];
const totalLikes = '';

function galleryFactory(data) {
  const videoInList = data.video;
  if (videoInList !== undefined) {
    const { date, id, video, likes, photographerId, price, title } = data;

    const clip = `assets/images/${video}`;
    // Création de la carte de chaque photographe
    function getImageDOM() {
      // Cards container
      const article = document.createElement('article');
      article.setAttribute('id', id);
      article.setAttribute('data-likes', `${likes}`);
      article.setAttribute('data-date', `${date}`);
      article.setAttribute('data-title', `${title}`);
      article.setAttribute('class', 'gallery_cards');
      // Card image
      const vids = document.createElement('video');
      vids.setAttribute('src', clip);
      // vids.setAttribute("controls", "controls");
      vids.setAttribute('muted', 'muted');
      article.setAttribute('class', 'gallery_cards');
      vids.className = 'cards_image';
      vids.setAttribute('alt', `${title}`);
      // Cards infos container
      const cardInfosContainer = document.createElement('div');
      cardInfosContainer.className = 'cards_infos_container';
      // Photographer name
      const h2 = document.createElement('h2');
      h2.textContent = title;
      h2.className = 'cards_title';
      // Affichage des likes sur chaque card
      const like = document.createElement('p');
      like.textContent = likes;
      like.className = 'cards_likes';
      like.setAttribute('data-likes', `${likes}`);
      // Affichage du COEUR sur chaque card
      const heartTag = document.createElement('i');
      heartTag.className = 'fa-sharp fa-solid fa-heart likes-heart';
      heartTag.setAttribute('data-id', `${id}`);
      //! RAJOUTER PRIX ET CUMUL DES LIKES

      // Création de la card
      article.appendChild(vids);
      article.appendChild(cardInfosContainer);
      cardInfosContainer.appendChild(h2);
      cardInfosContainer.appendChild(like);
      cardInfosContainer.appendChild(heartTag);
      return article; // Retourne les infos dans les cards
    }
    return {
      date,
      id,
      video,
      likes,
      photographerId,
      price,
      title,
      getImageDOM,
    };
  }
  const { date, id, image, likes, price, title } = data;

  const picture = `assets/images/${image}`;
  // Création de la carte de chaque photographe
  function getImageDOM() {
    // Cards container
    const article = document.createElement('article');
    article.setAttribute('id', id);
    article.setAttribute('class', 'gallery_cards');
    article.setAttribute('data-likes', `${likes}`);
    article.setAttribute('data-date', `${date}`);
    article.setAttribute('data-title', `${title}`);
    // Card image
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.className = 'cards_image';
    img.setAttribute('alt', `${title}`);
    // Cards infos container
    const cardInfosContainer = document.createElement('div');
    cardInfosContainer.className = 'cards_infos_container';
    // Photographer name
    const h2 = document.createElement('h2');
    h2.textContent = title;
    h2.className = 'cards_title';
    // Affichage des likes sur chaque card
    const like = document.createElement('p');
    like.textContent = likes;
    like.className = 'cards_likes';
    like.setAttribute('data-likes', `${likes}`);
    // like.setAttribute(`data-id`, `${id}`);
    // Affichage du COEUR sur chaque card
    // Affichage du COEUR sur chaque card
    const spanTag = document.createElement('span');
    const heartTag = document.createElement('i');
    heartTag.className = 'fa-sharp fa-solid fa-heart likes-heart';
    heartTag.setAttribute('data-id', `${id}`);

    // Création de la card
    article.appendChild(img);
    article.appendChild(cardInfosContainer);
    cardInfosContainer.appendChild(h2);
    cardInfosContainer.appendChild(like);
    cardInfosContainer.appendChild(heartTag);
    return article; // Retourne les infos dans les cards
  }
  return {
    date,
    id,
    image,
    likes,
    price,
    title,
    getImageDOM,
  };
}
