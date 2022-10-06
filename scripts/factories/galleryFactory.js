//! FACTORY DE LA GALERIE PHOTOGRAPHER
//!===================================
let likesArray = [];

function galleryFactory(data) {
  //! ICI TOTAL LIKES
  let videoInList = data.video;
  likesArray.push(data.likes);
  const initialValue = 0;
  let totalLikesReduce = likesArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  totalLikes = totalLikesReduce;
  const likesBox = document.querySelector(".bottom_likes");
  likesBox.innerText = `${totalLikes}`;
  console.log(totalLikes);

  if (videoInList !== undefined) {
    const { date, id, video, likes, photographerId, price, title } = data;

    const clip = `assets/images/${video}`;
    //Création de la carte de chaque photographe
    function getImageDOM() {
      // Cards container
      const article = document.createElement("article");
      article.setAttribute("id", id);
      // article.setAttribute("class", 'gallery_cards');
      //Card image
      const vids = document.createElement("video");
      vids.setAttribute("src", clip);
      vids.setAttribute("controls", "controls");
      vids.setAttribute("muted", "muted");
      article.setAttribute("class", "gallery_cards");
      vids.className = "cards_image";
      vids.setAttribute("alt", `${title}`);
      // Cards infos container
      const cardInfosContainer = document.createElement("div");
      cardInfosContainer.className = "cards_infos_container";
      // Photographer name
      const h2 = document.createElement("h2");
      h2.textContent = title;
      h2.className = "cards_title";
      //Affichage des likes sur chaque card
      const like = document.createElement("p");
      like.textContent = likes;
      like.className = `cards_likes cards_likes-${id}`;
      //Affichage du COEUR sur chaque card
      const heartTag = document.createElement("i");
      heartTag.className = `fa-sharp fa-solid fa-heart likes-heart`;
      heartTag.setAttribute(`data-id`, `${id}`);
      //! RAJOUTER PRIX ET CUMUL DES LIKES

      //Création de la card
      article.appendChild(vids);
      article.appendChild(cardInfosContainer);
      cardInfosContainer.appendChild(h2);
      cardInfosContainer.appendChild(like);
      cardInfosContainer.appendChild(heartTag);
      return article; //Retourne les infos dans les cards
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
  } else {
    const { date, id, image, likes, price, title } = data;

    const picture = `assets/images/${image}`;
    //Création de la carte de chaque photographe
    function getImageDOM() {
      // Cards container
      const article = document.createElement("article");
      article.setAttribute("id", id);
      article.setAttribute("class", "gallery_cards");
      //Card image
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.className = "cards_image";
      img.setAttribute("alt", `${title}`);
      // Cards infos container
      const cardInfosContainer = document.createElement("div");
      cardInfosContainer.className = "cards_infos_container";
      // Photographer name
      const h2 = document.createElement("h2");
      h2.textContent = title;
      h2.className = "cards_title";
      //Affichage des likes sur chaque card
      const like = document.createElement("p");
      like.textContent = likes;
      like.className = `cards_likes cards_likes-${id}`;
      // like.setAttribute(`data-id`, `${id}`);
      //Affichage du COEUR sur chaque card
      //Affichage du COEUR sur chaque card
      const spanTag = document.createElement("span");
      const heartTag = document.createElement("i");
      heartTag.className = "fa-sharp fa-solid fa-heart likes-heart";
      heartTag.setAttribute(`data-id`, `${id}`);

      //Création de la card
      article.appendChild(img);
      article.appendChild(cardInfosContainer);
      cardInfosContainer.appendChild(h2);
      cardInfosContainer.appendChild(like);
      cardInfosContainer.appendChild(heartTag);
      return article; //Retourne les infos dans les cards
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
}
