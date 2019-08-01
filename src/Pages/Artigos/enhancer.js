import { compose, withEffect, withMount, withState } from 'composable'
import { http } from 'Services/http'

const enhancer = compose(
	withState('content', 'setContent', ''),
	withState('teste', 'setteste', ''),
	withEffect(
		({ setContent, ...props }) => {
			console.log(props)
			http.get(`http://localhost:3000/wp-json/v1/postcontent?name=carteira-capital-iii`)
			.then(data => setContent(data))
		},
	[]),
	withMount(
		({ setteste }) => setTimeout(() => setteste('zinser'), 2000)
	)
)

export default enhancer