import { Routes, Route, Navigate } from "react-router-dom";
import Doglist from "./Doglist";
import DogDetail from "./DogDetail";
import "./App.css";

function App({ dogs }) {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/dogs">
					<Doglist dogs={dogs} />
				</Route>
				<Route exact path="/dogs/:name">
					<DogDetail />
				</Route>
				<Navigate replace to="/dogs" />
			</Routes>
		</div>
	);
}

App.defaultProps = {
	dogs: [
		{
			name: "Whiskey",
			age: 5,
			src: "whiskey",
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Duke",
			age: 3,
			src: "duke",
			facts: [
				"Duke believes that ball is life.",
				"Duke likes snow.",
				"Duke enjoys pawing other dogs.",
			],
		},
		{
			name: "Perry",
			age: 4,
			src: "perry",
			facts: [
				"Perry loves all humans.",
				"Perry demolishes all snacks.",
				"Perry hates the rain.",
			],
		},
		{
			name: "Tubby",
			age: 4,
			src: "tubby",
			facts: [
				"Tubby is really stupid.",
				"Tubby does not like walks.",
				"Angelina used to hate Tubby, but claims not to anymore.",
			],
		},
	],
};

export default App;
