import Home from 'Pages/Home'

import Zinserificador from 'Pages/Zinserificador'
import Nayarificador from 'Pages/Nayarificador'
import Aragnificador from 'Pages/Aragnificador'

import {Store} from 'storable'
import {initialState, actions} from './Stores'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App = () => {

	return (
		<Store state={initialState} actions={actions}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/zinserificador" component={Zinserificador} />
					<Route path="/nayarificador" component={Nayarificador} />
					<Route path="/aragnificador" component={Aragnificador} />
					<Route component={() => <h1>404</h1>} />
				</Switch>	
			</Router>
		</Store>
	)
}