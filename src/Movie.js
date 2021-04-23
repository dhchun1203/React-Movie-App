import React from "react";
import PropTypes from "prop-types";
import "./Movie.scss";

function Movie({ year, title, summary, poster, genres, rating }) {
	const titleUrl = `http://www.google.com/search?q=${title}`;
	return (
		<div className="movie">
			<img src={poster} alt="poster" title={title} />
			<div className="movie__data">
				<a href={titleUrl} target="_blank" rel="noreferrer">
					<span>
						<h3 className="movie__title">{title}</h3>
					</span>
				</a>
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
