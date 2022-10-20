function _photographerFactory (data) {
  const { name, id, portrait, city, country, tagline, price } = data
  const picture = `assets/photographers/${portrait}`
  // Création de la carte de chaque photographe
  function getUserCardDOM () {
    // Cards container
    // Cards container
    // Cards container
    const article = document.createElement('article')
    article.setAttribute('id', id)
    article.setAttribute('class', 'cardsLink')
    const readerLink = document.createElement('div')
    readerLink.setAttribute('class', 'photograph-profile')
    readerLink.setAttribute('role', 'link')
    readerLink.setAttribute('aria-label', `${name} `)
    readerLink.setAttribute('tabindex', '0')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.className = 'detail_profile_image'
    img.setAttribute('alt', `Photo de ${name}`)
    // Photographer name
    const h2 = document.createElement('h2')
    h2.textContent = name
    h2.className = 'name'
    // Photographers living place
    const profileText = document.createElement('div')
    profileText.setAttribute('class', 'profile-text')
    const livingPlace = document.createElement('p')
    livingPlace.innerHTML = `${city}, ${country}`
    livingPlace.className = 'living-place'
    // Photographers tagline
    const tag = document.createElement('p')
    tag.textContent = tagline
    tag.className = 'tagline'
    // Photographers price
    const cost = document.createElement('p')
    cost.textContent = `${price}€/jour`
    cost.className = 'price'
    // Création de la card
    article.appendChild(readerLink)
    readerLink.appendChild(img)
    readerLink.appendChild(h2)
    article.appendChild(profileText)
    profileText.appendChild(livingPlace)
    profileText.appendChild(tag)
    profileText.appendChild(cost)
    return article // Retourne les infos dans les cards
  }
  return {
    name,
    id,
    portrait,
    city,
    country,
    tagline,
    price,
    getUserCardDOM
  }
}
