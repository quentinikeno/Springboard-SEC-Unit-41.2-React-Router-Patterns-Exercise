import { Switch, Route } from "react-router-dom";

import ColorList from "./ColorList";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/colors">
					<ColorList />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
