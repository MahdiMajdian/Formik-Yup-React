import "./App.css"

import { Route, Switch } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import CreateServicePage from "./pages/CreateServicePage"
function App() {
	return (
		<Switch>
			<Route path="/signup" component={SignUpPage} />
			<Route path="/create-service" component={CreateServicePage} />
			<Route path="/" exact component={HomePage} />
		</Switch>
	)
}

export default App
