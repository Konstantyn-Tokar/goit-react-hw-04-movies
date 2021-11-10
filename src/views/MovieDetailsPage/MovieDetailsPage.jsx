import { useEffect, useState } from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { useParams, useLocation, useHistory } from "react-router";
import { ImArrowLeft } from "react-icons/im";
import { getMovieDyId } from "../../services/api";
import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";
import Container from "../../components/Container";

import s from "./MovieDetailsPage.module.css";

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500/";
//

function MoviesDetalisPage() {
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const hamdleGoBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
    }
  };

  useEffect(() => {
    getMovieDyId(movieId)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [movieId]);

  if (movie === null) {
    return <h1>Ничего не найдено</h1>;
  }

  return (
    <>
      <Container>
        <button className={s.button} type="button" onClick={hamdleGoBack}>
          <ImArrowLeft />
        </button>
        <div className={s.containerMovie}>
          <div>
            {movie.poster_path === null ? (
              <img
                src="https://i.pinimg.com/564x/d3/6f/cc/d36fccca7b52ace069c6f9056bf54049.jpg"
                alt={movie.title}
                className={s.moviePoster}
              />
            ) : (
              <img
                src={`${BASE_URL_IMG}${movie.poster_path}`}
                alt={movie.title}
                className={s.moviePoster}
              />
            )}
          </div>

          <div className={s.container}>
            <h2 className={s.titleMovie}>{movie.title}</h2>
            <div className={s.containerInfo}>
              <ul className={s.list}>
                <li className={s.item}>Vote / Votes:</li>
                <li className={s.item}>Popularity:</li>
                <li className={s.item}>Original:</li>
              </ul>
              <ul className={s.list}>
                <li className={s.item}>
                  <span className={s.vote}>{movie.vote_average}</span>/{" "}
                  <span className={s.votes}>{movie.vote_count}</span>
                </li>
                <li className={s.item}>
                  <span className={s.vote}>{movie.popularity}</span>
                </li>
                <li className={s.item}>
                  <span className={s.vote}>{movie.title}</span>
                </li>
              </ul>
            </div>
            <h3 className={s.subtitleAbout}>About</h3>
            <p className={s.about}>{movie.overview}</p>
            <hr />
            <div className={s.linkConatiner}>
              <NavLink
                to={{
                  pathname: `/movies/${movie?.id}/cast`,
                  state: { from: location?.state?.from },
                }}
                className={s.link}
                activeClassName={s.activelink}
              >
                Cast
              </NavLink>

              <NavLink
                to={{
                  pathname: `/movies/${movie?.id}/reviews`,
                  state: { from: location?.state?.from },
                }}
                className={s.link}
                activeClassName={s.activelink}
              >
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
      </Container>

      <Route path={`${url}/cast`}>
        <Cast id={movieId} />
      </Route>

      <Route path={`${url}/Reviews`}>
        <Reviews id={movieId} />
      </Route>
    </>
  );
}

export default MoviesDetalisPage;
