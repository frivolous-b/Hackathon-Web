import { CONTAINER_SELECTOR, HOME } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView } from '../views/movie-views.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { loadCategory, loadMovies } from '../requests/request-service.js';
import { getFavorites } from '../data/favorites.js';
import { q, setActiveNav } from './helpers.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

      // missing partial implementation

    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  // missing implementation
};

export const renderCategory = (categoryId = null) => {
  const category = loadCategory(categoryId);
  const movies = loadMovies(categoryId);

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  // missing implementation
};

const renderFavorites = () => {
  const favoriteIds = getFavorites();
  const favoriteMovies = loadMovies().filter(movie => favoriteIds.includes(movie.id));

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteMovies);
};

const renderAbout = () => {
  // missing implementation
};
