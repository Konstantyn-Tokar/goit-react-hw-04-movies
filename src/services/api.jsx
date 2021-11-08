const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `3d673b2d8e40eafc68577fae5a6a1f4b`;
const TRENDING_URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
const FILM_SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

const fatchTrending = () => {
  const url = `${TRENDING_URL}&page=1`;

  return fetch(url).then((response) => response.json());
};

const fathSearch = (searchQuery, page) => {
  const url = `${FILM_SEARCH_URL}&query=${searchQuery}&page=${page}`;

  return fetch(url).then((response) => response.json());
};

export { fatchTrending, fathSearch };
