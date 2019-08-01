import { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Store} from 'storable'
import {initialState, reducer} from 'Store'

import Home from 'Pages/Home'
const Zinserificador = lazy(() => import(/* webpackChunkName:"Zinserificador" */'Pages/Zinserificador'))
const Nayarificador = lazy(() => import(/* webpackChunkName:"Nayarificador" */'Pages/Nayarificador'))
const Aragnificador = lazy(() => import(/* webpackChunkName:"Aragnificador" */'Pages/Aragnificador'))
const Artigos = lazy(() => import(/* webpackChunkName:"Artigos" */'Pages/Artigos'))
// import Nayarificador from 'Pages/Nayarificador'
// import Aragnificador from 'Pages/Aragnificador'



export const App = () => {

	return (
		<Store initialState={initialState} reducer={reducer}>
			<Router>
				<Suspense fallback={null}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/zinserificador" component={Zinserificador} />
						<Route path="/artigos" component={Artigos} />
						<Route path="/nayarificador" component={Nayarificador} />
						<Route path="/aragnificador" component={Aragnificador} />
						<Route component={() => <h1>404</h1>} />
					</Switch>	
				</Suspense>
			</Router>
		</Store>
	)
}