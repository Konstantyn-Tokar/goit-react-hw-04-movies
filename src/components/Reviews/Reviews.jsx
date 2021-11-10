import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getfMovieReview } from "../../services/api";
import Container from "../../components/Container";

import s from "./Reviews.module.css";

function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getfMovieReview(id)
      .then((data) => data.results)
      .then(setReviews);
  }, [id]);
  return (
    <Container>
      {reviews?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul className={s.list}>
        {reviews.map(
          (review) =>
            review.author && (
              <li className={s.item} key={review.id}>
                <h2>{review.author}</h2>
                <hr />
                <p>{review.content}</p>
              </li>
            )
        )}
      </ul>
    </Container>
  );
}

Reviews.propType = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
