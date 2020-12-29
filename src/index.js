import './styles.css';
import refs from './js/refs.js';
import apiService from './js/apiService.js';
import updateGalleryMarkup from './js/galleryMarkup.js';
import getLargeImageURL from './js/basiclightbox.js';
import loadmoreBtnJs from './js/load-more-btn.js';
import errorsNotifications from './js/pnotify.js';

const { form, gallery, searchBtn } = refs;

form.addEventListener('submit', galleryOnSubmit);
gallery.addEventListener('click', getLargeImageURL);
searchBtn.addEventListener('click', loadMoreBtn);

loadmoreBtnJs.hide();

function galleryOnSubmit(ev) {
  ev.preventDefault();

  clearArticlesGallery();

  apiService.query = ev.currentTarget.elements.query.value;
  if (apiService.query === '') {
    loadmoreBtnJs.hide();
    return errorsNotifications('Enter something on the line.');
  }

  apiService.resetPage();

  loadmoreBtnJs.disable();

  apiService.getFetch().then(updateGalleryMarkup);

  loadmoreBtnJs.enable();
  loadmoreBtnJs.show();
}

function loadMoreBtn() {
  loadmoreBtnJs.disable();

  apiService.getFetch().then(updateGalleryMarkup);

  loadmoreBtnJs.enable();
  loadmoreBtnJs.show();

  window.scrollTo(0, 1000);
  window.scrollTo({
    top: 35,
    behavior: 'smooth',
  });
}

function clearArticlesGallery() {
  gallery.innerHTML = '';
}
