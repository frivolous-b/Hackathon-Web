import { renderFavoriteStatus } from '../events/favorites-events.js';
import { MOVIE_BTN_CLASS, MOVIE_ID_ATTR } from '../common/constants.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
${toMovieDetailed(movie)}
`;

export const toMovieSimple = (movie) => `
<div class="movie-simple">
  <img src="${movie.poster}" alt="${movie.title} poster" />
  <div class="movie-info">
    <h3>${movie.title} <span class="year">(${movie.year})</span></h3>
    <p class="genre">${movie.genre}</p>
    <button class="${MOVIE_BTN_CLASS}" ${MOVIE_ID_ATTR}="${movie.id}">Details</button>
    ${renderFavoriteStatus(movie.id)}
  </div>
</div>
`;

const toMovieDetailed = (movie) => `
<div class="movie-details">
  <img src="${movie.poster}" alt="${movie.title}">
  <div class="movie-details-info">
    <h1>${movie.title}</h1>
    <p>${movie.year} | ${movie.genre}</p>
    <p>${movie.description}</p>
    <p>Director: ${movie.director}</p>
    <p>Stars: ${movie.stars.join(', ')}</p>
  </div>
</div>
`;
