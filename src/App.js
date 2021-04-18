import React, { Component } from "react";

class App extends Component {
	state = {
		isLoading: true,
		movies: [],
	};
	componentDidMount() {
		// fetch data
		// 만일 fetch data가 완료되면 isLoading을 false로 바꾸고
		// data를 렌더링 할 것!
		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, 2000);
	}
	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
	}
}

export default App;
