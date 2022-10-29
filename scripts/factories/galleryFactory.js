// * Factory de la galerie de chaque photographe
// * ===================================
//  ? FACTORY DE LA GALERIE PHOTOGRAPHER
//  ? ===================================
function galleryFactory (data) {

  // Affichage du total des likes
  async function getTotalLikes () {
    const queryStringUrlId = window.location.search
    const urlSearchParams = new URLSearchParams(queryStringUrlId)
    const id = urlSearchParams.get('id')
    const response = await fetch(jsonUrl)
    const data = await response.json()
    const mediasArray = data.media
    mediasArray.filter((el) => el.photographerId == id) 
    const allPhotographLikesArray = []
    const allCardLikes = document.querySelectorAll('.cards_likes')
    allCardLikes.forEach((heart) => {
      allPhotographLikesArray.push(parseInt(heart.dataset.likes))
    })
    let sum = 0
    for (let i = 0; i < allPhotographLikesArray.length; i++) {
      sum += allPhotographLikesArray[i]
    }
    const totalBottomLikes = document.querySelector('.bottom_likes')
    totalBottomLikes.innerHTML = sum
  }
  getTotalLikes()

  const videoInList = data.video
  if (videoInList !== undefined) {
    const { date, id, video, likes, photographerId, price, title } = data
    const clip = `assets/images/${video}`
    function getImageDOM () {
      const article = document.createElement('article')
      article.setAttribute('id', id)
      article.setAttribute('data-likes', `${likes}`)
      article.setAttribute('data-date', `${date}`)
      article.setAttribute('data-title', `${title}`)
      article.setAttribute('class', 'gallery_cards')
      const vids = document.createElement('video')
      vids.setAttribute('src', clip)
      vids.setAttribute('muted', 'muted')
      article.setAttribute('class', 'gallery_cards')
      vids.className = 'cards_image'
      vids.setAttribute('alt', `${title} vue détaillée`)
      vids.setAttribute('tabindex', '0')
      // vids.setAttribute('poster', 'assets/images/miniatures/vignetteVideoMimi.png')
      const cardInfosContainer = document.createElement('div')
      cardInfosContainer.className = 'cards_infos_container'
      const h2 = document.createElement('h2')
      h2.textContent = title
      h2.className = 'cards_title'
      h2.setAttribute('tabindex', '0')
      const like = document.createElement('p')
      like.textContent = likes
      like.className = 'cards_likes'
      like.setAttribute('data-likes', `${likes}`)
      like.setAttribute('tabindex', '0')
      const heartTag = document.createElement('i')
      heartTag.className = 'fa-sharp fa-solid fa-heart likes-heart'
      heartTag.setAttribute('data-id', `${id}`)
      heartTag.setAttribute('role', 'text')
      heartTag.setAttribute('aria-label', 'likes')
      heartTag.setAttribute('tabindex', '0')
      // Création de la card
      article.appendChild(vids)
      article.appendChild(cardInfosContainer)
      cardInfosContainer.appendChild(h2)
      cardInfosContainer.appendChild(like)
      cardInfosContainer.appendChild(heartTag)
      return article // Retourne les infos dans les cards
    }
    return {
      date,
      id,
      video,
      likes,
      photographerId,
      price,
      title,
      getImageDOM
    }
  }
  const { date, id, image, likes, price, title } = data

  const picture = `assets/images/${image}`
  //*  Création de la carte de chaque photographe
  function getImageDOM () {
    const article = document.createElement('article')
    article.setAttribute('id', id)
    article.setAttribute('class', 'gallery_cards')
    article.setAttribute('data-likes', `${likes}`)
    article.setAttribute('data-date', `${date}`)
    article.setAttribute('data-title', `${title}`)
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.className = 'cards_image'
    img.setAttribute('alt', `${title} vue détaillée`)
    img.setAttribute('tabindex', '0')
    const cardInfosContainer = document.createElement('div')
    cardInfosContainer.className = 'cards_infos_container'
    const h2 = document.createElement('h2')
    h2.textContent = title
    h2.className = 'cards_title'
    h2.setAttribute('tabindex', '0')
    const like = document.createElement('p')
    like.textContent = likes
    like.className = 'cards_likes'
    like.setAttribute('data-likes', `${likes}`)
    like.setAttribute('tabindex', '0')
    document.createElement('span')
    const heartTag = document.createElement('i')
    heartTag.className = 'fa-sharp fa-solid fa-heart likes-heart'
    heartTag.setAttribute('data-id', `${id}`)
    heartTag.setAttribute('role', 'text')
    heartTag.setAttribute('aria-label', 'likes')
    heartTag.setAttribute('tabindex', '0')
  

    // Création de la card
    article.appendChild(img)
    article.appendChild(cardInfosContainer)
    cardInfosContainer.appendChild(h2)
    
    cardInfosContainer.appendChild(like)
    cardInfosContainer.appendChild(heartTag)
    like.setAttribute('tabindex', '0')
    return article // Retourne les infos dans les cards
  }
  return {
    date,
    id,
    image,
    likes,
    price,
    title,
    getImageDOM
  }
  
}