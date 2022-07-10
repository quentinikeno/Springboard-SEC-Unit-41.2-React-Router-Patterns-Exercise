import { Link } from "react-router-dom";

const DogLink = ({ name, src }) => {
	return (
		<div>
			<h3>{name}</h3>
			<img src={src} alt={name} />
			<Link to={`/dogs/${name.toLowerCase()}`} />
		</div>
	);
};

export default DogLink;
