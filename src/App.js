import './App.css';
import {Route,Switch, Redirect, BrowserRouter} from 'react-router-dom';
import { Dogs } from "./dogs";
import DogList from './DogList';
import {DogDetails} from './DogDetails';

function App() {
  return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/dogs">
						<DogList dogs={Dogs.dogs} />
					</Route>
					<Route path="/dogs/:name">
						<DogDetails dogs={Dogs.dogs} />
					</Route>
					<Redirect to="/dogs" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
