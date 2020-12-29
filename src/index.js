import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import refs from './js/refs.js';
import apiService from './js/apiService.js';
import updateGalleryMarkup from './js/galleryMarkup.js';
import getLargeImageURL from './js/basiclightbox.js';
import loadmoreBtnJs from './js/load-more-btn.js';
import errorsNotifications from './js/pnotify.js';

const { form, input, gallery, searchBtn } = refs;

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

  loadmoreBtnJs.enable();
  loadmoreBtnJs.show();

  apiService.getFetch().then(updateGalleryMarkup);

  input.value = '';
}

function loadMoreBtn() {
  loadmoreBtnJs.disable();

  loadmoreBtnJs.enable();
  loadmoreBtnJs.show();

  apiService.getFetch().then(updateGalleryMarkup);
}

function clearArticlesGallery() {
  gallery.innerHTML = '';
}
