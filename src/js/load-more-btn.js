import refs from './refs.js';

const { searchBtn, label, spinner } = refs;

export default {
  enable() {
    searchBtn.disabled = false;
    label.textContent = 'Load more';
    spinner.classList.add('is-hidden');
  },

  disable() {
    searchBtn.disabled = true;
    label.textContent = 'Loading...';
    spinner.classList.remove('is-hidden');
  },

  show() {
    searchBtn.classList.remove('is-hidden');
  },

  hide() {
    searchBtn.classList.add('is-hidden');
  },
};
