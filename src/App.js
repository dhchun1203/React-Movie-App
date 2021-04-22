import axios from "axios";
import React, { Component } from "react";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
	state = {
		isLoading: true,
		movies: [],
	};
	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(
			"https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
		);
		this.setState({
			isLoading: false,
			movies,
		});
		console.log(movies);
	};
	componentDidMount() {
		this.getMovies();
	}
	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">Loading...</span>
					</div>
				) : (
					<div className="movies">
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.id}
								year={movie.year}
								title={movie.title}
								summary={movie.summary}
								poster={movie.medium_cover_image}
								genres={movie.genres}
								rating={movie.rating}
							/>
						))}
					</div>
				)}
			</section>
		);
	}
}

export default App;
