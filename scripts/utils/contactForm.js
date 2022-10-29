//* Gestion du formulaire de contact

const mainContent = document.querySelector('#main')
async function _displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.setAttribute('aria-hidden', 'false')
  mainContent.setAttribute('aria-hidden', 'true')
  const jsonUrl = 'data/photographers.json'
  modal.style.display = 'block'
  const queryStringUrlId = window.location.search
  const urlSearchParams = new URLSearchParams(queryStringUrlId)
  const id = urlSearchParams.get('id')
  const response = await fetch(jsonUrl)
  const data = await response.json()
  const photographersData = data.photographers
  const sortedById = {}
  for (let i = 0, len = photographersData.length; i < len; i++) {
    sortedById[photographersData[i].id] = photographersData[i]
  }
  const photographerName = sortedById[id].name
  const name = document.querySelector('.photograph-contact-name')
  name.innerText = `${photographerName}`

  // * Focus 1er inputs
  function getFocus () {
    document.getElementById('firstname').focus()
  }
  getFocus()
}

const contactButton = document.querySelector('.form_open_button')
// * FERMETURE FORMULAIRE
function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  modal.setAttribute('aria-hidden', 'true')
  mainContent.setAttribute('aria-hidden', 'false')
  contactButton.focus()
}

// * Validation et récupération infos formulaire

const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const message = document.querySelector('#contact-message')
const myForm = document.querySelector('#contact_form')

// * Messages erreur

const firstNameErrorMsg = document.querySelector('.firstname-error')
const lastNameErrorMsg = document.querySelector('.lastname-error')
const emailErrorMsg = document.querySelector('.email-error')
const msgErrorMsg = document.querySelector('.contact-message-error')

// * Régexp de contrôle du mail

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

// * Validation formulaire

myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (validate(myForm) === true) {
    firstName.setAttribute('aria-invalid', 'false')
    lastName.setAttribute('aria-invalid', 'false')
    email.setAttribute('aria-invalid', 'false')
    message.setAttribute('aria-invalid', 'false')
    firstNameErrorMsg.innerHTML = ""
    lastNameErrorMsg.innerHTML = ""
    emailErrorMsg.innerHTML = ""
    msgErrorMsg.innerHTML = ''
    console.log(`
    Prénom: ${firstName.value}
    Nom: ${lastName.value}
    Email: ${email.value}
    Message: ${message.value}
    `)
  }
})

// * Fonction de validation

function validate () {
  if (firstName.value === '') {
    firstNameErrorMsg.innerHTML = "Merci d'entrer un prénom valide."
    firstName.setAttribute('aria-invalid', 'true')
  }
  if (lastName.value === '') {
    lastNameErrorMsg.innerHTML = "Merci d'entrer un nom valide."
    lastName.setAttribute('aria-invalid', 'true')
  }
  const testMail = emailRegExp.test(email.value)
  if (testMail === false || email.value === '') {
    emailErrorMsg.innerHTML = "Merci d'entrer un email valide."
    email.setAttribute('aria-invalid', 'true')
  }
  if (message.value === '') {
    msgErrorMsg.innerHTML = 'Vous avez oublié votre message...'
    message.setAttribute('aria-invalid', 'true')
  }
  if (!firstName.value || !lastName.value || !testMail || !emailErrorMsg) {
    return false
  }

  return true
}
