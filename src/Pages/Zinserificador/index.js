import enhancer from './enhancer'
import './index.styl'

const Zinserificador = ({submit, setText, text, zinserificado}) => (
	<div className="zinserificador-holder">
		<div className="container">
			<form onSubmit={submit} className="zinserificador-form">
				<input type="text" name="text" id="text"
					onChange={(e) => setText(e.target.value)}
				/>
				<button type="submit">Zinserificar</button>
			</form>
			<h1>{zinserificado}</h1>
		</div>
	</div>
)

export default enhancer(Zinserificador)