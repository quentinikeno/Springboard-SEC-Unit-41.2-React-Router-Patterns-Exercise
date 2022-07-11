import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

import "./App.css";

function App() {
	const initialState = [
		{ name: "red", color: "red" },
		{ name: "green", color: "green" },
		{ name: "blue", color: "blue" },
	];
	const [colors, setColors] = useState(initialState);
	const colorsNames = colors.map((color) => color.name);
	return (
		<div className="App">
			<Switch>
				<Route exact path="/colors">
					<ColorList colors={colorsNames} />
				</Route>
				<Route exact path="/colors/new">
					<NewColorForm />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
