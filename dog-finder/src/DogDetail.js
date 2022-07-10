import { useParams } from "react-router-dom";

const DogDetail = ({ dogs }) => {
	const { name } = useParams();
	const foundDog = dogs.find((dog) => dog.name === name);
	const { age, src, facts } = foundDog;
	return (
		<div>
			<h1>{name}</h1>
			<h4>{age}</h4>
			<img src={src} alt={name} />
			<ul>
				{facts.map((fact) => (
					<li>{fact}</li>
				))}
			</ul>
		</div>
	);
};

export default DogDetail;
