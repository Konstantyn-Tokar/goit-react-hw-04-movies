const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `3d673b2d8e40eafc68577fae5a6a1f4b`;
const TRENDING_URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
const FILM_SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
const MOVIE_BY_ID = `${BASE_URL}/movie`;

const fatchTrending = () => {
  const url = `${TRENDING_URL}&page=1`;

  return fetch(url).then((response) => response.json());
};

const fathSearch = (searchQuery) => {
  const url = `${FILM_SEARCH_URL}&query=${searchQuery}&page=1`;

  return fetch(url).then((response) => response.json());
};

const getMovieDyId = (id) => {
  const url = `${MOVIE_BY_ID}/${id}?api_key=${API_KEY}`;

  return fetch(url).then((response) => response.json());
};

function getMoviesCredits(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  return fetch(url).then((response) => response.json());
}

const getfMovieReview = (movieId) => {
  const url = `${MOVIE_BY_ID}/${movieId}/reviews?api_key=${API_KEY}`;
  return fetch(url).then((response) => response.json());
};

export {
  fatchTrending,
  fathSearch,
  getMovieDyId,
  getMoviesCredits,
  getfMovieReview,
};
