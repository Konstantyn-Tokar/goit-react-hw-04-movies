import { useState, useEffect } from "react";
import { fatchTrending } from "../services/api";
import MovieList from "../components/MovieLIst";

function HomeView() {
  const [listMovies, setlistMovies] = useState([]);

  useEffect(() => {
    fatchTrending()
      .then((movie) => movie.results)
      .then(setlistMovies)
      .catch((error) => console.log(error));
  }, []);

  console.log(listMovies);

  return (
    <>
      <MovieList movies={listMovies} />
    </>
  );
}

export default HomeView;
