import DogLink from "./DogLink";

const Doglist = ({ dogs }) => {
	return (
		<div className="Doglist">
			<h1>React Dog Finder</h1>
			{dogs.map((dog) => (
				<DogLink name={dog.name} src={dog.src} key={dog.name} />
			))}
		</div>
	);
};

export default Doglist;
