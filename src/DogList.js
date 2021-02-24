import { NavLink} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const DogList = ({dogs}) => {
	return (
		<div>
			{Object.keys(dogs).map((dog) => (
				<span key={uuid()}>
					<NavLink exact to={`/dogs/${dog}/`}>
						{dogs[dog].name}
					</NavLink>
				</span>
			))}
		</div>
	);
}

export default DogList;