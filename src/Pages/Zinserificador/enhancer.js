import { compose, withHandlers, withState } from 'composable'
import { getZinserLambda } from '../../Services/lambda-zinser'

const enhancer = compose(
	
	withState('text', 'setText', ''),
	withState('zinserificado', 'setzinserificado', ''),

	withHandlers({
		submit: ({text, setzinserificado}) => (e) => {
			const result = getZinserLambda( '/zinserificador', text )
			result.then( setzinserificado )
			e.preventDefault()
		}
	})
)

export default enhancer