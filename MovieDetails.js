import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { description, posterURL, rating, trailerLink } = movie;

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        <iframe width="560" height="315" src={trailerLink} title={`${title} Trailer`} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;

