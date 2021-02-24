import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import { DogDetails } from "./DogDetails";
export const Routes = () => {
	return (
		<Switch>
				<Route exact path="/dogs">
					<DogList />
				</Route>
				<Route path="/dogs/:name">
					<DogDetails />
				</Route>
				<Redirect to="/dogs" />
		</Switch>
	);
}