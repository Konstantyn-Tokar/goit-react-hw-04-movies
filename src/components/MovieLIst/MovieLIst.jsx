import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import Container from "../Container";

import s from "./MoviesList.module.css";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <Container>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from:
                    location.pathname === "/"
                      ? "/"
                      : "/movies" + location.search,
                },
              }}
              className={s.text}
            >
              {movie.name ?? movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

MovieList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
