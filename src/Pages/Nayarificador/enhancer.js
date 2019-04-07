import { compose, withHandlers, withState } from 'composable'
import { getZinserLambda } from '../../Services/lambda-zinser'

const enhancer = compose(
	withState('text', 'setText', ''),
	withState('Nayarificador', 'setNayarificador', ''),

	withHandlers({
		submit: ({text, setNayarificador}) => (e) => {
			e.preventDefault()
			const result = getZinserLambda('/nayarificador', text)
			result.then( setNayarificador )
		}
	})
)

export default enhancer