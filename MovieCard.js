import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating, trailerLink } = movie;

  return (
    <Link to={`/movie/${title}`} className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;

