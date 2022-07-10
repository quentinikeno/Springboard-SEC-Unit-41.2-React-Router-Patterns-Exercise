import { useParams } from "react-router-dom";
import "./DogDetail.css";

const DogDetail = ({ dogs }) => {
	const { name } = useParams();
	const foundDog = dogs.find(
		(dog) => dog.name.toLowerCase() === name.toLowerCase()
	);
	const { name: dogName, age, src, facts } = foundDog;
	return (
		<div className="DogDetail">
			<h1>{dogName}</h1>
			<img src={src} alt={name} />
			<h4>Age: {age}</h4>
			<h4 className="DogDetail-facts">Facts:</h4>
			<ul>
				{facts.map((fact) => (
					<li key={fact}>{fact}</li>
				))}
			</ul>
		</div>
	);
};

export default DogDetail;
