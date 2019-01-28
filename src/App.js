import { compose, withState, withHandlers } from 'recompose'

const Title = React.lazy(() => import(/* webpackChunkName:"LazyTitle" */ 'Components/Title'))

const enhancer = compose(
	withState('count', 'updateCount', 0),
	withHandlers({
		increment: ({count, updateCount}) => () => {
			updateCount(count + 1)
		},
		decrement: ({count, updateCount}) => () => {
			updateCount(count - 1)	
		}
	})
)

const App = enhancer(({count, increment, decrement}) =>  {

		return (
			<React.Fragment>
				<h1>
					{count > 5 ?
						<React.Suspense fallback={null}>
							<Title name={'zinser'} />
						</React.Suspense>
						: null
					}
				</h1>
				<h2>Count: {count}</h2>
				<button onClick={increment}>ADD</button>
				<button onClick={decrement}>MINUS</button>
			</React.Fragment>
		)
	
})

export default App