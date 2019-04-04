import enhancer from './enhancer'
import './index.styl'

const Aragnificador = ({submit, setText, text, Aragnificador}) => (
	<div className="Aragnificador-holder">
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