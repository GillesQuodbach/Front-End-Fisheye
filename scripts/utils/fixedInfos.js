let currentMedia = {};
async function getFixedLikesAndPrice() {
  //Récupération de l'ID de la page
  const queryString_url_id = window.location.search;
  const urlSearchParams = new URLSearchParams(queryString_url_id);
  const id = urlSearchParams.get("id");
  console.log(id); //Affiche l'id du photographe selectionné (243)
  // Récupération des données du fichier JSON
  const response = await fetch(json_url);
  //Conversion des datas en JSON
  const data = await response.json();
  //Affichage du tableau des photographes
  //Lien vers le fichier JSON
  // console.log(data); //Contenu complet du JSON
  let mediasArray = data.media;
  //Affiche la partie media ET photographers du JSON
  let filteredMedia = mediasArray.filter(function (el) {
    return el.photographerId == id;
  });
  console.log({ filteredMedia }); //Affiche toutes les images du photographe

  //! Nombre total de likes
  let totalLikes = 0;
  filteredMedia.forEach(function (el) {
    totalLikes += el.likes;
    console.log(totalLikes); //
  });
  //Incrément likes
  currentMedia = filteredMedia;
  const fixPriceBox = document.querySelector(".bottom_likes");
  fixPriceBox.innerText = `${totalLikes}`;
  //Modif prix dans photographersFactory.js
}
getFixedLikesAndPrice();

window.onload = () => {
  const hearts = document.querySelectorAll(".likes-heart");
  const articles = document.querySelectorAll(".gallery_cards");
  let currentArticleId = "";
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      const articleId = heart.getAttribute("data-id");
      console.log(articleId);
      currentArticleId = articleId;
    });
    //On récupère l'id de l'article
  });
  console.log(currentArticleId); // ID de la cards sélectionnée
  console.log(currentMedia[0]); // tableau d'objet du photographe
};
