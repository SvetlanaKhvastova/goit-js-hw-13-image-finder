import refs from './refs.js';
import galleryMarkupHbs from '../templates/gallery.hbs';
import apiService from './apiService';
import loadmoreBtnJs from './load-more-btn.js';

const { gallery } = refs;

function updateGalleryMarkup({ hits, totalHits }) {
  console.log(totalHits);
  console.log(apiService.page);
  console.log(apiService.perPage);

  const markup = galleryMarkupHbs(hits);

  gallery.insertAdjacentHTML('beforeend', markup);

  loadmoreBtnJs.enable();
  loadmoreBtnJs.show();

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  if (apiService.page * apiService.perPage > totalHits + apiService.perPage) {
    loadmoreBtnJs.hide();
  }

  return gallery;
}

export default updateGalleryMarkup;
