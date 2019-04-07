import { compose, withHandlers, withState } from 'composable'
import { getZinserLambda } from 'Services/lambda-zinser'

const enhancer = compose(
	withState('text', 'setText', ''),
	withState('Aragnificador', 'setAragnificador', ''),

	withHandlers({
		submit: ({text, setAragnificador}) => (e) => {
			const result = getZinserLambda('/aragnificador', text)
			result.then( setAragnificador )
			e.preventDefault()
		}
	})
)

export default enhancer