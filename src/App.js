import React from 'react'
// import Zinser from './zinser'

const Title = React.lazy(() => import('./zinser'))

class App extends React.Component {
	state = {
		count: 0		
	}

	increment = () => {
		this.setState(state => ({count: state.count + 1}))
	}

	decrement = () => {
		() => this.setState(state => ({count: state.count - 1}))
	}

	render() {
		return (
			<React.Fragment>
				<h1>
					{this.state.count > 5 ?
						<React.Suspense fallback={null}>
							<Title name={'zinser'} />
						</React.Suspense>
						: null
					}
				</h1>
				<h2>Count: {this.state.count}</h2>
				<button onClick={this.increment}>ADD</button>
				<button onClick={this.decrement}>MINUS</button>
			</React.Fragment>
		)
	}
}

export default App