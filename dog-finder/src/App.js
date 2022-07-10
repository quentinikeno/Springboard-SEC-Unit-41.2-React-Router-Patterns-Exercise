import { Switch, Route, Redirect } from "react-router-dom";

import Doglist from "./Doglist";
import DogDetail from "./DogDetail";
import Navbar from "./Navbar";

import dogs from "./dogs";

import "./App.css";

function App({ dogs }) {
	const dogNames = dogs.map((dog) => dog.name);
	return (
		<div className="App">
			<Navbar names={dogNames} />
			<Switch>
				<Route exact path="/dogs">
					<Doglist dogs={dogs} />
				</Route>
				<Route exact path="/dogs/:name">
					<DogDetail dogs={dogs} />
				</Route>
				<Redirect replace to="/dogs" />
			</Switch>
		</div>
	);
}

App.defaultProps = {
	dogs,
};

export default App;
