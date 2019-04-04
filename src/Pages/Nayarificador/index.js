import enhancer from './enhancer'
import './index.styl'

const Nayarificador = ({submit, setText, text, Nayarificador}) => (
	<div className="Nayarificador-holder">
		<div className="container">
			<form onSubmit={submit} className="Nayarificador-form">
				<input type="text" name="text" id="text"
					onChange={(e) => setText(e.target.value)}
				/>
				<button type="submit">Nayarificar</button>
			</form>
			<h1>{Nayarificador}</h1>
		</div>
	</div>
)

export default enhancer(Nayarificador)