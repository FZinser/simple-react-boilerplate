import Counter from 'Components/Counter'
import {Store} from './Stores'

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