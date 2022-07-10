import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Doglist from "./Doglist";
import DogDetail from "./DogDetail";
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import duke from "./imgs/duke.jpg";
import perry from "./imgs/perry.jpg";
import "./App.css";

function App({ dogs }) {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/dogs">
						<Doglist dogs={dogs} />
					</Route>
					<Route exact path="/dogs/:name">
						<DogDetail dogs={dogs} />
					</Route>
					<Redirect replace to="/dogs" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	dogs: [
		{
			name: "Whiskey",
			age: 5,
			src: whiskey,
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Duke",
			age: 3,
			src: duke,
			facts: [
				"Duke believes that ball is life.",
				"Duke likes snow.",
				"Duke enjoys pawing other dogs.",
			],
		},
		{
			name: "Perry",
			age: 4,
			src: perry,
			facts: [
				"Perry loves all humans.",
				"Perry demolishes all snacks.",
				"Perry hates the rain.",
			],
		},
		{
			name: "Tubby",
			age: 4,
			src: tubby,
			facts: [
				"Tubby is really stupid.",
				"Tubby does not like walks.",
				"Angelina used to hate Tubby, but claims not to anymore.",
			],
		},
	],
};

export default App;
