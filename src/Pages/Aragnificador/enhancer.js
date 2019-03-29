import { compose, withHandlers, withState, withMount, withWillUnmount, withEffect } from 'composable'
import { getAragnificador } from 'Services/aragnificar'
import {http} from 'Services/http'

const enhancer = compose(
	withState('text', 'setText', ''),
	withState('Aragnificador', 'setAragnificador', ''),

	withHandlers({
		submit: ({text, setAragnificador}) => (e) => {
			e.preventDefault()
			const result = getAragnificador(text)
			result.then(({data}) => setAragnificador(data))
		}
	})
)

export default enhancer