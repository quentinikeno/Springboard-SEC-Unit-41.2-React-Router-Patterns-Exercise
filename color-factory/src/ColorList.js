import { Link } from "react-router-dom";

const ColorList = (colors = ["red", "green", "blue"]) => {
	const colorLinks = colors.map((color) => (
		<Link to={`colors/${color}`}>{color}</Link>
	));
	return (
		<div className="ColorList">
			<div className="ColorList-jumbotron">
				<h1>Welcome to the color factory.</h1>
				<Link to="colors/new">Add a color</Link>
			</div>
			<div className="ColorList-colors">
				<p>Please select a color.</p>
				{colorLinks}
			</div>
		</div>
	);
};

export default ColorList;
