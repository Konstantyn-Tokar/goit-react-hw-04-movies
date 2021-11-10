import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMoviesCredits } from "../../services/api";
import Container from "../Container";
import s from "./Cast.module.css";

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500/";

function Cast({ id }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    return getMoviesCredits(id)
      .then((actorsCast) => actorsCast.cast)
      .then(setActors);
  }, [id]);

  return (
    <Container>
      <hr />
      <ul className={s.list}>
        {actors.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
        {actors.map((actor) => (
          <li key={actor.id} className={s.item}>
            {actor.profile_path === null && (
              <img
                className={s.img}
                src="https://i.pinimg.com/564x/f4/11/a9/f411a924f387f253017cdf4137a55be7.jpg"
                alt=""
              />
            )}
            <img
              className={s.img}
              src={`${BASE_URL_IMG}${actor.profile_path}`}
              alt=""
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Cast;
