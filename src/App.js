import Counter from 'Components/Counter'
import {Store} from 'storable'
import {initialState, actions} from './Stores'

const {Fragment} = React 

export const App = () => {

	return (
		<Store state={initialState} actions={actions}>
			<Fragment> 
				<Counter />
			</Fragment>
		</Store>
	)
}