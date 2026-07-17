import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

export const loadCategories = () => {
  // missing implementation
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  return getMoviesGeneralInfo(categoryId);
};

export const loadSingleMovie = (id) => {
  // missing implementation
};

export const loadSearchMovies = (searchTerm = '') => {
  // missing implementation
};
