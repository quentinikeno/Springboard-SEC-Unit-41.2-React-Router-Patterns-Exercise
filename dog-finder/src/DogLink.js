import { Link } from "react-router-dom";

const DogLink = ({ name, src }) => {
	return (
		<div>
			<Link to={`/dogs/${name.toLowerCase()}`}>
				<h3>{name}</h3>
				<img src={src} alt={name} />
			</Link>
		</div>
	);
};

export default DogLink;
