import Counter from 'Components/Counter'
import {Store} from './Store'

const {Fragment} = React 

export const App = () => {

	return (
		<Store>
			<Fragment> 
				<Counter name="Zinser" />
			</Fragment>
		</Store>
	)
}