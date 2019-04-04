import { compose, withHandlers, withState, withMount, withWillUnmount, withEffect } from 'composable'
import { getZinserificador } from 'Services/lambda-zinser'

const enhancer = compose(
	withState('text', 'setText', ''),
	withState('zinserificado', 'setzinserificado', ''),

	withHandlers({
		submit: ({text, setzinserificado}) => (e) => {
			e.preventDefault()
			const result = getZinserificador(text)
			result.then(({data}) => setzinserificado(data))
		}
	})
)

export default enhancer