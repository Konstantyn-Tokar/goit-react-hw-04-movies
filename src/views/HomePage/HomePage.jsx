import { useState, useEffect } from "react";
import { fatchTrending } from "../../services/api";
import MovieList from "../../components/MovieLIst";
import Container from "../../components/Container";
import s from "./HomePage.module.css";

function HomePage() {
  const [listMovies, setlistMovies] = useState([]);

  useEffect(() => {
    fatchTrending()
      .then((movie) => movie.results)
      .then(setlistMovies)
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h2 className={s.title}>Trending today</h2>
      <MovieList movies={listMovies} />
    </Container>
  );
}

export default HomePage;
