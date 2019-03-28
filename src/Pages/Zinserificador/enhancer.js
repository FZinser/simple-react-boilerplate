import { compose, withHandlers, withState, withMount, withWillUnmount, withEffect } from 'composable'
import { getZinserificado } from 'Services/zinserificar'
import {http} from 'Services/http'

const enhancer = compose(
	withState('text', 'setText', ''),
	withState('zinserificado', 'setzinserificado', ''),

	withHandlers({
		submit: ({text, setzinserificado}) => (e) => {
			e.preventDefault()
			const result = getZinserificado(text)
			result.then(({data}) => setzinserificado(data))
		}
	})
)

export default enhancer