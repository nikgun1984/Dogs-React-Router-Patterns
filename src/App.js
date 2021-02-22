import './App.css';
import {Route,Switch} from 'react-router-dom';
import DogList from './DogList';

function App() {
  return (
		<div className="App">
			<header className="App-header">Dogs</header>
			<main>
				<Switch>
					<Route exact path="/dogs">
						<DogList />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
