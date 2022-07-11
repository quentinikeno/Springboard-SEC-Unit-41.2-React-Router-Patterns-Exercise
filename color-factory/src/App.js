import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import ColorDetail from "./ColorDetail";

import "./App.css";

function App() {
	const initialState = [
		{ id: uuid(), name: "red", color: "red" },
		{ id: uuid(), name: "green", color: "green" },
		{ id: uuid(), name: "blue", color: "blue" },
	];
	const [colors, setColors] = useState(initialState);
	const addColor = (newColor) => setColors([...colors, newColor]);
	return (
		<div className="App">
			<Switch>
				<Route exact path="/colors">
					<ColorList colors={colors} />
				</Route>
				<Route exact path="/colors/new">
					<NewColorForm addColor={addColor} />
				</Route>
				<Route exact path="/colors/:name">
					<ColorDetail colors={colors} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
