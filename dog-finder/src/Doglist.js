import DogLink from "./DogLink";
import "./Doglist.css";

const Doglist = ({ dogs }) => {
	const allDogs = dogs.map((dog) => (
		<DogLink name={dog.name} src={dog.src} key={dog.name} />
	));
	return (
		<div className="Doglist">
			<h1>React Dog Finder</h1>
			<div className="Doglist-list">{allDogs}</div>
		</div>
	);
};

export default Doglist;
