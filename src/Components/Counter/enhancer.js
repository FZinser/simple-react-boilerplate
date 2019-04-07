import { compose, withHandlers, withState } from 'composable'
import { connect } from 'storable'

export default compose(
	
	connect(),

	withState('count', 'updateCount', 0),

	withHandlers({
		
		increment: ({ count, updateCount }) => (e) => {
			updateCount(count + 1)
		},

		decrement: ({ count, updateCount }) => (e) => {
			updateCount(count - 1)
		},

		updateName: ({ dispatch, state }) => (e) => {
			const lastItem = state.todo[state.todo.length - 1]
			dispatch({ type: 'CHANGE_NAME', payload:lastItem })
		}
	})

)   