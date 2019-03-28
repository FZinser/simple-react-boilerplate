import Home from 'Pages/Home'
import Zinserificador from 'Pages/Zinserificador'
import {Store} from 'storable'
import {initialState, actions} from './Stores'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const {Fragment} = React 

export const App = () => {

	return (
		<Router>
			<Store state={initialState} actions={actions}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/zinserificador" component={Zinserificador} />
					<Route component={() => <h1>404</h1>} />
				</Switch>
			</Store>
		</Router>
	)
}