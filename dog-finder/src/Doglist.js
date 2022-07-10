import { Link } from "react-router-dom";

const Doglist = ({ dogs }) => {
	return (
		<div className="Doglist">
			<h1>React Dog Finder</h1>
			{dogs.map((dog) => (
				<div>
					<h3>{dog.name}</h3>
					<img src={`./images/${dog.src}`} alt={dog.name} />
					<Link exact to={`/dogs/${dog.src}`} />
				</div>
			))}
		</div>
	);
};

export default Doglist;
