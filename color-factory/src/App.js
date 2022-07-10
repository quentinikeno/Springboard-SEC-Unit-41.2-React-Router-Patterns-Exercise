import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/color">
					<ColorList />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
