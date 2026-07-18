import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderCategory, renderMovieDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { CATEGORY_BTN_CLASS, CATEGORY_ID_ATTR, MOVIE_BTN_CLASS, MOVIE_ID_ATTR } from './common/constants.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // show category events
    if (event.target.classList.contains(CATEGORY_BTN_CLASS)) {
      renderCategory(+event.target.getAttribute(CATEGORY_ID_ATTR));
    }

    // show movie events
    if (event.target.classList.contains(MOVIE_BTN_CLASS)) {
      renderMovieDetails(+event.target.getAttribute(MOVIE_ID_ATTR));
    }

    // toggle favorite event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
    }

  });

  // search events
  q('input#search').addEventListener('input', event => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);

});