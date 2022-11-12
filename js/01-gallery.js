// import basicLightboxMin from './basicLightbox.min.js';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const mainGallary = document.querySelector('.gallery')
galleryItems.map(galleryItem => {
    let link = document.createElement('a')
    link.classList.add('gallery__link')
    link.href = galleryItem.preview
    link.addEventListener('click', e => {
        e.preventDefault()
        
    })
    let img = document.createElement('img')
    img.classList.add('gallery__image')
    img.alt = galleryItem.description
    img.src = galleryItem.preview
    img.setAttribute('data-source', galleryItem.original)
    mainGallary.appendChild(link)
    link.appendChild(img)
})
mainGallary.addEventListener('click', e => {
    e.preventDefault()
    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`
    );
instance.show();

})
