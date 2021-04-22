import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres, rating }) {
	console.log(genres);
	console.log(rating);
	return (
		<div className="movie">
			<img src={poster} alt="poster" title={title} />
			<div className="movie__data">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<p className="movie__genres">{genres.join(", ")}</p>
				<p className="movie__rating">Rating: {rating}/10</p>
				<p className="movie__summary">{summary}</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	rating: PropTypes.number.isRequired,
};
export default Movie;
