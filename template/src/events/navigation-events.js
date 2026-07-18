import { ABOUT, CATEGORIES, CONTAINER_SELECTOR, FAVORITES, HOME } from '../common/constants.js';
import { toAboutView } from '../views/about-view.js';
import { toCategoriesView } from '../views/category-view.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import { loadCategories } from '../requests/request-service.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  // missing implementation
};

export const renderCategory = (categoryId = null) => {
  // missing partial implementation

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  const categories = loadCategories();
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = () => {
  // missing implementation
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
