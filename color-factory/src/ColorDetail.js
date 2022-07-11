import { useParams, Link, Redirect } from "react-router-dom";

const ColorDetail = ({ colors }) => {
	const { name } = useParams();
	const foundColor = colors.find((color) => color.name === name);
	const divOrRedirect = foundColor ? (
		<div
			className="ColorDetail"
			style={{ backgroundColor: foundColor.color }}
		>
			<h1>This is {foundColor.name}</h1>
			<Link to="/colors">See all colors</Link>
		</div>
	) : (
		<Redirect to="/colors" />
	);
	return divOrRedirect;
};

export default ColorDetail;
