import refs from './refs.js';
import galleryMarkupHbs from '../templates/gallery.hbs';

const { gallery } = refs;

function updateGalleryMarkup(el) {
  const markup = galleryMarkupHbs(el);
  gallery.insertAdjacentHTML('beforeend', markup);
  return gallery;
}

export default updateGalleryMarkup;
