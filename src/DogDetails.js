import { useParams } from "react-router-dom";
import "./DogDetails.css";
import { v4 as uuid } from "uuid";

export const DogDetails = ({ dogs }) => {
	const { name } = useParams();
	const animal = dogs[name].src;
	let img = animal ? (
		<img
			src={require(`./images/${animal}`).default}
			alt={name}
			className="DogDetails-image"
		/>
	) : null;
	return (
		<div>
			<h1>{name}</h1>
			{img}
			<h3>Age:{dogs[name].age}</h3>
			<ul>
				<h3>
					<b>Facts:</b>
				</h3>
				{dogs[name].facts.map((fact) => (
					<li key={uuid()}>{fact}</li>
				))}
			</ul>
			<a href="/dogs">Go to Home Page</a>
		</div>
	);
};
