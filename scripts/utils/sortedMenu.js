document.querySelector("#menu").addEventListener("click", openSortedMenu);

function openSortedMenu() {
  document.querySelector("#dropdown").classList.toggle("active");
}

window.onload = () => {
  // Récupère la galerie en cours
  let currentGallery = document.querySelectorAll(".gallery_cards");
  console.log(currentGallery);
};
