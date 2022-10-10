window.onload = () => {
  //! Gestion du total des likes du photographe
  let allPhotographLikesArray = [];
  const allCardLikes = document.querySelectorAll(".cards_likes");
  allCardLikes.forEach((heart) => {
    console.log(heart.dataset.likes);
    allPhotographLikesArray.push(parseInt(heart.dataset.likes));
  });
  console.log(allPhotographLikesArray);
  let sum = 0;
  for (let i = 0; i < allPhotographLikesArray.length; i++) {
    sum += allPhotographLikesArray[i];
  }
  console.log(sum);
  let totalBottomLikes = document.querySelector(".bottom_likes");
  totalBottomLikes.innerHTML = sum;

  let allGalleryHearts = document.querySelectorAll(".likes-heart");
};
