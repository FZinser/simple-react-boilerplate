import SubTitle from 'Components/SubTitle'
import ImageTest from 'Images/Test-Logo.png'

const Zinser = ({ name }) =>
	<React.Fragment>
		<h1>Oi Hello {name}</h1>
		<img src={ImageTest} alt="Test Image"/>
	</React.Fragment>

export default Zinser