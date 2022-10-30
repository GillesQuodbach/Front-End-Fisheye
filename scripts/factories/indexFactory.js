//* Factory de la page index

function _photographerFactory (data) {
    const { name, id, portrait, city, country, tagline, price } = data
    const picture = `assets/photographers/${portrait}`
    // Création de la carte de chaque photographe
    function getUserCardDOM () {
      // Cards container
      const article = document.createElement('figure')
      article.setAttribute('id', id)
      article.setAttribute('class', 'cards-container')
      
      const readerLink = document.createElement('a')
      readerLink.setAttribute('class', 'photograph-profile')
      readerLink.setAttribute('href', `photographer.html?id=${this.id}`)
      readerLink.setAttribute('tabindex', '0')  
      readerLink.setAttribute('aria-label', `${name} `)
      // readerLink.setAttribute('role', 'link')
      const img = document.createElement('img')
      img.setAttribute('src', picture)
      img.className = 'detail-profile-image'
      img.setAttribute('alt', '')
      // Photographer name
      const h2 = document.createElement('h2')
      h2.textContent = name
      h2.className = 'name'
      // Photographers living place
      const profileText = document.createElement('figcaption')
      profileText.setAttribute('class', 'profile-text')
      profileText.setAttribute('tabindex', '0')
      const livingPlace = document.createElement('p')
      livingPlace.innerHTML = `${city}, ${country}`
      livingPlace.className = 'living-place'
      // Photographers tag-line
      const tag = document.createElement('p')
      tag.textContent = tagline
      tag.className = 'tag-line'
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
