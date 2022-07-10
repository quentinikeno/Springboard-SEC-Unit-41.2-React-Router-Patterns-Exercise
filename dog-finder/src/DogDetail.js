import { useParams } from "react-router-dom";

const DogDetail = ({ dogs }) => {
	const { name } = useParams();
	const foundDog = dogs.find(
		(dog) => dog.name.toLowerCase() === name.toLowerCase()
	);
	const { name: dogName, age, src, facts } = foundDog;
	return (
		<div>
			<h1>{dogName}</h1>

			<img src={src} alt={name} />
			<h4>Age: {age}</h4>
			<ul>
				{facts.map((fact) => (
					<li key={fact}>{fact}</li>
				))}
			</ul>
		</div>
	);
};

export default DogDetail;
