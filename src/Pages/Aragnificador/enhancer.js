import { compose, withHandlers, withState } from 'composable'
import { getAragnificador } from 'Services/lambda-zinser'

const enhancer = compose(
	withState('text', 'setText', ''),
	withState('Aragnificador', 'setAragnificador', ''),

	withHandlers({
		submit: ({text, setAragnificador}) => (e) => {
			const result = getAragnificador(text)
			result.then( setAragnificador )
			e.preventDefault()
		}
	})
)

export default enhancer