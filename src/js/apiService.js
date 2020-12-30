import errorsNotifications from './pnotify.js';
import loadmoreBtnJs from './load-more-btn.js';

let key = '19680889-1d0fa37b831075dabe336ab4d';
let baseUrl = `https://pixabay.com/api/`;

export default {
  queryEl: '',
  page: 1,
  perPage: 12,

  getFetch() {
    let url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.queryEl}&page=${this.page}&per_page=${this.perPage}&key=${key}`;

    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error feching data');
      })
      .then(({ hits, totalHits }) => {
        if (hits.length > 0) {
          this.incrementPage();
          return { hits, totalHits };
        }
        errorsNotifications('Nothing was found for your request.');
        loadmoreBtnJs.disable();
        loadmoreBtnJs.hide();
      })
      .catch(error => {
        return error;
      });
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.queryEl;
  },

  set query(value) {
    this.queryEl = value;
  },
};
