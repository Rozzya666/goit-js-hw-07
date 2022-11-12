import { galleryItems } from './gallery-items.js';
// import { SimpleLightbox } from "./simple-lightbox.min.js";
// Change code below this line

console.log(galleryItems);

const mainGallary = document.querySelector('.gallery')
galleryItems.map(galleryItem => {
    let link = document.createElement('a')
    link.classList.add('gallery__item')
    link.href = galleryItem.original
    // link.setAttribute('data-ligthbox', 'group')
    link.addEventListener('click', e => {
        e.preventDefault()
    })
    let img = document.createElement('img')
    img.classList.add('gallery__image')
    img.alt = galleryItem.description
    img.src = galleryItem.preview
    img.title = galleryItem.description
    mainGallary.appendChild(link)
    link.appendChild(img)
    img.setAttribute('data-alt', galleryItem.description)
})

new SimpleLightbox('.gallery a', {
    widthRatio: 0.7,
    heightRatio: 0.7
});
