import { compose, withHandlers, withState, withMount, withWillUnmount, withEffect } from 'composable'
import { connect } from 'storable'

export default compose(

	connect(['things']),

	withState('todo', 'setTodo' , ''),

	withMount((props) => {
		console.log('[Counter] - Mount')
	}),

	withEffect((props) => {
		console.log(props, 'Todo')
	}),

	withWillUnmount(() => {
		console.log('[Counter] - UnMount')
	}),

	withHandlers({
		
		addThing: ({ dispatch, setThings, todo, setTodo }) => (e) => {
			dispatch('ADD_THING', todo)
			setTodo('')
		},

		setInput: ({setTodo}) => (e) => {
			setTodo(e.target.value)
		}
	})

)   