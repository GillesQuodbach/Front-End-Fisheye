const loadedLikesGallery = document.querySelector("#photograph_gallery"); // Attente du chargement de la page

// let likesObserver = new MutationObserver(modifDomGalleryLikes);
// likesObserver.observe(loadedLikesGallery, { childList: true });

// function modifDomGalleryLikes(mutations) {
//   for (let mutation of mutations) {
//     if (mutation.type === "childList") {
//?Click on hearts
window.onload = () => {
  let allPhotographLikesArray = [];
  const allCardHearts = document.querySelectorAll(".cards_likes");
  allCardHearts.forEach((heart) => {
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
};
//Récupère nodeList avec dataset (likes)
//   allCardHearts.forEach((cardHeart) => {
//     cardHeart.addEventListener("click", (event) => {
//       const thisCardLikes = event.target.querySelector(".card_heart");
//       console.log(thisCardLikes);
//   const bottom_likes = document.querySelector(".bottom_likes");
//   event.target.classList.toggle("cardHeart-no");
//   console.log(thisCardLikes);
//   let cardLikesContent = Number(thisCardLikes.innerHTML);
//   let photographTotalLikes = Number(bottom_likes.innerHTML);
//   if (event.target.classList.contains("cardHeart-yes")) {
//     alert("Vous avez déja liké cette photo");
//   } else {
//     thisCardLikes.innerHTML = cardLikesContent + 1;
//     event.target.classList.toggle("cardHeart-yes");
//     bottom_likes.innerHTML = photographTotalLikes + 1;
//     event.target.classList.add("cardHeart-yes");
//     event.target.classList.remove("cardHeart-no");
//   }
//     });
//   });
// };

// const loadedGallery = document.querySelector("#photograph_gallery"); // Attente du chargement de la page

// let observer = new MutationObserver(modifDomGalleryLikes);
// observer.observe(loadedGallery, { childList: true });

// function modifDomGalleryLikes(mutations) {
//   for (let mutation of mutations) {
//     if (mutation.type === "childList") {

//         //?Click on hearts
//   const cardHearts = document.querySelectorAll(".likes-heart");
//   cardHearts.forEach((cardHeart) => {
//     cardHeart.addEventListener("click", (event) => {
//       let dataId = event.target.getAttribute("data-id");
//       const thisCardLikes = document.querySelector(`.cards_likes-${dataId}`);
//       const bottom_likes = document.querySelector(".bottom_likes");
//       event.target.classList.toggle("cardHeart-no");
//       let cardLikesContent = Number(thisCardLikes.innerHTML);
//       let photographTotalLikes = Number(bottom_likes.innerHTML);
//       if (event.target.classList.contains("cardHeart-yes")) {
//         alert("Vous avez déja liké cette photo");
//       } else {
//         console.log(dataId);
//         thisCardLikes.innerHTML = cardLikesContent + 1;
//         // event.target.classList.toggle("cardHeart-yes");
//         bottom_likes.innerHTML = photographTotalLikes + 1;
//         event.target.classList.add("cardHeart-yes");
//         event.target.classList.remove("cardHeart-no");
//       }
//     });
//   });
// };
