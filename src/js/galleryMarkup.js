import refs from './refs.js';
import galleryMarkupHbs from '../templates/gallery.hbs';

const { gallery } = refs;

function updateGalleryMarkup(el) {
  const markup = galleryMarkupHbs(el);
  gallery.insertAdjacentHTML('beforeend', markup);

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return gallery;
}

export default updateGalleryMarkup;
