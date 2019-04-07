import { compose, withHandlers, withState } from 'composable'
import { connect } from 'storable'

export default compose(
	
	connect(),

	withState('todo', 'setTodo' , ''),

	withHandlers({
		
		addThing: ({dispatch, todo}) => (e) => {
			dispatch({ type:'ADD_TODO', payload :todo })
		},

		setInput: ({setTodo}) => (e) => {
			setTodo(e.target.value)
		}
	})

)   