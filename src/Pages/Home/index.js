import Counter from 'Components/Counter'
import TodoList from 'Components/TodoList'
import Icon from 'Components/Icon'
import StoreEnhancer from 'Store/enhancer'

import './index.styl'

const Home = () => (
	<div className="home-holder">
		<div className="container">
			<Icon name='facebook' />
			<Counter />
			<TodoList />
		</div>
	</div>
)

export default StoreEnhancer(Home)