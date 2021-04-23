import axios from "axios";
import React, { Component } from "react";
import Movie from "./Movie";
import "./App.scss";

class App extends Component {
	state = {
		isLoading: true,
		movies: [],
		theposition: Object,
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
	};
	componentDidMount() {
		this.getMovies();
		window.addEventListener("scroll", this.listenToScroll);
	}
	listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const scrolled = winScroll / height;

		this.setState({
			theposition: scrolled,
		});
		this.handleScroll(this.state.theposition);
	};
	handleScroll(theposition) {
		if (theposition >= 0.1) {
			document.querySelector(".scrollBtn").classList.add("visible");
		} else {
			document.querySelector(".scrollBtn").classList.remove("visible");
		}
	}
	scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	};
	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className="container">
				<button className="scrollBtn" onClick={this.scrollToTop}>
					<span>
						<i className="fas fa-angle-double-up"></i>
					</span>
				</button>
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
