import enhancer from './enhancer'
import './index.styl'
import {Link} from 'react-router-dom'

const Aragnificador = ({submit, setText, text, Aragnificador}) => (
	<div className="Aragnificador-holder">
		<Link className='link' to='/'>Home</Link>
		<div className="container">
			<form onSubmit={submit} className="Aragnificador-form">
				<input type="text" name="text" id="text"
					onChange={(e) => setText(e.target.value)}
				/>
				<button type="submit">Aragnificar</button>
			</form>
			<h1>{Aragnificador}</h1>
		</div>
	</div>
)

export default enhancer(Aragnificador)