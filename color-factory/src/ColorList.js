import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
	const colorLinks = colors.map((color) => (
		<Link key={color.id} to={`colors/${color.name.toLowerCase()}`}>
			{color.name}
		</Link>
	));
	colorLinks.reverse();
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
