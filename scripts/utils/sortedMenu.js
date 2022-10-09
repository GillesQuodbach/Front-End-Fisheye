// console.log(likesArray.length);
// // console.log(data.likes.length);
// if (likesArray.length >= data.likes.length) {
//   console.log("le tableau est déjà rempli");
// } else {
//   likesArray.push(data.likes);
// }
// const initialValue = 0;
// totalLikes = likesArray.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
// // totalLikes = totalLikesReduce;
// const likesBox = document.querySelector(".bottom_likes");
// likesBox.textContent = `${totalLikes}`;
// // console.log(totalLikes);
window.onload = () => {
  let allLikes = document.querySelectorAll("dataLikes");
  console.log(allLikes);
  const cardHearts = document.querySelectorAll(".likes-heart");
  cardHearts.forEach((cardHeart) => {
    cardHeart.addEventListener("click", (event) => {
      let dataId = event.target.getAttribute("data-id");
      const thisCardLikes = document.querySelector(`.cards_likes-${dataId}`);
      const bottom_likes = document.querySelector(".bottom_likes");
      event.target.classList.toggle("cardHeart-no");
      let cardLikesContent = Number(thisCardLikes.innerHTML);
      let photographTotalLikes = Number(bottom_likes.innerHTML);
      if (event.target.classList.contains("cardHeart-yes")) {
        alert("Vous avez déja liké cette photo");
      } else {
        console.log(dataId);
        thisCardLikes.innerHTML = cardLikesContent + 1;
        // event.target.classList.toggle("cardHeart-yes");
        bottom_likes.innerHTML = photographTotalLikes + 1;
        event.target.classList.add("cardHeart-yes");
        event.target.classList.remove("cardHeart-no");
      }
    });
  });
};
