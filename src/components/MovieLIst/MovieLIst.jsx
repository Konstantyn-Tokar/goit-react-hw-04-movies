import Container from "../Container";
import s from "./MoviesList.module.css";

function MovieList({ movies }) {
  return (
    <Container>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <p className={s.text}>{movie.name ?? movie.title}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default MovieList;
