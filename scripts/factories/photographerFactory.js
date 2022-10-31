
function photographerProfilFactory (data) {
  const { name, id, portrait, city, country, tagline, price, likes } = data
  const picture = `assets/photographers/${portrait}`
  // Création de la carte de chaque photographe
  function getProfilCardDOM () {
    // Profile photographe
    const profileHeader = document.querySelector('.photograph-header')
    // Div profileInfos
    const profileInfos = document.createElement('article')
    profileInfos.setAttribute('class', 'photograph-profile-infos')
    profileInfos.setAttribute('role', 'text')

    profileInfos.setAttribute('aria-label', `${name}`)
    // Card image
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.className = 'photograph-profile-photo'
    img.setAttribute('alt', `${name}`)
    // img.setAttribute('role', 'img')
    img.setAttribute('tabindex', '0')
    // img.setAttribute('tabindex', '0')

    // Photographer name
    const h2 = document.createElement('h1')
    h2.textContent = name
    h2.className = 'photograph-profile-name'
    h2.setAttribute('tabindex', '0')
    // h2.setAttribute('role', 'text')
    // Photographers living place
    const profileInfosBox = document.createElement('div')
    profileInfosBox.className = 'profile-infos-box'
    // profileInfosBox.setAttribute('role', 'text')
    profileInfosBox.setAttribute('tabindex', '0')
    profileInfosBox.setAttribute('role', 'text')

    const livingPlace = document.createElement('p')
    livingPlace.innerHTML = `${city}, ${country}`
    livingPlace.className = 'photograph-profile-living-place'
    // Photographers tagline
    const tag = document.createElement('p')
    tag.textContent = tagline
    tag.className = 'photograph-profile-tagline'
    // Photographers likes
    const totalLikes = document.querySelector('.fixed-likes')
    totalLikes.className = 'bottom-likes'
    totalLikes.setAttribute('role', 'text')
    // Photographers price
    const cost = document.querySelector('.fixed-price')
    cost.textContent = `${price}€ / jour`
    cost.className = 'bottom-price'
    profileHeader.insertAdjacentElement('afterbegin', profileInfos)
    profileHeader.insertAdjacentElement('beforeend', img)
    profileInfos.appendChild(profileInfosBox)
    profileInfos.insertAdjacentElement('afterbegin', h2)
    profileInfosBox.appendChild(livingPlace)
    profileInfosBox.appendChild(tag)
  }
  return {
    name,
    id,
    portrait,
    city,
    country,
    tagline,
    price,
    likes,
    getProfilCardDOM
  }
}