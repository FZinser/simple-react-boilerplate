import { compose, withHandlers, withState, withMount, withWillUnmount, withEffect } from 'composable'
import { getNayarificador } from 'Services/nayarificar'
import {http} from 'Services/http'

const enhancer = compose(
	withState('text', 'setText', ''),
	withState('Nayarificador', 'setNayarificador', ''),

	withHandlers({
		submit: ({text, setNayarificador}) => (e) => {
			e.preventDefault()
			const result = getNayarificador(text)
			result.then(({data}) => setNayarificador(data))
		}
	})
)

export default enhancer