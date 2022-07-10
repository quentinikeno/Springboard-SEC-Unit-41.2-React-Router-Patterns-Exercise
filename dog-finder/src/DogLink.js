import { Link } from "react-router-dom";

const DogLink = ({ name, src }) => {
	return (
		<div>
			<h3>{name}</h3>
			<img src={`./images/${src}`} alt={name} />
			<Link to={`/dogs/${src}`} />
		</div>
	);
};

export default DogLink;
