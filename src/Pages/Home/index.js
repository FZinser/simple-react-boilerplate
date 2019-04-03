import Counter from 'Components/Counter'
import TodoList from 'Components/TodoList'
import './index.styl'

const Home = () => (
	<div className="home-holder">
		<div className="container">
			<Counter />
			<TodoList />
		</div>
	</div>	
)

export default Home