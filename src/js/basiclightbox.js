const basicLightbox = require('basiclightbox');
import 'basiclightbox/dist/basicLightbox.min.css';

function getLargeImageURL(ev) {
  if (ev.target.tagName === 'IMG') {
    const largeImage = ev.target.dataset.largeimageurl;
    const instance = basicLightbox.create(`
    <img src="${largeImage}" />
    `);
    instance.show();
  }
}

export default getLargeImageURL;
