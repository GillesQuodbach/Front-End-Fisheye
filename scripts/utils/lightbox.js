const closeLightBoxButton = document.querySelector('.lightbox_close');
const lightBox = document.querySelector('.lightbox');
closeLightBoxButton.addEventListener('click', closeLightBox);

function closeLightBox() {
    lightBox.style.display = 'none';
}

class Lightbox {

    static init() {
        const links = document.querySelectorAll(`a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]`).forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'))}))
}

/** 
 * @param {string} url 
 * URL de l'image
*/
constructor(url) {
 const element = this.buildDOM(url);
 document.body.appendChild(element);
}

buildDOM(url) {
    const dom = document.createElement('div')
    document.classList.add('lightbox');
    dom.innerHTML = `<button class="lightbox_close">X</button>
    <button class="lightbox_next">Next</button>
    <button class="lightbox_prev">Prev</button>
    <div class="lightbox_container">
      <img src="https://picsum.photos/1000/900" alt="">
    </div>`
    return dom
}

}

/* <div class="lightbox">
      <button class="lightbox_close">X</button>
      <button class="lightbox_next">Next</button>
      <button class="lightbox_prev">Prev</button>
      <div class="lightbox_container">
        <img src="https://picsum.photos/1000/900" alt="">
      </div>
    </div> */