import { Switch, Route } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/colors">
					<ColorList />
				</Route>
				<Route exact path="/colors/new">
					<NewColorForm />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
