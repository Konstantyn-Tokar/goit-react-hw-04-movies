import { useState } from "react";

import Searchbar from "../../components/Searchbar";
import Container from "../../components/Container";
import MovieList from "../../components/MovieLIst/MovieLIst";
import { fathSearch } from "../../services/api";

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const onSubmit = (query) => {
    fathSearch(query)
      .then((movies) => movies.results)
      .then(setMovies)
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </Container>
  );
}

export default MoviesPage;
