import axios from "axios";
import React, { Component } from "react";

class App extends Component {
	state = {
		isLoading: true,
		movies: [],
	};
	getMovies = async () => {
		const movies = await axios
			.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
			.then((response) => response.data.data.movies);

		this.setState({
			isLoading: false,
			movies: [movies],
		});
	};
	componentDidMount() {
		this.getMovies();
	}
	render() {
		const { isLoading, movies } = this.state;
		return (
			<div>
				{isLoading ? "Loading..." : movies.map((movie) => console.log(movie))}
			</div>
		);
	}
}

export default App;
