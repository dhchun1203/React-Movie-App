import React from "react";
import StarRating from "react-star-rating";

const Rating = ({ rating }) => {
	return (
		<StarRating
			name="react-star-rating"
			caption="Rate this component!"
			rating={Math.floor(rating / 2)}
			totalStars={5}
		/>
	);
};

export default Rating;
